// Step 1: Create and use database
use shopnow;

// Step 2: Create two collections in shopnow
db.createCollection("users")
db.createCollection("prodcuts")

// Step 3: Insert provided data to the users collection
db.users.insertMany([
  {
      "_id": ObjectId("6123456789abcdef01234567"),
      "userId": "user001",
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "_id": ObjectId("abcdef012345678901234567"),
      "userId": "user002",
      "name": "Jane Smith",
      "email": "jane@example.com"
    }
]);

// Step 4: Insert provided data to the products collection
db.products.insertMany([
    {
      "_id": ObjectId("0123456789abcdef01234567"),
      "productId": "P001",
      "title": "Laptop",
      "category": "Electronics",
      "price": 999.99
    },
    {
      "_id": ObjectId("123456789abcdef012345678"),
      "productId": "P002",
      "title": "Smartphone",
      "category": "Electronics",
      "price": 699.99
    },
    {
      "_id": ObjectId("23456789abcdef0123456789"),
      "productId": "P003",
      "title": "Headphones",
      "category": "Electronics",
      "price": 99.99
    },
    {
      "_id": ObjectId("3456789abcdef01234567890"),
      "productId": "P004",
      "title": "Backpack",
      "category": "Fashion",
      "price": 49.99
    }
]);

// Q1: Retrieving all product details (title, category, price) where the price is less than $50
db.products.find(
   { price: {$gt: 50} },
   { productId: 1, title: 1, category: 1, price: 1, _id: 0 } // Exclude attribute will have 0
);

// Q2: Update the product price to $75 for productId: P003
db.products.updateOne(
   { productId: "P003" }, // Filter: find the document where productId is P003
   { $set: { price: 75 } } // Update: set the price field to 75
);
// Q2: Check the updated value
db.products.findOne({ productId: "P003" });

// Q3: Insert a new product
db.prodcuts.insertOne({
    "productId": "P005",
    "title": "Smartwatch",
    "category": "Electronics",
    "price": 149.99
});
// Q3: Verify
db.prodcuts.findOne({ productId: "P005"});

// Q4: Delete all products from the "Fashion" category
db.prodcuts.deleteMany({
    "category": "Fashion" // Condition to filter items for deletion
});

// Q4: Verify
db.prodcuts.countDocuments({
    "category": "Fashion" // Condition for the count
});