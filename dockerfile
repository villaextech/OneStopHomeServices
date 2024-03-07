# Use the LTS version of Node.js Alpine image
FROM node:lts-alpine3.14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json from the local directory into the container
COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
