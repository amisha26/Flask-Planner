import sqlite3

conn = sqlite3.connect("user_db.sqlite")

cursor = conn.cursor()    #cursor object is used to execute sql statements

if 
create_table = """ CREATE TABLE USERS (
    Username TEXT, 
    Password TEXT)"""

#cursor.execute(create_table)

insert_table = """ INSERT INTO USERS (Username, Password)
VALUES ('Amisha', '1234') 
"""

cursor.execute(insert_table)