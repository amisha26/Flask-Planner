from flask import Flask, jsonify, request
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/login', methods = ['POST'])
def login():
    conn = sqlite3.connect("user_db.db")
    cursor = conn.cursor()
    req = request.get_json()
    user, password = req["userId"], req["password"]
    cursor.execute(f"select * from USERS where Username = '{user}' AND Password = '{password}'")
    y = cursor.fetchone()
    if y:
        return jsonify({"msg":"success"}), 200
    else:
        return jsonify({"msg":"invalid password"}), 400

if __name__=='__main__':
    app.run(debug=True, port = 5050)