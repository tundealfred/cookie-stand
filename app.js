function CookieShops(location, minCust, maxCust, avgCookiesPerCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookieSold = 0;
}

CookieShops.prototype.calculateSales = function () {
  for (let i = 0; i < hours.length; i++) {
    const randNum = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(randNum);
    this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    this.totalCookieSold += this.cookiesPerHour[i];
  }
};

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

CookieShops.prototype.render = function () {
  this.calculateSales();

  //seattle.calculateSales();
  //tokyo.calculateSales();

  // Display the data for Seattle
  const displaySalesData = document.getElementById("displaySalesData");
  const article = document.createElement("article");

  const h2 = document.createElement("h2");
  h2.textContent = this.location;
  article.appendChild(h2);

  const ul = document.createElement("ul");
  for (let i = 0; i < hours.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${hours[i]}  :  ${this.cookiesPerHour[i]} Cookies`;
    ul.appendChild(li);
  }
  article.appendChild(ul);

  displaySalesData.appendChild(article);
};

// Create instances for each shop
const seattle = new CookieShops("Seattle", 23, 65, 6.3);
const tokyo = new CookieShops("Tokyo", 3, 24, 1.2);
const dubai = new CookieShops("Dubai", 11, 38, 3.7);
const paris = new CookieShops("Paris", 20, 38, 2.3);
const lima = new CookieShops("Lima", 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
