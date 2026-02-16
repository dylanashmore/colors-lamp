# COLORS Application

## Description

The COLORS application is a full-stack web application that allows users to register, log in, add colors to their personal list, and search their saved colors. The application is built using a LAMP stack hosted on DigitalOcean. The frontend communicates with PHP API endpoints, which interact with a MySQL database to store and retrieve user-specific data. This project demonstrates full-stack deployment, database integration, and API development.

## Technologies Used

Linux (Ubuntu Server), Apache, MySQL, PHP, HTML, CSS, JavaScript, DigitalOcean, Domain registrar, Postman, FileZilla.

## Setup Instructions

1. Server Setup: Create a LAMP droplet on DigitalOcean (Ubuntu, Basic plan). SSH into the server, verify Apache is running, and navigate to /var/www/html.
2. Configure Domain: Purchase a domain and update the DNS A record to point to the droplet IP address. Wait for DNS propagation.
3. Database Setup: Log into MySQL. Create database COP4331. Create the Users, Colors, and Contacts tables. Insert sample data. Create a database user with appropriate privileges. Update database credentials inside the PHP files.
4. Backend Setup: Upload Login.php, AddColor.php, and SearchColors.php to /var/www/html/LAMPAPI and ensure database credentials are correct.
5. Frontend Setup: Upload index.html, color.html, and the css, js, and images directories into /var/www/html.

## Running & Accessing

Open a web browser and navigate to http://yourdomain.com. Log in with an existing user account. After logging in, you can add new colors and search saved colors.

API endpoints can be tested using Postman:
POST /LAMPAPI/Login.php
POST /LAMPAPI/AddColor.php
POST /LAMPAPI/SearchColors.php
Header required: Content-Type: application/json

## Assumptions, Limitations, and AI Usage

Assumptions: The LAMP stack is properly installed, DNS propagation has completed, and database credentials are correctly configured in the PHP files.

Limitations: Passwords are hashed using MD5

AI Usage: AI was used in assistance with writing this README, as well as debugging and helping with Git commands.