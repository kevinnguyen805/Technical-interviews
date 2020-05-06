Normalization Guides
- Each record has a primary key 
- No fields are repeated 
- All fields relate to the key data 
- Each field entry contains a single data point 
- There are no redundant entries 

Stretch 
* Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 8 records.
* Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.


Multi Table Queries 
* Display the ProductName and CategoryName for all products in the database. Returns 77 records.
* Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Returns 429 records.
* Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Returns 3 records.
* Display the OrderID, customer's Company Name and the employee's Last Name for every order. All columns should be labeled clearly. Returns 16,789 records.

SELECT Shippers.ShipperName, COUNT(Orders.OrderID) 
AS NumberOfOrders FROM Orders 
LEFT JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID 
GROUP BY ShipperName 



What is the difference between RDBMS and SQL? 
- Relational database management system is the _Database Software_ that manages querying, storage, updating
     - RMDBS is used to organize data as _tables_ where columns represent points of data and rows are points of entry 
- SQL is Structured Query Language 
     - Language used to interact with data (search and manipulate data)

*TODO* 
- Specify which columns you are joining via: 
     *Table1.Column = Table2.Column*
- Inner Join 
     - returns rows from tables where the key record of one table is equal to the key records of another table  
- Outer Join 
     - returns all rows from one table and only rows from the secondary table 
FROM Table1 
INNER JOIN Table2
ON Condition


*TODO* Display the ProductName and CategoryName for all products in the database. Returns 77 records.
SELECT Product.ProductName, Category.CategoryName 
FROM Products 
JOIN Category 
ON Product.CategoryID = Category.CategoryID 


*TODO* Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Returns 429 records.
SELECT [Orders].OrderID, Shippers.CompanyName 
FROM Orders 
JOIN Shippers 
ON Orders.ShipperID = Shippers.ShipperID 
WHERE Orders.OrderDate < '2012-09-08'


*TODO* Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Returns 3 records.
SELECT Products.ProductName, OrderDetails.Quantity 
FROM Products 
JOIN OrderDetails 
ON Products.ProductID = OrderDetails.ProductID 
WHERE OrderDetails.OrderID = 10251
ORDER BY Products.ProductName DESC 
LIMIT 3 



*TODO* Display the OrderID, customer's Company Name and the employee's Last Name for every order. All columns should be labeled clearly. Returns 16,789 records.
SELECT Orders.OrderID, Customers.CustomerName, Employees.LastName 
FROM Orders  
JOIN Employees  ON Employees.EmployeeID = Orders.EmployeeID 
JOIN Customers  ON Customers.CustomerID = Orders.CustomerID 

- Note: To join 3 tables, you must have a CENTRAL table holding both foreign keys for the other 2 tabes 
     - kevin123
     