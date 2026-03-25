# Client-side XSS Protection Challenge

This challenge demonstrates a persistent Cross-Site Scripting (XSS) vulnerability in OWASP Juice Shop.  
By intercepting and modifying a registration request in Burp Suite, it is possible to bypass the client-side validation and store a malicious payload in the backend.

> [!WARNING] 
> **Educational use only:** This documentation was created for learning purposes in a controlled local OWASP Juice Shop environment. No real personal data, production systems, or sensitive credentials were used.

## Table of Contents

- [Video](#video)
- [Environment](#environment)
- [Tools Used](#tools-used)
- [Steps](#steps)
- [Observed Result](#observed-result)
- [Security Impact](#security-impact)
- [Mitigation](#mitigation)

## Video

https://go.screenpal.com/watch/cOeDeRnZJ4U

## Environment

This challenge was performed in a local lab setup:

- Kali Linux virtual machine
- OWASP Juice Shop running locally at `http://127.0.0.1:3000`
- Burp Suite started from the Kali terminal using `burpsuite`
- Burp Suite browser used for interception and testing

## Tools Used

- Kali Linux
- Burp Suite Community Edition
- Burp Suite Browser
- Burp Proxy
- OWASP Juice Shop

## Steps

### 1. Start Burp Suite

Open the terminal in Kali Linux and start Burp Suite.

```
burpsuite
```

### 2. Open the Burp browser

In Burp Suite, go to the Proxy tab and click Open Browser.


### 3. Open the registration page

In the Burp browser, open the OWASP Juice Shop and navigate to:
```
http://127.0.0.1:3000/#/register
```

### 4. Fill in the registration form

Complete the registration form with valid input values that match the expected format. <br/>
For example, use a normal email address such as ```test@test.de``` and complete the required security question form.

The frontend normally rejects special characters in the email field.


### 5. Enable interception

Before submitting the registration form, turn Intercept On in Burp Suite.

> [!IMPORTANT]
> Intercept must be enabled before clicking the register button. Otherwise, the registration request will not be captured and cannot be modified.


### 6. Capture the registration request

Submit the form and let Burp Suite capture the following request:
`POST /api/Users/ HTTP/1.1`

In the request body, the previously entered email address can be seen.


### 7. Modify the email value

Replace the normal email value in the request body with the following payload:
```
<iframe src=\"javascript:alert(`xss`)\">"
```

> [!IMPORTANT]
> Backslashes are required to escape special characters so the payload is inserted correctly into the JSON request body.

Then forward the request.


### 8. Bypass the client-side protection

The manipulated request is accepted by the backend even though the frontend would normally prevent this input.
This shows that the input validation is only enforced on the client side.


### 9. Open the administration page

Navigate to the following page:
```
http://127.0.0.1:3000/#/administration
```
When the stored email value is rendered in the user list, the XSS payload is executed and the alert appears.

> [!NOTE]
> You must log in as an administrator to confirm that the attack worked. The payload is triggered when it is rendered on the administration page.

## Observed Result

The application accepts a manipulated email value that contains an XSS payload when the request is modified in Burp Suite.
Although the frontend blocks special characters during normal registration, the backend still stores the payload.
When an administrator opens the administration page and the stored value is rendered in the user list, the payload is executed in the browser.


## Security Impact

This vulnerability allows attackers to store malicious script content in the application and have it executed later when another user views the affected data.
In a real-world application, this could lead to session theft, unauthorized actions, phishing, defacement, or full compromise of privileged users.


## Mitigation

To prevent this issue, all user input must be validated and sanitized on the server side, not only in the browser.
Applications should also escape untrusted content before rendering it in HTML and apply additional protections such as a properly configured Content Security Policy.
