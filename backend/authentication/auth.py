from flask import Flask, jsonify, request

app = Flask(__name__)

def login():
    if user in user_db:
        if user_db[user] == password:
            return "Success", 200
        else:
            return jsonify({"msg":"invalid password"})
    else:
        return jsonify({"msg":"User does not exist. Signup instead"})



if __name__=='__main__':
    app.run(debug=True)