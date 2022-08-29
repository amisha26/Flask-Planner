import sqlite3

conn = sqlite3.connect("user_db.db")

cursor = conn.cursor()    #cursor object is used to execute sql statements

create_table = """ CREATE TABLE IF NOT EXISTS USERS (
    Username TEXT, 
    Password TEXT)"""

cursor.execute(create_table)


cursor.execute(""" INSERT INTO USERS (Username, Password)
VALUES ('Amisha', '1234') """)

cursor.execute(""" INSERT INTO USERS (Username, Password)
VALUES ('Manvi', '4321') """)

cursor.execute(""" INSERT INTO USERS (Username, Password)
VALUES ('Mansi', '2468') """)

cursor.execute(""" INSERT INTO USERS (Username, Password)
VALUES ('Harshita', '8642') """)

conn.commit()
conn.close()