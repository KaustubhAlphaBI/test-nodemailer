# Use the official Node.js 14 image as a base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set environment variables (optional, you can also use a .env file)
# ENV SEND_EMAIL_ID=your-email@gmail.com
# ENV SEND_EMAIL_PASS=your-email-password

# Expose the port that your app runs on
EXPOSE 3000

# Command to run your app
CMD ["node", "index.js"]
