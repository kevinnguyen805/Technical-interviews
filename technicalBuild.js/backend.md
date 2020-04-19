
0. make directory 
1. npm init -y or yarn init
2. create an empty repo (no readme or license)
3. git remote add origin <github url>

4. npm i -D nodemon    (if nodemon is missing)
     4. jest, supertest 
5. npx gitignore node 
6. Configure package.json - add:
     - "server":"nodemon index.js" 
     - "start":"node index.js" 
     - "test":"jest --watch" 
     - "jest":{
          "testEnvironment": "node"
     }

7. npm install express, helmet, morgan, CORS, dotenv, knex
   sqlite3 (as needed), bcryptjs, jsonwebtoken, knex-cleaner 

   - express 
   - helmet 
   - morgan 
   - CORS 
   - dotenv 
   - knex 
   - sqlite3 
   - bcryptjs 
   - jsonwebtoken 
   - knex-cleaner 

8. create .env file 
     PORT=__KEY__ 

9. to run server 
     *** npm run server ***

*** INDEX.JS ***
1. require('dotenv').config()
2. import: 
     - express 
     - helmet 
     - morgan 
     - CORS 
3. set _server_ to express() 
4. set port number - root endpoint for server 
     - process.env.PORT || 4000 
5. use <our global middleware> 
     - express.json 
     - helmet 
     - morgan("dev")
6. *** eventualy *** ('/path/to/endpoint', routerVariable) 
7. set up default *** GET *** endpoint with some kind of response for testing 
     server.get('/', (req, res) => {
          console.log("You're at the base!")
          res.send("Our server is up!")
     })
8. Set up server listening: 
     server.listen(port, () => {
          console.log(`\n[[server listening on ${port} ]]\n`)
     })



*** SERVER.JS ***
1. import:
     - express (middleware) 
     - helmet  (middleware)
     - morgan  (middleware)
     - CORS 
     - *** set up all global middlewares ***
     - server.get() setup 
     - module.exports = server 

     - const usersRouter = require('./path')
     - server.use('./endpoint', usersRouter)

*** Knex/database setup ***
1. install: 
     - npm i knex sqlite3 
     - npx knex init 

*** Knexfile.js ***
1. Create database folder 
2. Setup path for database 
     - ./data/db_name.db3 
3. useNullAsDefault : true 
4. set up path for migrations 
     - ./data/migrations 
5. set up path for seeds directory 
     - ./data/seeds 
6. set up pool from TK code 
     - ???

*** /database/db-config.js *** 
1. Import knex and knexfile 
2. Export knex (knexfile.development)
3. Create Migration
     - knex migrate: make migration_name
4. Design table layout in new migration file: 
     - return knex.schema.createTable("name", function(tbl){
          table.increments()
          Table.(string, integer, etc)(value) - notNullable() if required 
     })
     - .unique() 
5. run knex (development/production)
     - migrate:up 
     - knex migrate:latest 
6. run knex (testing)
     - knex migrate:latest --env=testing 


*** check database in sqlite ***
knex seed:make seed-name 

*** seed data ***
knex seed:run 


*** create DB-model.js file ***
1. Write methods to grab data from database in DB_model.js 
     * Find 
     * findById
     * update 
     * add 
     * remove 
2. import db-model.js to server
     * either in server file or PREFERRABLY a Route.js 
          - require express 
          - build endpoints 
          - module.exports = router 
3. knex-session-...


*** auth-router.js ***
1. Import secrets file 
     * secret format:
          - jwtSecret: process.env.JWT_SECRET || '_key_'
          - make a _generateToken_ function that builds a payload object + options object 
               options = { expiresIn: "1d" }
          `return jwt.sign(payload, secrets.jwtSecret, options)` 
2. call _generateToken_ on login based on used data from DB 
3. send token back in response to be saved in localstorage 


*** make test files for endpoints (server.js and routers) ***
- ex: server.test.js 

1. import supertest 
2. import the file being tested (ex. server.js)
3. import db-config 

4. hit up the *beforeEach* reset: 
beforeEach(async() => {
     await db("db-name").truncate() 
})

Describe("What's being tested", () => {
     it("expected behavior", () => {
          return request(server).get("endpoint")
          .then(response => {
               expect(actual).toBe(expected)
          })
     })
})




*** Endpoints ***
* think about what you're keeping track of...
     - auth 
     - users 
     - properties 

Users 
- GET - /api/user           - get all users 
- GET - /api/user/:id       - get single user 
     * restricted endpoint authentication middleware 
- PUT - /api/user/:id       - edit single user 
- DELETE - /api/user/:id    - delete single user 

Auth 
- POST  - /api/auth/register 
     * register authentication middleware 

- POST  - /api/auth/login 
     * create token using username 

Properties 
- Property object 
{
     "id": binary, 
     "minimum_num_nights" : binary, 
     "location" : varchar(255),
     "room_type" : varchar(255),
     "user_id" : integer(255)     *** user_id is foreign key from ID from User ***
}

GET - /api/property 
GET - /api/property/user/:id 
GET - /api/property/:id 
POST - /api/property 
PUT - /api/property/:id 
DELETE /api/property/:id 




*** Status codes ***
- 200 === success 
- 400-499 === problem on user end (missing things during post or put)
- 500+ === error on developer end/sever fail 

