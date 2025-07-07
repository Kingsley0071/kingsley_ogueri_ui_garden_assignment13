# Use Node.js 20 (meets Storybook requirements)
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of your app files
COPY . .

RUN npm run build-storybook

# Expose Storybook default port
EXPOSE 8083

# Run Storybook (update if you use a custom script)
CMD ["npm", "run", "storybook"]
