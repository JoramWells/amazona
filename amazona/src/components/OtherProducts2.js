import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { CardHeader } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const displayItems = [
  {
    title: "Ankara Tops",
    price:"80.00",
    imgPath:
      "http://kikapu.express/images/ad-1.jpg",
  },
  {
    title: "Bikini",
    price:"50.00",
    imgPath:
      "http://kikapu.express/images/ad-1.jpg",
  },
  {
    title: "Bra",
    price: "10.00",
    imgPath:
      "http://kikapu.express/images/ad-2.jpg",
  },

];

export default function OtherProducts2() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
      {displayItems.map((item) => (
        <Grid  style={{textAlign:"center"}} item xs={4}>
          
            <Card  className={classes.root}>

              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item.title}
                  height="140"
                  image={item.imgPath}
                  title="Contemplative Reptile"
                />
                

              </CardActionArea>
            </Card>
    
        </Grid>
              ))}
      </Grid>
    </div>
  );
}
