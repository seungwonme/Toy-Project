# 애플리케이션을 생성하고 초기화하는 코드
from flask import Flask

def create_app():
    app = Flask(__name__, template_folder="templates")
    app.secret_key = 'your_secret_key'
    
    from .auth import auth_bp
    app.register_blueprint(auth_bp)
    
    from .routes import routes_bp
    app.register_blueprint(routes_bp)
    
    return app
