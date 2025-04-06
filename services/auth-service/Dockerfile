# Use official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy Prisma files separately to avoid unnecessary rebuilds
COPY prisma ./prisma

# Run Prisma generate
RUN npx prisma generate

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 5000

# Start the app
CMD ["npm", "run", "dev"]
