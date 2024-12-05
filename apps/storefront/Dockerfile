# Use the official Node.js image as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# RUN wget -q -O medusa-config.js "https://raw.githubusercontent.com/chillpilllike/file/refs/heads/main/barrio.js


# RUN yarn add -D @medusajs/medusa-cli

# Copy the .env.template to .env (ensure .env exists in your build context)
# COPY .env .env

# Copy package.json and yarn.lock for dependency installation

# Install dependencies
RUN yarn install

RUN yarn build

# Expose the default Medusa port
EXPOSE 8000
# EXPOSE 3000

# Command to start the Medusa backend with migrations
CMD ["sh", "-c", "yarn start"]
