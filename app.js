const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

const userRouter = require("./routes/userRoutes");
const tourRouter = require("./routes/tourRoutes");


app.use("/api/v1/users", userRouter);
app.use("/api/v1/tours", tourRouter);

const port = 3000;

app.listen(port, () => {
  console.log("Another log statement");
  console.log(`Listenning on port ${port}`);
  //   console.log(req);
});
