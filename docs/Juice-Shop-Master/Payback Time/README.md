# Payback Time Challenge

This challenge demonstrates an improper input validation vulnerability in the basket and checkout process of OWASP Juice Shop.  
By intercepting and modifying a basket request in Burp Suite, it is possible to set a negative product quantity and place an order that results in a negative total balance.

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

https://go.screenpal.com/watch/cOeDnKnZJ01


## Environment

This challenge was performed in a local lab setup:

- Kali Linux virtual machine
- OWASP Juice Shop running locally at `http://127.0.0.1:3000`
- Burp Suite started from the Kali terminal using `burpsuite`
- Burp Suite browser used for interception and testing
- A valid Juice Shop account was required


## Tools Used

- Kali Linux
- Burp Suite Community Edition
- Burp Suite Browser
- Burp Proxy
- Burp Repeater
- OWASP Juice Shop


## Steps

### 1. Start Burp Suite

Open the terminal in Kali Linux and start Burp Suite.

```
burpsuite
```

### 2. Open the Burp browser

In Burp Suite, go to the Proxy tab and start the Burp browser.


### 3. Log in to Juice Shop

Open http://127.0.0.1:3000 in the Burp browser and sign in with a valid account.


### 4. Enable interception

Turn Intercept On in Burp Suite before adding a product to the basket.

> [!IMPORTANT]
> Intercept must be enabled before adding the product to the basket. Otherwise, the basket request will not be captured and cannot be modified.


### 5. Add a product to the basket

Choose any product in the shop and add it to the basket.
Burp Suite captures the related request.


### 6. Inspect the basket request

Look for the following request:
`POST /api/BasketItems/ HTTP/1.1`

In the request body, the product, basket, and quantity values can be seen.<br/>
Example:
`{"ProductId":33,"BasketId":"6","quantity":1}`


### 7. Modify the quantity

Change the quantity value from 1 to a negative number, for example:
`{"ProductId":33,"BasketId":"6","quantity":-1000}`

Then forward the request.


### 8. Disable interception

Turn Intercept Off in Burp Suite so the browser can continue normally.


### 9. Review the basket

Go to the basket in OWASP Juice Shop.
The modified product quantity is now shown as a negative value, and the total price is also displayed as a negative amount.


### 10. Proceed to checkout

Click Checkout and continue through the checkout process.


### 11. Complete the order

Select an address, choose a shipping method, and continue.
As the payment method, use the balance created through the manipulated negative total and place the order.


## Observed Result

After modifying the basket request, the application accepts a negative product quantity.
This causes the basket total to become negative, which effectively creates credit instead of a payment.
During checkout, this manipulated balance can be used to place the order and solve the challenge.


## Security Impact

This vulnerability allows attackers to manipulate purchase values by submitting unexpected input to the server.
In a real e-commerce application, this could lead to direct financial loss, abuse of store credit, broken accounting, and fraudulent orders.


## Mitigation

To prevent this issue, the application must validate all quantity and pricing values on the server side, not only in the frontend.
Negative or otherwise invalid values should be rejected, and checkout calculations should enforce strict business rules before any order is accepted.
