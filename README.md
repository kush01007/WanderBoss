# WanderBoss

WanderBoss is a full-stack travel listing web application inspired by Airbnb-style platforms.
Users can explore listings, create an account, log in, add new listings, upload images, edit or delete their own listings, add reviews, and view listing locations using Mapbox.

## Live Demo

https://wander-boss.vercel.app/

## Features

* User signup and login
* Session-based authentication using Passport.js
* Create, read, update, and delete listings
* Owner-based authorization for editing and deleting listings
* Image upload support using Multer and Cloudinary
* Add and delete reviews
* Interactive map/location display using Mapbox
* MongoDB database integration
* Server-side validation using Joi
* Flash messages for success and error feedback
* EJS templates with reusable layouts
* Error handling middleware
* Deployed on Vercel

## Tech Stack

### Frontend

* HTML
* CSS
* EJS
* Bootstrap
* Bootstrap Icons
* Mapbox

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Passport.js
* Express Session
* Connect Mongo
* Joi
* Multer
* Cloudinary
* Method Override
* EJS Mate

## Project Structure

```text
WanderBoss/
├── controllers/
├── init/
├── models/
├── public/
├── routes/
├── utils/
├── views/
├── app.js
├── cloudConfig.js
├── middleware.js
├── schema.js
├── package.json
└── README.md
```

## Main Routes

* `/listings` — View all listings
* `/listings/new` — Create a new listing
* `/listings/:id` — View listing details
* `/listings/:id/edit` — Edit listing
* `/signup` — User registration
* `/login` — User login
* `/logout` — User logout

## What I Learned

* How to build a full-stack Express.js application
* How to connect a Node.js app with MongoDB using Mongoose
* How to structure backend code using MVC-style folders
* How to create RESTful routes for listings and reviews
* How to implement authentication using Passport.js
* How to manage user sessions with express-session and connect-mongo
* How to upload images using Multer and Cloudinary
* How to validate server-side data using Joi
* How to integrate Mapbox for location-based listing display
* How to handle errors using custom middleware
* How to deploy a full-stack project

## Environment Variables

Create a `.env` file and add the required values:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_token
```

## Important Note

This project is made for learning and portfolio purposes.
It is not a production-level booking platform and does not include real payment or reservation functionality.

## Author

Kush Gupta
