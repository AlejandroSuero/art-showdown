<p align="center">
  <a href="https://nodejs.org/">
    <img alt="Node.js - v15" src="https://img.shields.io/npm/v/node?color=%2362a74d&label=node&logoColor=%232c2c2c" />
  </a>
  <a href="https://www.npmjs.com/">
    <img alt="npm - v7" src="https://img.shields.io/npm/v/npm?color=%23dda15e&logoColor=%232c2c2c" />
  </a>
</p>

# Server

  - Documentation
    - [Setting up server folder]()
    - [Setting up enviroment variables]()
    - [Backend structure](https://github.com/AlejandroSuero/art-showdown/tree/master/server#backend-structure)



## Folder Set Up

- Install [Node.js](https://nodejs.org/)
  From your terminal go to your project folder and create a server folder, then in your console go to that directory/path
    
    `npm init`

    Or

    `npm init -y`
  
- Install the dependencies:

  - cors: prevents cross-origin problems. [cors API](https://www.npmjs.com/package/cors).
  
    `npm install cors`

  - dotenv: allows `.env` files to be used. [dotenv API](https://www.npmjs.com/package/dotenv).

    `npm install dotenv`

  - express: allows requests from the client to the API. [express API](https://www.npmjs.com/package/express).

    `npm install express`
  
  - helmet: protects your client headers. [helmet API](https://www.npmjs.com/package/helmet).

    `npm install helmet`
  
  - morgan: displays the requests in your console. [morgan API](https://www.npmjs.com/package/morgan).

    `npm install morgan`
  
  - mongoose: allows the connection to the database. [mongoose API](https://www.npmjs.com/package/mongoose).

    `npm install mongoose`

- Install dev dependencies:

  - eslint: makes your code in a nice style and detects errors. [eslint API](https://www.npmjs.com/package/eslint).

    `npm install eslint --save-dev`

  - supertest: HTTP testing. [supertest API](https://www.npmjs.com/package/supertest).

    `npm install supertest --save-dev`

  - jest: HTTP test runner. [jest API](https://www.npmjs.com/package/jest).

    `npm install jest --save-dev`

  - nodemon: allows change on the files without restarting your server every time. [nodemon API](https://www.npmjs.com/package/nodemon).

    `npm install nodemon --save-dev`



## Enviroment variables

This variables are used for security issues. All the code that could be public once the webapp is deployed shouldn't have any sensitive information.

For that we can create `.env` files with the variables you need.

  - Example:

    ```.env
      API_URL=https://apiurl.com/api/
      DB_PASSWORD=changeme
    ```

If you fork or download this code, you will need to create your own file.



## Backend Structure

### Sign Up - User

  - Data to store
      - Required:
        - username
        - password (hashed)
        - confirmed password (hashed)
        - email
        - First name
        - Last name
      - Not required:
        - Second last name (not required)

  - Not store data when:
    - username is already in the DB
    - passwords are not equal
    - email is already in the DB

### Log In - User

  - Data to compare:
    - username/email
    - password

  - Not letting in when (3 tries max.):
    - username/email is not correct
    - password is not correct
