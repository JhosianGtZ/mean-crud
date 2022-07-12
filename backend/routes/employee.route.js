const express = require('express');
const app = express();
const employeeRoute = express.Router();

//Employee model 

let Employee = require('../models/Employee');

// ADD emplyee 

employeeRoute.route('/create').post((req, res, next) => {
  Employee.create(req.body, (error, data) => {

    if (error) {
      return next(error)
    } else {
      res.json(data)
    }

  })
});

// Get all employees
employeeRoute.route('/').get((req, res) => {

  Employee.find((error, data) => {

    if (error) {

      return next(error)

    } else {

      res.json(data)
    }

  })

})


// Get a single employee
employeeRoute.route('/read/:id').get((req, res) => {
  Employee.findById(req.params.id, (error, data) => {

    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//Update employee

employeeRoute.route('/update/:id').put((req, res, next) => {

  Employee.findByIdAndUpdate(req.params.id, {

    $set: req.body

  }, (error, data) => {


    if (error) {

      return next(error);
      console.log(error);

    } else {

      res.json(data)
      console.log('Data uptdated successfully');
      
    }
  })
})
