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
