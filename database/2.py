import sqlite3

conn = sqlite3.connect('example.db')
cursor = conn.cursor()

cursor.execute("UPDATE EMPLOYEE SET SALARY = ? WHERE ID = ?", (400, 2))

conn.commit()
conn.close()

print("Employee salary updated successfully.")