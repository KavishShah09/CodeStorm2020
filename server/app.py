from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
from passlib.hash import sha256_crypt
import json

app = Flask(__name__)
app.config.from_pyfile('config.py')

mysql = MySQL(app)


@app.route('/ping', methods=['GET', 'POST'])
def index():
    print("Hello from frontend")
    obj = json.loads(request.data)
    print(obj['ping'])
    return jsonify({"ping": "pong"})


@app.route('/api/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        obj = json.loads(request.data)
        first_name = obj['first_name']
        last_name = obj['last_name']
        email = obj['email']
        username = obj['username']
        address = obj['address']
        phone_number = obj['phone_number']
        age = obj['age']
        password = sha256_crypt.encrypt(str(obj['password']))

        cur = mysql.connection.cursor()
        result = cur.execute(
            'SELECT username FROM users WHERE email=%s', [email])
        if result > 0:
            return jsonify({"error_message": "The entered email address or username has already been taken"})
        else:
            cur.execute(
                f'INSERT INTO users (first_name, last_name, username, email, password, address, age, phone_number) values(%s, %s, %s, %s, %s, %s, %s, %s)', (first_name, last_name, username, email, password, address, age, phone_number))
            mysql.connection.commit()
            cur.close()
            return jsonify({"error_message": ""})


if __name__ == '__main__':
    app.run(debug=True)
