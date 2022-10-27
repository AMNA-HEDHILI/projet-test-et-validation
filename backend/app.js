// import express
const express = require('express');


// import mongoose
const mongoose = require('mongoose');

// import model User
const User = require('./models/user');


// Import model Plat
const Plat = require('./models/plat');

// import body-parser
const bodyParser = require('body-parser');

// import bcrypt 
const bcrypt = require('bcrypt');

//import pdfKit
// fs = file system module (node_modules)
const fs=require('fs');
// import file pdfkit.js
const PDFDocument = require('./pdfkit');


// create express app
const app = express();

// Configuration bodyParser
// Send JSON responses
app.use(bodyParser.json());
// Parse Request Objects
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});


//Connect to database
mongoose.connect('mongodb://localhost:27017/meanjuin22', { useNewUrlParser: true, useUnifiedTopology: true });

// Business Logic : Add User
app.post("/users", (req, res) => {
  console.log("here in add user");
  User.findOne({ email: req.body.email }).then(
    (doc) => {
      if (doc) {
        res.status(200).json({
          message: "User already exists"
        })
      } else {
        bcrypt.hash(req.body.password, 10).then(cryptedPassword => {
          // collect data from req body
          let user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: cryptedPassword,
            tel: req.body.tel,
            role: req.body.role,
            experience: req.body.experience,
            speciality: req.body.speciality,
            dateOfBirth: req.body.dateOfBirth,
          });
          // save
          user.save();
          // send response
          res.status(200).json({
            message: "User added with success"
          })
        })
      }

    })
})




// Business Logic : Get All Users
app.get("/users", (req, res) => {
  console.log("Here in get all users");

  User.find((err, docs) => {
    if (err) {
      console.log("Error in DB");
    } else {
      res.status(200).json({
        users: docs
      })
    }
  })
})
// Business Logic : get user by id
app.get("/users/:id", (req, res) => {
  console.log("here in get user by id");
  let userId = req.params.id
  User.findOne({ _id: userId }).then(
    (doc) => {
      if (!doc) {
        console.log("Error");
      } else {
        res.status(200).json({
          user: doc
        })
      }
    }
  )
})

// Business Logic : update user
app.put("/users/:id", (req, res) => {
  console.log("Here in update user");
  bcrypt.hash(req.body.password, 10).then(cryptedPassword => {
    let user = {
      _id: req.body._id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: cryptedPassword,
      tel: req.body.tel,
      role: req.body.role
    }

    User.updateOne({ _id: req.body._id }, user).then(
      (result) => {
        if (result) {
          console.log(result);
          res.status(200).json({
            message: "User updated"
          })
        }
      }
    )
  })



})

// Business Logic : delete user
app.delete("/users/:id", (req, res) => {
  console.log("here in delete user");

  let userId = req.params.id;
  Plat.deleteMany({ idChef: userId }).then(
    (result) => {
      console.log(result);
    }
  )

  User.deleteOne({ _id: userId }).then(
    (result) => {
      if (result) {
        res.status(200).json({
          message: "User deleted"
        })
      }
    }
  )
})


// Business Logic : get users by role
app.get("/users/getUsersByRole/:role", (req, res) => {
  console.log("here in get users by role");

  let userRole = req.params.role;

  User.find({ role: userRole }).then(
    (docs) => {
      if (!docs) {
        console.log("Error in DB");
      } else {
        res.status(200).json({
          users: docs


        })
      }
    }
  )
})

// Business Logic : add plat
app.post("/plats", (req, res) => {
  console.log("here in add plat");
  Plat.findOne({ idChef: req.body.idChef, platName: req.body.platName }).then(
    (doc) => {
      if (doc) {
        res.status(200).json({
          message: "Plat already exists"
        })
      } else {
        // not exist
        let plat = new Plat({
          platName: req.body.platName,
          price: req.body.price,
          description: req.body.description,
          idChef: req.body.idChef
        })
        plat.save();
        res.status(200).json({
          message: "Plat added"
        })
      }
    }
  )
})


// Business Logic : get plats by chef id
app.get("/getPlatsByChefId/:id", (req, res) => {
  console.log("Here in get Plats by Chef id");

  Plat.find({ idChef: req.params.id }).then(
    (docs) => {
      if (!docs) {
        console.log("Error in DB");
      } else {
        res.status(200).json({
          plats: docs
        })
      }
    }
  )
})

// Business Logic : get all plats
app.get("/plats", (req, res) => {
  console.log("here in get all plats");

  Plat.find((err, docs) => {
    if (err) {
      console.log("Error in DB");
    } else {
      res.status(200).json({
        plats: docs
      })
    }
  })
})

// Business Logic : update plat
app.put("/plats/:id", (req, res) => {
  console.log("her ein update plat");

  let plat = {
    _id: req.body._id,
    platName: req.body.platName,
    price: req.body.price,
    description: req.body.description,
    idChef: req.body.idChef,
  }

  Plat.updateOne({ _id: req.body._id }, plat).then(
    (result) => {
      console.log(result);
      if (result) {
        res.status(200).json({
          message: "plat updated"
        })
      }
    }
  )
})

// Business Logic : delete plat
app.delete("/plats/:id", (req, res) => {
  console.log("here in delete plat");

  Plat.deleteOne({ _id: req.params.id }).then(
    (result) => {
      if (result) {
        res.status(200).json({
          message: "Plat deleted"
        })
      }
    }
  )
})

// Business Logic : Login 
app.post("/users/login", (req, res) => {
  console.log("Here in login", req.body);
  User.findOne({ email: req.body.email }).then(
    (resultEmail) => {
      console.log("resultEmail", resultEmail);
      if (!resultEmail) {
        res.status(200).json({
          message: "Wrong Email"
        });
      }
      return bcrypt.compare(req.body.password, resultEmail.password);
    }).then(
      (resultPwd) => {
        console.log("resultPwd", resultPwd);
        if (!resultPwd) {
          res.status(200).json({
            message: "Wrong password"
          });
        }
        else {
          User.findOne({ email: req.body.email }).then(
            (result) => {
              console.log("result", result);
              let userToSend = {
                _id : result._id,
                firstName : result.firstName,
                lastName : result.lastName,
                email : result.email,
                role : result.role,
                speciality : result.speciality,
                experience : result.experience,
                dateOfBirth : result.dateOfBirth,
              }
              res.status(200).json({
                message : "Success!",
                connectedUser: userToSend
              })
            }
          )
        }
      })
})


// Business Logic : Generate PDF
app.get("/generatePDF", (req, res) => {
  User.find((err, docs) => {
  if (err) {
  console.log("ERROR");
  } else {
  // Create The PDF document
  const doc = new PDFDocument();
  // Pipe the PDF into a user's file
  doc.pipe(fs.createWriteStream(`backend/pdfs/test.pdf`));
  // Add the header -https://pspdfkit.com/blog/2019/generate-invoices pdfkit-node/
  doc
  .image("backend/images/logo.png", 50, 45, { width: 50 })
  .fillColor("#444444")
  .fontSize(20)
  .text("Here All Users", 110, 57)
  .fontSize(10)
  .text("Imm Yasmine Tower", 200, 65, { align: "right" })
  .text("Centre Urbain Nord", 200, 80, { align: "right" }) .moveDown();
  // Create the table -https://www.andronio.me/2017/09/02/pdfkit-tables/
  const table = {
  headers: [
  "FirstName",
  "LastName",
  "Email Address",
  "Phone",
  ],
  rows: [],
  };
  // Add the users to the table
  for (const user of docs) {
  table.rows.push([
  user.firstName,
  user.lastName,
  user.email,
  user.tel,
  ]);
  }
  // Draw the table
  doc.moveDown().table(table, 10, 125, { width: 590 }); // Finalize the PDF and end the stream
  doc.end();
  res.status(200).json({
  message: "HERE PDF (success)",
  });
  }
  });


});
  
// export app 
module.exports = app;