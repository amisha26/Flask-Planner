from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/login', methods = ['POST'])
def login():
    try:
        if user in user_db:
            if user_db[user] == password:
                return "Success", 200
            else:
                return jsonify({"msg":"invalid password"}), 400
        else:
            return jsonify({"msg":"User does not exist. Signup instead"}), 400
    except Exception as e:
        print(e)
        return jsonify({"msg":"Something went wrong"}), 500


if __name__=='__main__':
    app.run(debug=True)