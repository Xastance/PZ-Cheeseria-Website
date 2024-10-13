# Stage 1: Build the backend
FROM node:14-alpine AS build

# Install Python3, make, g++, and other necessary dependencies
RUN apk add --no-cache python3 make g++ bash

WORKDIR /app
COPY package*.json ./
# Install dependencies, and force rebuild sqlite3 from source
RUN npm install --build-from-source=sqlite3

COPY . .

# Ensure the SQLite database file is created if it doesn't exist
RUN touch /app/cheeseria.db

# Stage 2: Run the backend
FROM node:14-alpine
WORKDIR /app
COPY --from=build /app /app
EXPOSE 3001

# Ensure the command is properly formatted
CMD ["node", "index.js"]