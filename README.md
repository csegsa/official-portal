# Texas A&M CSEGSA - Official Portal
A online web portal for Computer Science and Engineering Graduate Student's Association of Texas A&M University.

Architecture:

![Desing](/documentation/Design.png)

The portal is implements using MERN stack.

React Client is developed using React.js and the build production ready react app is served through
Node Express server is used to serve the react app.
CRUD operations are performed on the backend using MongoDB and Mongoose.

Client and Server communicate over these APIs:

Client and Server side authentication is performed using Firebase SDK

Secure API flow:

![Secure API flow](/documentation/SecureApiFlow.png)

# Getting Started:
Node version: v16.14.0
npm version: 8.3.1
Operating System: Ubuntu 18.04 LTS
```shell
npm install
npm run build
```


# Deployment:
Deployment is done using [Heroku](https://www.heroku.com/).

Below Config Vars are required, FIREBASE_ configs are obtained from [Firebase](https://firebase.google.com/) project
and need to be set in Heroku

```text
MONGODB_CONNECTION_STRING
FIREBASE_PROJECT_ID
FIREBASE_PRIVATE_KEY_ID
FIREBASE_PRIVATE_KEY
FIREBASE_CLIENT_EMAIL
FIREBASE_CLIENT_ID
FIREBASE_AUTH_URI
FIREBASE_TOKEN_URI
FIREBASE_AUTH_CERT_URL
FIREBASE_CLIENT_CERT_URL
```
Also corresponding API keys  need to be set in client side client/src/views/userlogin/Firebase.js 
Firbase Console's Project Settings page will have the API keys

The above data is expected in .env file in the root directory.
The command to start in local is:
```shell

npm run start
```

HEROKU deployment is done using the following command using Heroku CLI:

```shell
heroku login
git push heroku main

npm run test

```
