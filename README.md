# CSP Test

Small example of [CSP](https://developer.mozilla.org/en-US/docs/Web/Security/CSP) which help determine if browser
support this kind of protection

## Usage

 * Clone this repository
 * Install dependencies `npm install`
 * Start server `npm start`
 * Open `localhost:3000` in your browser

Browser with support for CSP will succeed on same domain scenario and fail on inline, like this:

```
 Same domain javascript test
   It works
 Inline javascript test
   Failed
 Same domain css test
   It works
 Inline css test
   Failed
```
