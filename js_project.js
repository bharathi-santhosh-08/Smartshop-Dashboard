
// 1. Output Methods Example

// Selecting the button and output area
const outputBtn = document.getElementById("outputBtn");
const outputResult = document.getElementById("outputResult");

// When button is clicked
outputBtn.addEventListener("click", () => {

  console.log("Console Output: Hello Student!");            // 1. console.log() - Shows message in Console tab
  alert("Alert Output: Welcome to SmartShop Dashboard!");  // 2. alert() - Shows popup message
  
  // 3. innerHTML - Displays message inside webpage element
  outputResult.innerHTML = `
    <b>Output Methods Used:</b><br><br>
    console.log() - Check browser Console<br>
    alert() - Popup shown<br>
    innerHTML - Text updated in this box<br><br>
    document.write() exists, but NOT used (it overwrites the page)
  `;
});

// 2. DOM Manipulation - Product Display

const products = [                          // Array storing products
  { name: "Wireless Earbuds", price: 1200 },
  { name: "Smart Men Watch", price: 2500 },
  { name: "Bluetooth Speaker", price: 1800 },
  { name: "Power Bank", price: 900 },
];

let total = 0;

// Selecting required elements
const productList = document.getElementById("productList");
const totalPrice = document.getElementById("totalPrice");

// Loop through product array and create UI dynamically
products.forEach((item) => {
  let div = document.createElement("div");  // Create div
  div.className = "product";
  div.innerHTML = `
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
    <button>Add to Cart</button>
  `;

  // When "Add to Cart" button is clicked
  div.querySelector("button").addEventListener("click", () => {
    total += item.price;
    totalPrice.innerHTML = total;
  });

  productList.appendChild(div); // Add created item to section
});

// 4. Async — Timers

// Runs only once after 2 seconds
setTimeout(() => {
  alert("Offer: Get 10% OFF on Smart Watches!");
}, 1000);

let counter = 1;

// Runs repeatedly every second and stops at 5 seconds
let interval = setInterval(() => {
  console.log(`Timer Running: ${counter}s`);
  counter++;
  if (counter > 5) clearInterval(interval);
}, 1000);


// 5. PROMISE Example best compared to the normal event handling to get api request later
checkoutBtn.addEventListener("click", () => {
  
  new Promise((resolve, reject) => {
    if (total > 0) {
      resolve(`Payment Promise Success! Amount Paid: ₹${total}`);
    } else {
      reject("Cart is empty.");
    }
  })
  .then((res) => {
    alert(res); // Optional message popup
    const msg = document.createElement("p");
    msg.style.color = "green";
    msg.style.fontWeight = "bold";
    msg.innerText = res;
    document.getElementById("cart").appendChild(msg);

    // reset cart
    total = 0;
    totalPrice.innerHTML = total;

    setTimeout(() => msg.remove(), 3000);
  })
  .catch((err) => {
    const msg = document.createElement("p");
    msg.style.color = "red";
    msg.style.fontWeight = "bold";
    msg.innerText = err;
    document.getElementById("cart").appendChild(msg);

    setTimeout(() => msg.remove(), 3000);
  });

});


// 7. Async / Await - Real Weather API

const API_KEY = "d30ad9afd382517ef2a0e2a80acbbc4c";

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    document.getElementById("cityName").innerHTML = data.name;
    document.getElementById("temp").innerHTML = data.main.temp;
  } catch (err) {
    console.log("Weather API Error:", err);
  }
}

// Calling function
getWeather("Mayiladuthurai");

// 8. Fetch API (Mock Data)

fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
  .then(response => response.json())
  .then(data => {
    let result = "";
    data.forEach(item => {
      result += `<p>${item.title}</p>`;
    });
    document.getElementById("apiData").innerHTML = result;
  })
  .catch(err => console.log("Fetch Error:", err));



