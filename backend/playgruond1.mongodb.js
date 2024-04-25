// Select the database to use.
use("sigmaDatabase");

// Insert a few documents into the sales collection.
db.getCollection("courses").insertMany([
  {
    name: "C#",
    price: 25000,
    instructor: "alex",
  },
  {
    name: "Ruby",
    price: 22000,
    instructor: "lily",
  },
  {
    name: "HTML",
    price: 18000,
    instructor: "max",
  },
  {
    name: "CSS",
    price: 19000,
    instructor: "sophia",
  },
  {
    name: "Android",
    price: 27000,
    instructor: "ethan",
  },
  {
    name: "iOS",
    price: 28000,
    instructor: "ava",
  },
  {
    name: "Unity",
    price: 30000,
    instructor: "logan",
  },
  {
    name: "Game Development",
    price: 32000,
    instructor: "mia",
  },
  {
    name: "Python",
    price: 24000,
    instructor: "noah",
  },
  {
    name: "Java EE",
    price: 28000,
    instructor: "emma",
  },
  {
    name: "Spring Framework",
    price: 26000,
    instructor: "liam",
  },
  {
    name: "Vue.js",
    price: 21000,
    instructor: "mia",
  },
  {
    name: "AngularJS",
    price: 23000,
    instructor: "owen",
  },
  {
    name: "jQuery",
    price: 20000,
    instructor: "ella",
  },
  {
    name: "Docker",
    price: 29000,
    instructor: "jacob",
  },
  {
    name: "Kubernetes",
    price: 31000,
    instructor: "mia",
  },
  {
    name: "React Native",
    price: 25000,
    instructor: "ava",
  },
  {
    name: "SwiftUI",
    price: 27000,
    instructor: "liam",
  },
  {
    name: "TensorFlow",
    price: 33000,
    instructor: "mia",
  },
  {
    name: "PyTorch",
    price: 34000,
    instructor: "noah",
  },
]);

// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db
  .getCollection("sales")
  .find({
    date: { $gte: new Date("2014-04-04"), $lt: new Date("2014-04-05") },
  })
  .count();

// Print a message to the output window.
console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection("sales").aggregate([
  // Find all of the sales that occurred in 2014.
  {
    $match: {
      date: { $gte: new Date("2014-01-01"), $lt: new Date("2015-01-01") },
    },
  },
  // Group the total sales for each product.
  {
    $group: {
      _id: "$item",
      totalSaleAmount: { $sum: { $multiply: ["$price", "$quantity"] } },
    },
  },
]);
