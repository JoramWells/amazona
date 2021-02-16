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
      "https://sc01.alicdn.com/kf/HTB1wqtpMXXXXXcKaXXXq6xXFXXX5/220128241/HTB1wqtpMXXXXXcKaXXXq6xXFXXX5.jpg",
  },
  {
    title: "Bikini",
    price:"50.00",
    imgPath:
      "https://www.lapassionvoutee.com/wp-content/uploads/2018/11/African-Print-Galore-Africa-Print-SwimsuitBikini-Two-piece-AnkaraKente-Dashiki-1200.jpg",
  },
  {
    title: "Bra",
    price: "10.00",
    imgPath:
      "https://ae01.alicdn.com/kf/HTB10kREA_lYBeNjSszcq6zwhFXat.jpg_q50.jpg",
  },
  {
    title: "Panty Linings",
    price:"5.36",
    imgPath:
      "https://images-na.https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzz6unvtOGsEIMRMRmdnCxNkypGVrdjSf0xA&usqp=CAU-images-amazon.com/images/I/51sWOfVmO4L.jpg",
  },
];

export default function ClothingList() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
      {displayItems.map((item) => (
        <Grid  style={{textAlign:"center"}} item xs={3}>
          
            <Card variant="outlined" className={classes.root}>

              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item.title}
                  height="140"
                  image={item.imgPath}
                  title="Contemplative Reptile"
                />
                
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.title}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    ${item.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
    
        </Grid>
              ))}
      </Grid>
    </div>
  );
}
