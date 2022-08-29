import sqlite3

conn = sqlite3.connect("tasks_db.db")
cursor = conn.cursor()

create_table = """CREATE TABLE IF NOT EXISTS TASKS(
    Remarks TEXT,
    Study TEXT,
    Day TEXT
)"""

cursor.execute(create_table)

conn.commit()
conn.close()