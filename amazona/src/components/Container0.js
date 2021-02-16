import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import CorouselView from "./CorouselView";

const useStyles = makeStyles((theme) => ({
    container:{
        display:"flex",
        justifyContent:"center",
        marginTop:"50px",
        padding:"2rem"
    },
}))

function Container0(){

    const classes = useStyles()
    return(
        <div className={classes.container}>
            <Container maxWidth="sm">
                    <CorouselView />
            </Container>

        </div>

    )
}

export default Container0;