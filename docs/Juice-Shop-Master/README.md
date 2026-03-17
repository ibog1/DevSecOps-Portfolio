# Juice-Shop-Master

This repository contains my documentation for selected OWASP Juice Shop challenges.  
The goal of this project is to demonstrate common web security vulnerabilities in a controlled lab environment and explain how they can be identified and exploited.  
All content in this repository was created for educational purposes only.  
No real personal data, production credentials, or sensitive infrastructure information were used.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [What is OWASP Juice Shop](#what-is-owasp-juice-shop)
3. [Quickstart](#quickstart)
4. [Usage](#usage)
5. [Challenges](#challenges)


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

If you only want to access the running application in a browser, open the following address:

```
https://juice-shop.herokuapp.com/#
```
## Usage 
You can also Start your own Owasp Juice Shop Instance on your Compouter. 

1. Install Perequireties 
``` bash
sudo apt install nodejs npm
```

1. Clone the following Repository 
``` bash
git clone https://github.com/ibog1/Juice-Shop-Master
```


2. Navigate to the Correct Directory. 
```bash
cd Juice-Shop-Master
```


3. Start the Juice Shop 
``` bash
npm start 
```

4. Open your Juice Shop on your Browser with:
```bash
127.0.0.1:3000
```

## Challanges

- [Login Jim](<./Login Jim/README.md>)
- [Payback Time](<./Payback Time/README.md>)
- [Client-side XSS Protection](<./Client-Side-XSS-Protection/README.md>)
