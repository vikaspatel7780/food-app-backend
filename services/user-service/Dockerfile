# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the entire project
COPY . .

# Set environment variables for Kafka
ENV KAFKA_BROKER=localhost:9092

# Expose port and start service
EXPOSE 5001

# Start the application
CMD ["npm", "run", "dev"]
