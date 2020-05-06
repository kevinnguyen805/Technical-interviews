
Visit SQL Try Editor at W3Schools.com using the Google Chrome (or Chromium if you use Linux) browser and write SQL queries for the following requirements:

* find all customers with postal code 1010. Returns 3 records.
* find the phone number for the supplier with the id 11. Should be (010) 9984510.
* list first 10 orders placed, sorted descending by the order date. The order with date 1997-02-12 should be at the top.
* find all customers that live in London, Madrid, or Brazil. Returns 18 records.
* add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is "1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth".
* update Bilbo Baggins record so that the postal code changes to "11122".



* Notes
SELECT ClientID, Code, COUNT(*) AS CNT
FROM Table
GROUP BY ClientID, Code
Having
COUNT(*) > 1

SELECT Column1, Column2,
FROM Table, 
WHERE Condition


*TODO* - find all customers with postal code 1010. Returns 3 records.
SELECT * 
FROM Customers
WHERE PostalCode = '1010'


*TODO*- Find the phone number for the supplier with the id 11
SELECT Phone FROM Suppliers WHERE supplierid = 11


*TODO* - list first 10 orders placed, sorted descending by the order date. The order with date 1997-02-12 should be at the top.
- Note: You must put LIMIT _after_ ORDER BY 
SELECT * 
FROM Orders 
ORDER BY OrderDate DESC 
LIMIT 10 


*TODO* find all customers that live in London, Madrid, or Brazil. Returns 18 records.
- Note: Using *OR* statement requires you to rewrite the condition 
     - You must also use _''_ when querying conditions
SELECT * 
FROM Customers
WHERE City = 'London' OR City = 'Madrid' OR Country = 'Brazil'


*TODO* add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is "1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth".
- Note: To insert in SQL, use *INSERT INTO* 
     - Format: INSERT INTO TableName (Column1, Column2, Column3)
               VALUES (Value1, Value2, Value3)
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('The Shire', 'Bilbo Baggins', '1 HobbitHole', 'Bag End', '111', 'Middle Earth')


*TODO* update Bilbo Baggins record so that the postal code changes to "11122".
- Note: To update, syntax:
     UPDATE tableName 
     SET column1 = value1, column2 = value2
     WHERE (condition for which record is being updated)
UPDATE Customers
SET PostalCode = '111222'
WHERE CustomerID = 95


*TODO* Grab all the ID's past CustomerID 90
SELECT *
FROM Customers
WHERE CustomerID > 90


*TODO* Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted. Should be 69.
- Note: *To quantify a group of records - use COUNT*
     - If you want to know the distinct count of records - use (DISTINCT column-name)
SELECT COUNT (DISTINCT City)
FROM Customers

*TODO* Find all suppliers who have names longer than 20 characters. Returns 11 records.
- Note: *You don't put strings around numbers*
     - You can find the length of a record by using *LENGTH()*
SELECT * 
FROM Suppliers
WHERE LENGTH(SupplierName) > 20 

