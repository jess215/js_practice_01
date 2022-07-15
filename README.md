# JavaScript Practice 01

This repository is a place for me to dump all of my basic JavaScript practices.

This README will contain review questions and definitions that I find useful for review.

### What is JavaScript?

- One of the most popular and widely used languages in the world.
- Entire applications are built around JavaScript.
- Front-End, Back-End, and Full-Stack Development.

### What can you do with JavaScript?

- Was only used in browsers to build interactive web pages, but it has evolved since then through huge community support and investments by companies.
- Can build Web/Mobile Apps, Real-time Networking Apps, Command-line Tools, or Games.

### Where does JavaScript code run?

- Was originally designed to run only on browsers, so each browser is equipped with a JavaScript Engine.
- The JavaScript Engines in FireFox and Chrome are SpiderMonkey and v8.
- In 2009 Ryan Dahl took the open-source JavaScript Engine in Chrome and embedded it inside a C++ program that he called Node.
- Through Node we can run JavaScript outside of a browser, meaning you can build the back-end for our web and mobile applications with JavaScript.

### JavaScript vs ECMAScript?

- ECMAScript is a Specification.
- JavaScript is a Programming Language that conforms to this Specification.
- ECMA Organization is responsible for defining standards, they have annual releases of standards.

## HTML Formatting

### Basic HTML page

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

### JavaScript HTML placement best practice.

Best practice is to put your script at the bottom of the body section after all of your other elements.

1. The Browser parses the file from top to bottom, the browser might be busy parsing the JavaScript if it's at the beginning, resulting in a bad user experience.
2. The code that we have in-between the script elements need to talk to the elements on the page. Putting it at the bottom ensures that all the elements on the page are rendered by the browser.
3. The exception to this rule is that if you are using 3rd party code it must be placed in the head not the body.

### JavaScript should be added to its own file.

We don't want to write all of our code inside of the script tags. We want to separate HTML from JavaScript.

- HTML = Content
- CSS = Styling
- JavaScript = Behavior

### JavaScript comments.

Comments should be used for whys and hows, not just stating what the code is doing, since that can be understood from the code itself.

Comments in JavaScript begin with '//'.
