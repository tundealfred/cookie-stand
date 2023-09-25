// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const seattle = {
//   location: "seattle",
//   minCust: 23,
//   maxCust: 65,
//   avgCookiesPerCust: 6.3,
//   custPerHour: [],
//   cookiesPerHour: [],
//   generateSales: function () {
//     return (
//       Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) +
//       this.minCust
//     );
//   },
//   totalCookiesSold: 0,
// };

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

// give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create our first shop
const seattle = {
  location: "seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    // add a random number to the customersPerHour array
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

seattle.calculateSales();
console.log(seattle);

const displaySalesData = document.getElementById("displaySalesData");

const article = document.createElement("article");

const h2 = document.createElement("h2");
h2.textContent = seattle.location;
article.appendChild(h2);

displaySalesData.appendChild(articcle);
