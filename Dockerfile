# Use the official Node.js image as a base
FROM node:18

# Set the working directory in the container
WORKDIR /usr

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on (optional, adjust if your app uses a different port)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
