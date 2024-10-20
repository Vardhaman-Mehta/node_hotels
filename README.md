#Node Hotels

This is a Node.js application that connects to a MongoDB database to manage hotel information. Users can create, read, update, and delete hotel data through a RESTful API.

##Features

Add, update, delete, and view hotel information.
Search hotels by location or name.
Handles basic error management and input validation.

##Technologies

Node.js - Backend framework.
MongoDB - NoSQL database for storing hotel information.
Express - Web framework for building RESTful APIs.
Mongoose - ODM library for MongoDB.

###Endpoints
1. Get all hotels
GET /api/hotels

Returns a list of all hotels in the database.

2. Get a specific hotel
GET /api/hotels/:id

Returns details of a specific hotel using its ID.

3. Add a new hotel
POST /api/hotels

Request body example:
{
    "name": "Mango Smoothi",
    "price": 5.00,
    "taste": "sweet",
    "is_drink": true,
    "ingerdient": [ "mango", "yogurt", "honey" ],
    "num_seles": 50
}

4. Update an existing hotel
PUT /api/hotels/:id

Updates the information of an existing hotel by ID.

5. Delete a hotel
DELETE /api/hotels/:id

How to Run
Clone the repository:

bash

git clone https://github.com/Vardhaman-Mehta/node_hotels.git
Install dependencies:

bash

npm install
Start the server:

bash

npm start
The application will be available at http://localhost:3000.
