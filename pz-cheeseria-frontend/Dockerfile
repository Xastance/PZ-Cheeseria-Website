# Stage 1: Build the React app
FROM node:14-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app to the container
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app using a simple server (nginx)
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]

# Expose the port for the React development server
#EXPOSE 3000

# Start the development server
#CMD ["npm", "start"]
