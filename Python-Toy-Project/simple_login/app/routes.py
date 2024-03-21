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
