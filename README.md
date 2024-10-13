# PZ Cheeseria Website

This project is a small proof-of-concept (POC) for a cheeseria front end using React and a Node.js backend. The application displays information about various cheeses, their price per kilo, and other characteristics. It also includes an optional functionality for a calculator to calculate the total price based on weight. The backend API has full CRUD capabilities, and the project uses Docker for multi-stage builds.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [Database Schema](#database-schema)
6. [API Endpoints](#api-endpoints)
7. [Running the Project](#running-the-project)
8. [Docker Setup](#docker-setup)
9. [License](#license)

## Project Structure

The project consists of two main parts:
- **Backend (`pz-cheeseria-backend`)**: This contains the Node.js backend with Express.js, SQLite for the database, and Swagger for API documentation.
- **Frontend (`pz-cheeseria-frontend`)**: This contains the React-based frontend for displaying the cheese catalogue and interacting with the backend API.

The `docker-compose.yml` file is used to set up multi-stage Docker builds for both the front and backend components.

## Features

### Backend:
- CRUD operations for managing cheeses.
- SQLite database with pre-seeded data for a variety of cheeses.
- Docker setup with multi-stage builds.
- Swagger documentation for the API.

### Frontend:
- React components to display cheese cards with various filters and sorting options.
- Calculator modal for calculating the total price of a cheese based on the desired weight (grams or kilograms).
- Filters based on cheese attributes like type, country of origin, and vegetarian status.

## Technologies Used

### Backend:
- Node.js
- Express.js
- SQLite
- Swagger for API documentation
- Docker for containerisation

### Frontend:
- React.js
- Bootstrap/Reactstrap for styling
- Axios for API requests
- React Router for page routing

## Setup and Installation

### Prerequisites:
- Docker and Docker Compose installed.
- Node.js installed (if running without Docker).

### Steps:
1. Clone the repository:
 ```bash
   git clone https://github.com/your-username/pz-cheeseria.git
 ```
2. Navigate to the project folder:
 ```bash
   cd pz-cheeseria
 ```

3. Build and start the application using Docker Compose:
 ```bash
   docker-compose up --build
 ```

4. Alternatively, to run manually:
   #### Backend:
   - Navigate to the backend directory:
 ```bash
     cd pz-cheeseria-backend
 ```
   - Install dependencies:
 ```bash
     npm install
 ```
   - Start the backend server:
 ```bash
     npm start
 ```

   #### Frontend:
   - Navigate to the frontend directory:
 ```bash
     cd pz-cheeseria-frontend
 ```
   - Install dependencies:
 ```bash
     npm install
 ```
   - Start the frontend server:
 ```bash
     npm start
 ```

## Database Schema

The database schema for the `cheeses` table includes the following fields:

- `id`: Primary key
- `made_from`: Type of milk or ingredient the cheese is made from
- `country_of_origin`: Country where the cheese originated
- `family`: The family or category of the cheese
- `type`: Type of cheese (e.g., hard, soft, semi-soft)
- `texture`: Cheese texture
- `color`: Cheese colour
- `flavour`: Cheese flavour profile
- `aroma`: Cheese aroma description
- `isVegetarian`: Indicates if the cheese is vegetarian (0/1)
- `price_per_kg`: Price per kilogram
- `description`: Brief description of the cheese
- `image_url`: URL to an image of the cheese
- `isActive`: Whether the cheese is currently being sold (0/1)

## API Endpoints

### Cheese CRUD Endpoints:

- **GET /cheeses**: Get a list of all cheeses.
- **GET /cheeses/:id**: Get a specific cheese by ID.
- **POST /cheeses**: Add a new cheese.
- **PUT /cheeses/:id**: Update a cheese by ID.
- **DELETE /cheeses/:id**: Remove a cheese by ID.

You can view the detailed API documentation via Swagger after running the backend at `/api-docs`.

## Running the Project

After setting up and starting the application using Docker or manually, you can access:

- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:5000`
- **Swagger API Documentation**: `http://localhost:5000/api-docs`

## Docker Setup

### Build and Run Containers

This project is Dockerized, so you can easily build and run the application using Docker Compose.

1. Ensure Docker and Docker Compose are installed on your machine.
2. Build the containers using:
 ```bash
   docker-compose build
 ```
3. Run the containers:
 ```bash
   docker-compose up
 ```

 This will set up both the frontend and backend services.

4. The application will be available at:
   - **Frontend**: `http://localhost:3000`
   - **Backend**: `http://localhost:5000`
   - **Swagger API Docs**: `http://localhost:5000/api-docs`

### Stop and Remove Containers
To stop the containers, press `Ctrl + C` in the terminal where the containers are running.

To stop and remove the containers (without removing volumes or networks):
```bash
docker-compose down
```

### Rebuilding Containers
If you make changes to the Dockerfiles or the source code and want to rebuild the containers, you can use:
```bash
docker-compose up --build
```

This will rebuild the images and restart the containers.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.