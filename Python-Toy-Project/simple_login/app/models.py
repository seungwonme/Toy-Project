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
