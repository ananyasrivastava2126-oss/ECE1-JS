// 1. getElementById
const result = document.getElementById("js");
console.log(result);

// change innerHTML
result.innerHTML = "Changed using JavaScript";

// 2. getAttribute
const className = document.getElementById("js").getAttribute("class");
document.getElementById("p1").innerHTML = "Class name is: " + className;

// 3. getElementsByClassName
const para = document.getElementsByClassName("p1");
para[0].innerHTML = "This is paragraph with class p1";

// 4. getElementsByTagName
const allPara = document.getElementsByTagName("p");
allPara[1].innerHTML = "Accessed using tag name";

// 5. createElement
const heading = document.createElement("h2");

// set text
heading.innerText = "Hello from JavaScript";

// style
heading.style.backgroundColor = "red";
heading.style.color = "white";

// 6. append element to body
const bodytag = document.getElementsByTagName("body");
bodytag[0].append(heading);