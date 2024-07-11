# Use a base image with Nginx
FROM nginx:alpine

# Copy the build output to Nginx's HTML directory
COPY build/ /usr/share/nginx/html

# Expose the port Nginx runs on
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]