import sqlite3

conn = sqlite3.connect('example.db')
cursor = conn.cursor()

cursor.execute('SELECT * FROM EMPLOYEE ORDER BY SALARY DESC')
rows = cursor.fetchall()

print('Employee records: \n')
for row in rows:
    print(row)
    
conn.close()