import sqlite3

conn = sqlite3.connect('example.db')
cursor = conn.cursor()

data = [
    ('a', 100),
    ('b', 200),
    ('c', 300)
]

cursor.execute("""
    CREATE TABLE IF NOT EXISTS EMPLOYEE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NAME TEXT NOT NULL,
    SALARY REAL)
""")

cursor.executemany("INSERT INTO EMPLOYEE (NAME, SALARY) VALUES (?, ?)", data)

conn.commit()
conn.close()

print("Employee table created successfully.")