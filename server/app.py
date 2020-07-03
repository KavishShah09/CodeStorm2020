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
            'SELECT username FROM users WHERE email=%s', [username])
        if result > 0:
            return jsonify({"error_message": "The entered username has already been taken"})
        else:
            cur.execute(
                'INSERT INTO users (first_name, last_name, username, email, password, address, age, phone_number) values(%s, %s, %s, %s, %s, %s, %s, %s)', (first_name, last_name, username, email, password, address, age, phone_number))
            mysql.connection.commit()
            cur.close()
            return jsonify({"error_message": ""})


@app.route('/api/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        obj = json.loads(request.data)
        username = obj['username']
        password_input = obj['password']

        cur = mysql.connection.cursor()

        result = cur.execute(
            "SELECT * FROM users WHERE username = %s", [username])

        if result > 0:
            user = cur.fetchone()
            userID = user['id']
            password = user['password']
            role = user['role']

            if sha256_crypt.verify(password_input, password):
                return jsonify({"error_message": "", "role": role, "user_id": userID})
            else:
                return jsonify({"error_message": "Password is incorrect. Please try again"})
        else:
            return jsonify({"error_message": f"User with username '{username}' does not exist. Sign Up if you haven't registered"})


@app.route('/api/items', methods=['GET', 'POST'])
def items():
    cur = mysql.connection.cursor()
    if request.method == 'GET':

        result = cur.execute('SELECT * FROM items')
        if result > 0:
            items = cur.fetchall()
            return jsonify({"items": items, "error_message": ""})
        else:
            return jsonify({"error_message": "No products available"})
    if request.method == 'POST':
        obj = json.loads(request.data)
        title = obj['title']
        description = obj['description']
        category = obj['category']
        price = obj['price']
        rating = obj['rating']
        image_path = obj['image_path']

        cur.execute('INSERT INTO items (title, description, category, price, rating, image_path) values(%s, %s, %s, %s, %s, %s)',
                    (title, description, category, price, rating, image_path))

        mysql.connection.commit()
        cur.close()

        return jsonify({"error_message": ""})


@app.route('/api/item/<string:id>')
def item(id):
    cur = mysql.connection.cursor()
    result = cur.execute('SELECT * FROM items WHERE id = %s', [id])
    if result > 0:
        item = cur.fetchone()
        return jsonify({"item": item, "error_message": ""})
    else:
        return jsonify({"error_message": f"No item found for id {id}"})


if __name__ == '__main__':
    app.run(debug=True)
