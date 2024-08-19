// var express = require("express");
// var cors = require("cors");
// var mongoClient = require("mongodb").MongoClient;

// var connectionString = "mongodb://localhost:27017";

// var app = express();
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get("/getusers", (req, res) => {
//   mongoClient.connect(connectionString, (err, clientObj) => {
//     if (!err) {
//       var database = clientObj.db("reactdb"); // Corrected typo
//       database
//         .collection("tblusers")
//         .find({})
//         .toArray((err, documents) => {
//           if (!err) {
//             res.send(documents);
//           } else {
//             res.status(500).send("Error fetching users");
//           }
//         });
//     } else {
//       res.status(500).send("Error connecting to database");
//     }
//   });
// });

// app.post("/registeruser", (req, res) => {
//   var userdetails = {
//     UserId: req.body.UserId,
//     UserName: req.body.UserName,
//     Password: req.body.Password,
//     Age: parseInt(req.body.Age),
//     Mobile: req.body.Mobile, // Corrected typo
//     Subscribed: req.body.Subscribed == "true" ? true : false,
//   };
//   mongoClient.connect(connectionString, (err, clientObj) => {
//     if (!err) {
//       var database = clientObj.db("reactdb"); // Corrected typo
//       database.collection("tblusers").insertOne(userdetails, (err, result) => {
//         if (!err) {
//           console.log("Record Inserted");
//           res.redirect("/getusers");
//         } else {
//           res.status(500).send("Error inserting user");
//         }
//       });
//     } else {
//       res.status(500).send("Error connecting to database");
//     }
//   });
// });

// app.listen(4000);
// console.log("Server started: http://127.0.0.1:4000");

// var express = require("express");
// var cors = require("cors");
// var { MongoClient } = require("mongodb");

// var connectionString = "mongodb://localhost:27017";

// var app = express();
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get("/getusers", async (req, res) => {
//   try {
//     const client = await MongoClient.connect(connectionString, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     const database = client.db("reactdb");
//     const users = await database.collection("tblusers").find({}).toArray();
//     res.send(users);
//     await client.close();
//   } catch (err) {
//     console.error("Error fetching users:", err);
//     res.status(500).send("Error fetching users");
//   }
// });

// app.post("/registeruser", async (req, res) => {
//   try {
//     const userdetails = {
//       UserId: req.body.UserId,
//       UserName: req.body.UserName,
//       Password: req.body.Password,
//       Age: parseInt(req.body.Age),
//       Mobile: req.body.Mobile,
//       Subscribed: req.body.Subscribed === "true",
//     };

//     const client = await MongoClient.connect(connectionString, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     const database = client.db("reactdb");
//     await database.collection("tblusers").insertOne(userdetails);
//     console.log("Record Inserted");
//     res.redirect("/getusers");
//     await client.close();
//   } catch (err) {
//     console.error("Error inserting user:", err);
//     res.status(500).send("Error inserting user");
//   }
// });

// app.listen(4000, () => {
//   console.log("Server started: http://127.0.0.1:4000");
// });

var express = require("express");
var cors = require("cors");
var { MongoClient } = require("mongodb");

var connectionString = "mongodb://localhost:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function connectToDatabase() {
  const client = await MongoClient.connect(connectionString);
  return client.db("reactdb");
}

app.get("/getusers", async (req, res) => {
  try {
    const database = await connectToDatabase();
    const users = await database.collection("tblusers").find({}).toArray();
    res.send(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Error fetching users");
  }
});

app.post("/registeruser", async (req, res) => {
  try {
    const userdetails = {
      UserId: req.body.UserId,
      UserName: req.body.UserName,
      Password: req.body.Password,
      Age: parseInt(req.body.Age),
      Mobile: req.body.Mobile,
      Subscribed: req.body.Subscribed === "true",
    };

    const database = await connectToDatabase();
    await database.collection("tblusers").insertOne(userdetails);
    console.log("Record Inserted");
    res.redirect("/getusers");
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send("Error inserting user");
  }
});

app.get("/getproducts", async (req, res) => {
  try {
    const database = await connectToDatabase();
    const products = await database
      .collection("tblproducts")
      .find({})
      .toArray();
    res.send(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).send("Error fetching products");
  }
});

app.get("/getcategories", async (req, res) => {
  try {
    const database = await connectToDatabase();
    const categories = await database
      .collection("tblcategories")
      .find({})
      .toArray();
    res.send(categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).send("Error fetching categories");
  }
});

app.get("/getproduct/:id", async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const database = await connectToDatabase();
    const product = await database
      .collection("tblproducts")
      .findOne({ id: productId });
    res.send(product);
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).send("Error fetching product");
  }
});

app.listen(4000, () => {
  console.log("Server started: http://127.0.0.1:4000");
});
