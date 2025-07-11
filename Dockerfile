# Backend Dockerfile
FROM node:20

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Expose port for backend
EXPOSE 5000

# Start backend server
CMD ["node", "dist/server.js"]
