const express = require("express");

exports.getAllUsers = (req, res, next) => {
  console.log(req);
  res.send("get all users");
};
