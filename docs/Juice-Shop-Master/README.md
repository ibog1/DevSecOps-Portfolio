# Juice-Shop-Master

This repository contains my documentation for selected OWASP Juice Shop challenges.  
The goal of this project is to demonstrate common web security vulnerabilities in a controlled lab environment and explain how they can be identified and exploited.  
All content in this repository was created for educational purposes only.  
No real personal data, production credentials, or sensitive infrastructure information were used.


## Table of Contents

1. [Prerequisites](#prerequisites)
2. [What is OWASP Juice Shop](#what-is-owasp-juice-shop)
3. [Quickstart](#quickstart)
4. [Challenges](#challenges)


## Prerequisites

To view or reproduce the challenges, the following tools are recommended:

- Internet browser
- Kali Linux or another Linux environment
- Burp Suite Community Edition
- OWASP Juice Shop


## What is OWASP Juice Shop

OWASP Juice Shop is a deliberately insecure web application created for learning and practicing web application security.  
It includes many realistic vulnerabilities such as SQL injection, broken authentication, access control issues, and sensitive data exposure.


## Quickstart

To reproduce the documented challenges, set up and run OWASP Juice Shop separately on a Linux machine such as Kali Linux.

1. Install the required tools:
```
sudo apt install nodejs
sudo apt install npm
```

2. Clone the official OWASP Juice Shop repository:
```
git clone https://github.com/juice-shop/juice-shop.git
```

3. Change into the project directory:
```
cd juice-shop
```

4. Install the dependencies:
```
npm install
```

5. Start the application:
```
npm start
```

6. Open Juice Shop in your browser:
```
127.0.0.1:3000
```

## Challenges

- [Login Jim](<./Login Jim/README.md>)
- [Payback Time](<./Payback Time/README.md>)
- [Client-side XSS Protection](<./Client-Side-XSS-Protection/README.md>)
