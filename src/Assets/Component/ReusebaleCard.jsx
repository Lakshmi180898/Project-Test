import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const ReusebaleCard = (props) => {
  console.log("props", props);
  return (
    <>
      <Card key={props.id} sx={{ maxWidth: 200, minWidth: 200, borderRadius: 4, margin: 1 }}>
        <Box
          style={{
            backgroundColor:`${props.color}`,
            padding: 5,
            width: 50,
            height: 50,
            borderRadius: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            marginLeft: 20,
            marginTop: -10,
          }}
        >
          {props.icon}
        </Box>
        <CardContent style={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ fontSize: 18, color: "#50C878" }}
          >
            {props.title}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: -30,
          }}
        >
          <Box style={{ paddingLeft: 22 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontSize: 16, color: "#50C878" }}
            >
              {props.percentage}
            </Typography>
          </Box>
          <Box style={{ paddingRight: 22 }}>
            <Typography gutterBottom variant="h5" component="div">
              {props.count}
            </Typography>
          </Box>
        </CardActions>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: -30,
          }}
        >
          <Button size="small">View Details</Button>
          <Button size="small">View on Map</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ReusebaleCard;
