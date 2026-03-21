// function onClickEvent() {
//     document.getElementById("output").innerText = "Button Clicked";
// }

// function onMouseOver() {
//     document.getElementById("output").innerText = "Mouse Over Event";
// }

// function onMouseOut() {
//     document.getElementById("output").innerText = "Mouse Out Event";
// }

// function onMouseDown() {
//     document.getElementById("output").innerText = "Mouse Button Pressed";
// }

// function onMouseUp() {
//     document.getElementById("output").innerText = "Mouse Button Released";
// }

// function onMouseMove() {
//     document.getElementById("output").innerText = "Mouse Moving";
// }

// function onDoubleClick() {
//     document.getElementById("output").innerText = "Double Clicked";
// }

// 19/03/26
// Synchronous vs Asynchronous Programming

// ================= PROMISE =================
let promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Data loaded");
    } else {
        reject("Error occurred");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));


// ================= ASYNC / AWAIT =================
async function getData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();

        console.log("Async/Await Data:");
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();


// ================= FETCH (PROMISE WAY) =================
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log("Fetch Data:");
        console.log(data);
    })
    .catch(error => console.log("Error:", error));