# Frontend Dockerfile
FROM node:20

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port for frontend dev server
EXPOSE 5173

# Start frontend in dev mode
CMD ["npm", "run", "dev", "--", "--host"]
