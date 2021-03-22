<p align="center">
  <a href="https://nodejs.org/">
    <img alt="Node.js - v15" src="https://img.shields.io/npm/v/node?color=%2362a74d&label=node&logoColor=%232c2c2c" />
  </a>
  <a href="https://www.npmjs.com/">
    <img alt="npm - v7" src="https://img.shields.io/npm/v/npm?color=%23dda15e&logoColor=%232c2c2c" />
  </a>
</p>

# Server

## Sign Up - User

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

## Log In - User

- Data to compare:
  - username/email
  - password

- Not letting in when (3 tries max.):
  - username/email is not correct
  - password is not correct
