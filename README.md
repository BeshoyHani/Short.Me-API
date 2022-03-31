## ShortMe API<br>
An API to shorten URLs in order to simplify using them.

## Tools
- Node.JS
- JavaScript
- Express
- MongoDB

## How to Use
### 1) Shorten URL
 - Send POST request to [API-Address/short](https://shortme.herokuapp.com/short) with key = "originalURL" and value with the original address you want to shorten.
### 2) Retrieve the Original URL
- Send GET request to the shorted URL you get from the previous step and it will redirect you to the original one.