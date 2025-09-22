# 💻 HTML, CSS & JavaScript — Workshop Notes

---

## 1️⃣ HTML (Structure & Basics)

**Definition:**  
HTML (HyperText Markup Language) is the **skeleton of a webpage**. It defines the structure and content.

### 📝 Basic Structure
```html
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>This is a paragraph.</p>
</body>
</html>
🔹 Common Tags
Tag	Purpose
<h1> to <h6>	Headings (h1 = largest, h6 = smallest)
<p>	Paragraph text
<a href="url">	Link
<img src="url" alt="text">	Image
<ul> / <ol> / <li>	Lists (unordered / ordered)
<div>	Block container for layout
<span>	Inline container for styling text
<form>, <input>, <button>	Forms & user input
<br>	Line break
<hr>	Horizontal line

🔹 Block vs Inline Elements
Block elements: <div>, <p>, <h1> – take full width, start on a new line

Inline elements: <span>, <a> – take only the space they need, appear inline

🔹 Attributes
id – unique identifier

class – reusable group of elements

src – source of image/script

href – link URL

alt – alternative text for images

Example:

html
Copy code
<div id="header" class="main-header">
  <h1>My Website</h1>
  <p>Welcome to my site</p>
</div>
2️⃣ CSS (Styling Basics)
Definition:
CSS (Cascading Style Sheets) styles your HTML, controlling colors, fonts, layouts, and more.

📝 Adding CSS
Inline: <h1 style="color:red">Hello</h1>

Internal: Inside <style> tag in <head>

External: Separate style.css file (recommended)

🔹 Selectors
Element selector: p { color: blue; }

Class selector: .className { color: green; }

ID selector: #idName { color: red; }

🔹 Common Properties
Property	Description
color	Text color
background-color	Background color
font-size	Size of text
font-family	Font style
padding	Space inside element
margin	Space outside element
border	Border styling
width / height	Size of element
display	block, inline, inline-block, flex, etc.
text-align	left, center, right
border-radius	Rounded corners
box-shadow	Shadow effect

🔹 Example
css
Copy code
#header {
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  text-align: center;
}

.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
🔹 CSS Animations (Bonus)
css
Copy code
@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

.animated-btn {
  animation: bounce 2s infinite;
}
Usage in HTML:

html
Copy code
<button class="animated-btn">Click Me!</button>
3️⃣ JavaScript (Basics & DOM Manipulation)
Definition:
JavaScript makes webpages interactive. It can change HTML, CSS, and respond to user actions.

📝 Adding JS
Inline: <button onclick="alert('Hello')">Click</button>

Internal: <script> in HTML

External: script.js file (recommended)

🔹 Basic JS Syntax
javascript
Copy code
// Variables
let name = "Rahul";

// Functions
function greet() {
  alert("Hello " + name);
}

// Event Listener
document.getElementById("myBtn").addEventListener("click", greet);
🔹 DOM Manipulation Basics
DOM: Document Object Model – HTML structure represented in JS

Select elements

javascript
Copy code
const header = document.getElementById("header"); // by ID
const buttons = document.getElementsByClassName("button"); // by class
const paragraphs = document.querySelectorAll("p"); // CSS selector
Change content

javascript
Copy code
header.textContent = "Welcome!";
Change style

javascript
Copy code
header.style.color = "red";
header.style.backgroundColor = "yellow";
Add event listener

javascript
Copy code
const btn = document.getElementById("myBtn");
btn.addEventListener("click", () => {
  alert("Button clicked!");
});
Create new element

javascript
Copy code
const newP = document.createElement("p");
newP.textContent = "I am new!";
document.body.appendChild(newP);
Remove element

javascript
Copy code
const element = document.getElementById("removeMe");
element.remove();
🔹 Example: Interactive Button
javascript
Copy code
const btn = document.getElementById("changeTextBtn");
btn.addEventListener("click", () => {
  btn.textContent = "Clicked!";
  btn.style.backgroundColor = "orange";
});