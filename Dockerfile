# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build your React/Vite app for production
RUN npm run build

# Expose the port your app will run on
EXPOSE 5173

# Start your app when the container starts
CMD ["npm", "run", "dev-docker"]
