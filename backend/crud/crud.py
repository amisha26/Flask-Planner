from flask import Flask, request, jsonify, render_template
import sqlite3, uuid
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/remarks", methods = ['POST', 'GET'])
def add_task():
    conn = sqlite3.connect("tasks_db.db")
    cursor = conn.cursor()
    if request.method == "GET":
        cursor.execute("SELECT * FROM `TASKS`")
        res = cursor.fetchall()
        task_dic={}
        for i in res:
            task_dic[i[0]] = [i[1], i[2], i[3]]
        print(task_dic)
        if res:
            return jsonify({"msg": res}), 200
        else:
            return jsonify({"msg":"invalid password"}), 400

    elif request.method == "POST":
        req = request.get_json()
        task_name, study, day = req["remark"], req["study"], req["day"]
        try:
            cursor.execute("INSERT INTO TASKS (id, Remarks, study, day) VALUES (?,?,?,?)",(uuid.uuid1().hex, task_name, study, day) )
            conn.commit()
            return jsonify({"msg":"Task added"})
        except Exception as e:
            print(e)
            conn.rollback()
            return jsonify({"msg":"Task failed to add"})


if __name__=='__main__':
    app.run(debug=True, port = 5050)