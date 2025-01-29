# Base image 
FROM node:20

# Set working directory inside the container
WORKDIR /client

# Copy package.json and package-lock.json
# COPY package*.json ./  as Window and linus not support * operator

COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files from client folder
COPY . .

# Expose the port, will run on
EXPOSE 5173

# Run the frontend development server
CMD ["npm", "run", "dev"]



