const http = require("http");
const express = require("express");
const app = express();
const morgan = require("morgan");

const userRouter = require("./routes/userRoutes");
const tourRouter = require("./routes/tourRoutes");

//middleware
app.use(express.json);
app.use(morgan("dev"));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/tours", tourRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Listenning on port ${port}`);
//   console.log(req);
});
