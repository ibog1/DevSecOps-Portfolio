# Login Jim Challenge

This challenge demonstrates an SQL injection vulnerability in the login process of OWASP Juice Shop.  
By intercepting and modifying a login request in Burp Suite, it is possible to identify Jim's account details and recover his password in a local test environment.

> **Educational use only:** This documentation was created for learning purposes in a controlled local OWASP Juice Shop environment. No real personal data, production systems, or sensitive credentials were used.

## Table of Contents

- [Video](#video)
- [Environment](#environment)
- [Tools Used](#tools-used)
- [Steps](#steps)
- [Observed Result](#observed-result)
- [Token Analysis](#token-analysis)
- [Hash Cracking](#hash-cracking)
- [Security Impact](#security-impact)
- [Mitigation](#mitigation)

## Video

https://go.screenpal.com/watch/cOeDnanZJr0

## Environment

This challenge was performed in a local lab setup:

- Kali Linux virtual machine
- OWASP Juice Shop running locally at `http://127.0.0.1:3000`
- Burp Suite started from the Kali terminal 
- Burp Suite browser used for interception and testing

## Tools Used

- Kali Linux
- Burp Suite Community Edition
- Burp Suite Browser
- Burp Proxy
- Burp Repeater
- Burp Decoder
- CrackStation
- OWASP Juice Shop


## Steps

### 1. Start Burp Suite

Open the terminal in Kali Linux and start Burp Suite.

```
burpsuite
```

### 2. Open the Burp browser

In Burp Suite, go to the **Proxy** tab, start the Burp browser, and make sure **Intercept is On**.

> [!Important]  
> Make sure **Intercept is On** before submitting the login form. Otherwise, Burp Suite will not capture the request, and you will not be able to modify it in Repeater.


### 3. Open Juice Shop

In the Burp browser, open:

```
http://127.0.0.1:3000
```

Then navigate to the **Login** page.

### 4. Enter test credentials

Enter random login data, for example:

- Email:
```
test@test.de
```
- Password:
```
test
```

Then click **Log in**.

### 5. Capture the login request

Burp Suite intercepts the request:

```
POST /rest/user/login HTTP/1.1
..
```

Inside the request body, the entered credentials can be seen.

### 6. Send the request to Repeater
Mark the intercepted request and send it to the Repeater tab.

### 7. Modify the request body
Change the original body from:

`{"email":"test@test.de","password":"test"}`

to:

`{"email":"' OR email LIKE '%jim%'--","password":"test"}`

Then send the modified request.

## Observed Result

After sending the modified request, the response reveals information that helps identify Jim's account. <br/>
The response also includes an authentication token, which can be copied for further analysis.


## Token Analysis

The authentication token from the response is copied into the **Decoder** tab in Burp Suite for further inspection.

During the analysis of the token content, the following password hash can be identified:

`password:e541ca7ecf72b8d1286474fc613e5e45`

## Hash Cracking

The extracted hash is copied into [CrackStation](https://crackstation.net) <br/>
The recovered plaintext password is:

`ncc-1701` <br/>
This reveals Jim's real password.


## Security Impact

This vulnerability can allow attackers to manipulate the login process, identify valid user accounts, and gain unauthorized access. <br/>
In real applications, this may lead to account takeover, sensitive data exposure, and further attacks.


## Mitigation

To prevent this issue, applications should use parameterized queries, validate user input properly, and avoid exposing sensitive data in responses or tokens. <br/>
Passwords should be stored with strong hashing algorithms such as bcrypt or Argon2.
