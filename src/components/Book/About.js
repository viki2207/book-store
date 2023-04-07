import { Box, Typography } from "@mui/material";

import React from "react";

const About = () => {
  return (
    <div>
      <p style={{ width: "20px", height: "20px" }}></p>
      <Box display="150px" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy", margin: "box" }} variant="h2">
          This is a CRUD Application
        </Typography>
        <p style={{ width: "10px", height: "10px" }}></p>
        <Typography variant="h3" sx={{ fontSize: "25px" }}>
          How do I add the favorites books and update them through Book Shelf ?
        </Typography>
        <Typography
          variant="h4"
          sx={{
            alignItems: "flex-start",
            fontSize: "25px",
          }}
        >
          {" "}
          <b>Follow these steps: </b>
          <div>
            <p sx={{ alignItems: "center" }}>
              1.Click to open All Books on Book
            </p>
            <p style={{ margin: Box }}>
              {" "}
              2.Shelf Check if here is not your favorite book. Let's say it's
              not; Quickly go to Add Books page. Observe the form which will let
              you to add your favorite one.
            </p>
            <p>
              3.Enter the required information that has been asked. 5.Once you
              click the button can see your favorite book at the bottom of the
              list. Enjoy with the list and share with your loved ones. The
              Best...
            </p>{" "}
          </div>
        </Typography>
        <p style={{ width: "10px", height: "10px" }}></p>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          By MERN STACK
        </Typography>
      </Box>
    </div>
  );
};

export default About;
