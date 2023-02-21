# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the environment variable for the port the service listens on
ENV PORT=3001

# Expose the port
EXPOSE ${PORT}

# Start the service
CMD ["npm", "start"]
