-- The Employee table holds all employees. Every employee has an Id, a salary, and there is also a column for the department Id.

-- +----+-------+--------+--------------+
-- | Id | Name  | Salary | DepartmentId |
-- +----+-------+--------+--------------+
-- | 1  | Joe   | 70000  | 1            |
-- | 2  | Jim   | 90000  | 1            |
-- | 3  | Henry | 80000  | 2            |
-- | 4  | Sam   | 60000  | 2            |
-- | 5  | Max   | 90000  | 1            |
-- +----+-------+--------+--------------+
-- The Department table holds all departments of the company.

-- +----+----------+
-- | Id | Name     |
-- +----+----------+
-- | 1  | IT       |
-- | 2  | Sales    |
-- +----+----------+
-- Write a SQL query to find employees who have the highest salary in each of the departments. For the above tables, your SQL query should return the following rows (order of rows does not matter).

-- +------------+----------+--------+
-- | Department | Employee | Salary |
-- +------------+----------+--------+
-- | IT         | Max      | 90000  |
-- | IT         | Jim      | 90000  |
-- | Sales      | Henry    | 80000  |
-- +------------+----------+--------+
-- Explanation:

-- Max and Jim both have the highest salary in the IT department and Henry has the highest salary in the Sales department.


SELECT Department.Name AS 'Department', Employee.Name AS 'Employee', Employee.Salary AS 'Salary'
FROM Employee 
JOIN Department ON Department.Id = Employee.DepartmentId 
WHERE (Employee.DepartmentId, Employee.Salary) IN (SELECT DepartmentId, MAX(Salary) FROM Employee GROUP BY DepartmentId)


-- SELECT Department.name AS 'Department', Employee.name AS 'Employee', Employee.Salary
-- FROM Department
--      JOIN Employee
--      ON Employee.DepartmentId = Department.Id
-- WHERE (Employee.DepartmentId, Salary) IN 
--     ( SELECT DepartmentId, MAX(Salary)
-- FROM
--      Employee
-- GROUP BY 
--         DepartmentId
--     )