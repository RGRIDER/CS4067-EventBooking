# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Expose any required ports (optional, since it's an event consumer)
EXPOSE 5003

# Start the Notification Service
CMD ["node", "server.js"]
