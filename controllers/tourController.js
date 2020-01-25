const express = require("express");

exports.getAllTours = (req, res, next) => {
  console.log(req);
  res.send("get all tours");
};
