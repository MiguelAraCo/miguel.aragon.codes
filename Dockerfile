FROM node:16-alpine

# Install PM2 globally
RUN npm install --global pm2
RUN npm install --global npm@8.3.2

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Set working directory
WORKDIR /home/node/app

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY --chown=node:node ./package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY --chown=node:node ./ ./

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Launch app with PM2
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]