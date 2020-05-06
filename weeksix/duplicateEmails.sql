-- Write a SQL
-- query to
-- delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.

-- +----+------------------+
-- | Id | Email            |
-- +----+------------------+
-- | 1  | john@example.com |
-- | 2  | bob@example.com  |
-- | 3  | john@example.com |
-- +----+------------------+
-- Id
-- is the primary key column for this table.
-- For example, after running your query, the above Person table should have the following
-- rows:

-- +----+------------------+
-- | Id | Email            |
-- +----+------------------+
-- | 1  | john@example.com |
-- | 2  | bob@example.com  |
-- +----+------------------+

DELETE FROM Person 
WHERE Id NOT IN (SELECT MIN(Id) FROM Person GROUP BY Email)
SELECT *
FROM Person

1. Join the table with itself so you can detect duplicates 
SELECT P1.* 
FROM Person P1, Person P2 
WHERE P1.Email = P2.Email 

2. Now filter out the IDs having the same address (we want the bigger Id to delete them)
WHERE P1.EMail = P2.Email 
AND P1.ID > P2.ID 

3. Bring it all back - but reverse it 
DELETE P1 
FROM Person P1, Person P2 
WHERE P1.email = P2.email 
AND P1.Id > P2.Id 