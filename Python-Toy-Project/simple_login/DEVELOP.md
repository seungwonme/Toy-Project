# Flask로 DB없이 간단히 로그인, 회원가입 구현하기

## 프로젝트 구조
```
web/
│
├── app/
│   ├── __init__.py
│   ├── auth.py
│   ├── routes.py
│   ├── models.py
│   └── templates/
│       ├── index.html
│       ├── login.html
│       └── mypage.html
│       └── signup.html
│
├── users_data/
├── password.json
├── requirements.txt
└── run.py
```

## 코드 설명

### Flask 애플리케이션 생성과 설정 (app/__init__.py)
```python
from flask import Flask

def create_app():
    app = Flask(__name__, template_folder="templates")
    app.secret_key = 'your_secret_key'  # 세션을 위한 비밀 키 설정
    
    from .auth import auth_bp
    app.register_blueprint(auth_bp)
    
    from .routes import routes_bp
    app.register_blueprint(routes_bp)
    
    return app
```
- `Flask(__name__, template_folder="templates")`: Flask 인스턴스를 생성하고, 템플릿 파일들이 위치한 폴더를 지정
- `app.secret_key`: Flask 세션을 암호화하기 위한 비밀 키를 설정, 이 키는 세션 데이터의 안전성을 보장하는 데 사용
- `register_blueprint()`: `Blueprint` 객체를 등록하여 애플리케이션에 라우트와 기타 앱 관련 설정을 추가

### 사용자 인증 (app/auth.py)
```python
from flask import Blueprint, render_template, request, redirect, url_for, session
from .models import load_user_data, save_user_data

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

def valid_login(username, password):
    user_data = load_user_data(username)
    print(user_data)
    return user_data.get('password') == password

@auth_bp.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        if valid_login(request.form["username"], request.form["password"]):
            session['username'] = request.form["username"]
            return redirect(url_for('routes.mypage'))
        else:
            error = "Invalid username/password"
            return render_template("login.html", error=error)
    return render_template("login.html")

@auth_bp.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        user_data = load_user_data(username)
        if user_data:
            error = "User already exists."
            return render_template("signup.html", error=error)
        else:
            save_user_data(username, {'password': password})
            return redirect(url_for('auth.login'))
    return render_template("signup.html")
```
- `Blueprint`: Flask 애플리케이션을 구조화하는 데 사용되며, 관련된 라우트와 함수를 그룹화, `url_prefix='/auth'`는 이 블루프린트의 모든 라우트 URL 앞에 `/auth`를 붙인다
- `valid_login`: 사용자 이름과 비밀번호를 받아 올바른지 검증, 이 함수는 `load_user_data를` 통해 사용자 데이터를 불러와 입력받은 비밀번호와 비교

### 라우트 정의와 사용자 데이터 처리 (app/routes.py)
```python
from flask import Blueprint, render_template, request, redirect, url_for, session
from .models import load_user_data, save_user_data

routes_bp = Blueprint('routes', __name__)

@routes_bp.route("/")
def index():
    return render_template("index.html")

@routes_bp.route("/mypage")
def mypage():
    if 'username' in session:
        username = session['username']
        user_data = load_user_data(username)
        return render_template("mypage.html", username=username, name=user_data.get('name', ''), age=user_data.get('age', ''))
    else:
        return redirect(url_for('auth.login'))

@routes_bp.route('/update-info', methods=['POST'])
def update_info():
    if 'username' not in session:
        return redirect(url_for('auth.login'))
    
    username = session['username']
    name = request.form['name']
    age = request.form['age']

    user_data = load_user_data(username)
    user_data['name'] = name
    user_data['age'] = age
    save_user_data(username, user_data)
    
    return redirect(url_for('routes.mypage'))
```
- `@routes_bp.route("/mypage")`: 이 데코레이터는 `/mypage` URL에 접근했을 때 실행될 함수를 지정
- 사용자 데이터를 불러오고 저장하는 작업은 `models.py` 파일에 정의된 함수를 사용

### 사용자 데이터 처리 (app/models.py)
```python
import json
import os

def load_user_data(username):
    user_data_file = os.path.join('users_data', f'{username}.json')
    try:
        with open(user_data_file, 'r') as file:
            data = json.load(file)
    except FileNotFoundError:
        data = {}
    return data

def save_user_data(username, data):
    os.makedirs('users_data', exist_ok=True)
    user_data_file = os.path.join('users_data', f'{username}.json')
    with open(user_data_file, 'w') as file:
        json.dump(data, file, indent=4)
```
- `os.path.join()`: 파일 경로를 생성
