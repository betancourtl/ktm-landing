## What is react-mern-boilerplate?
It is another MERN boilerplate that allows you to start a project right a way.

It already includes registration, JWT Login, JWT refresh, password-reset hooked up so you can get started right away.

Auto-login on browser refresh, and auto JWT refresh if the user is active. So user does not get logged out randomly.

On the frontend it provides components to protect routes when a user is authorized or unauthorized.

It also includes a blogging feature with discuss for comments

![Alt text](client/assets/images/preview.png)


## Installation
- `npm i`

- create an .env file  in the root dir and add required vars. See the env section in the documentation.

- Install mongoDB if not installed.

## What is react-mern-boilerplate?

It is an opinionated starter repo for a react project using

**Database**
- [x] Mongoose

**View**
- [x] React + Redux

**Backend**
- [x] NodeJS

**Authentication**
- [ ] Facebook
- [ ] Google
- [ ] Twitter
- [x] Email

**Deployment**
- [ ] S3

## Installation 
`npm run i`

## Testing

**Client tests**
`npm run test-client` - Runs the client tests using jest

**Backend tests**
`npm run test-server` - Runs the backend tests using mocha

## Running the project

**Dev**
`npm run dev` - Starts the dev server

**Prod**
`npm run prod` - Builds and starts prod version of the project

## Deployment

**S3**
In the Command Line type

`eb init` - sort of like npm ini but for s3 deployments

`eb create webdeveloperpr-blog`

`eb deploy`

- Go to the AWS console -> EC2 -> Settings -> ENV VARS and add all of the env vars.
- Go to route53 and add a domain name then link it to the EC2 instance. 


**MongoDB Deployment**

 - Go to mLab.com.
 - Create a new DB.
 - Add all of the collections into the database.
 - Create a user.
 - Save the DB_URI to connect to the databse. 

## Env vars

# JWT
export JWT_TOKEN_SECRET_KEY=123qweasdxzc!@#QWEASDZXC

# Nodemailer
export GMAIL_EMAIL=webdeveloperpr@gmail.com
export GMAIL_PASSWORD=123qweQWE
export EMAIL_SERVICE=gmail

# AWS
# export AWS_ACCESS_KEY_ID=AKIAIHCSTCTTMRJTDMGQ
# export AWS_SECRET_ACCESS_KEY=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
# export AWS_BUCKET_NAME=site-builder-sites
# export AWS_REGION_NAME=us-east-1

#MongoDB
export MONGO_USER=webdeveloperpr
export MONGO_PASS=123qweasdQWEASD
export MONGO_PORT=33218
export MONGO_DB=webdeveloperpr-blog
export MONGO_HOSTNAME=ds233218.mlab.com
# export MONGO_URI=mongodb://webdeveloperpr:123qweasdQWEASD@ds233218.mlab.com:33218/webdeveloperpr-blog

#Node
export NODE_ENV=development
export PORT=80

# ktm-landing
