# Use Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY app/package.json ./  
RUN npm install

# Copy the application code
COPY app/ .  

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
