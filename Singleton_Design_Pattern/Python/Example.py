import mysql.connector

class DatabaseConnection:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if not cls._instance:
            cls._instance = super(DatabaseConnection, cls).__new__(cls)
            # Initialize the database connection here
            cls._instance.connection = mysql.connector.connect(
                user='avnadmin',
                password='AVNS_QClCbSDkJtLl7_1SXvl',
                host='mysql-2ce5c66a-hellraisers-f9cd.a.aivencloud.com',
                database='defaultdb',
                port='13186'
            )
            cls._instance.cursor = cls._instance.connection.cursor()
        return cls._instance

    def execute_query(self, query, parameters=None):
        try:
            if parameters:
                self.cursor.execute(query, parameters)
            else:
                self.cursor.execute(query)
            self.connection.commit()
            return True
        except Exception as e:
            print(f"Error executing query: {e}")
            return False

    def fetch_data(self, query, parameters=None):
        try:
            if parameters:
                self.cursor.execute(query, parameters)
            else:
                self.cursor.execute(query)
            return self.cursor.fetchall()
        except Exception as e:
            print(f"Error fetching data: {e}")
            return None

    def close_connection(self):
        try:
            if self.connection.is_connected():
                self.connection.close()
                print("Database connection closed.")
            else:
                print("Database connection is already closed.")
        except Exception as e:
            print(f"Error closing connection: {e}")

# Example usage:
db_instance = DatabaseConnection()
result = db_instance.execute_query("CREATE TABLE IF NOT EXISTS example_table (id INTEGER PRIMARY KEY, name TEXT)")
if result:
    print("Table created successfully.")

# Inserting data
insert_query = "INSERT INTO example_table (id, name) VALUES (%s, %s)"
insert_parameters = (1,"John Doe")
result = db_instance.execute_query(insert_query, insert_parameters)
if result:
    print("Data inserted successfully.")

db_instance2 = DatabaseConnection()
# Fetch and display data
select_query = "SELECT * FROM example_table"
data = db_instance2.fetch_data(select_query)
if data:
    print("Fetched data:")
    for row in data:
        print(f"ID: {row[0]}, Name: {row[1]}")
else:
    print("No data found.")

# Close the connection
db_instance2.close_connection()

#Verify if the first instance is closed. If its closed, then this implies both instances are same.
db_instance.close_connection()