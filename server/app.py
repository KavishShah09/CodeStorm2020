from flask import Flask, jsonify, request
import json

app = Flask(__name__)


@app.route('/ping', methods=['GET', 'POST'])
def index():
    print("Hello from frontend")
    data = request.data
    obj = json.loads(data)
    print(obj['ping'])
    return jsonify({"ping": "pong"})


if __name__ == '__main__':
    app.run(debug=True)
