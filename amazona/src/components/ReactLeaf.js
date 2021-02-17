import React from 'react'
import Carousel from 'react-elastic-carousel'
import Typography from '@material-ui/core/Typography'

class ReactLeaf extends React.Component{
    constructor(props){
        super(props)
        this.breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
            { width: 850, itemsToShow: 3 },
            { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
            { width: 1450, itemsToShow: 5 },
            { width: 1750, itemsToShow: 6 },
          ]
    }

    render(){
        return(
      <Carousel breakPoints={this.breakPoints} enableAutoPlay autoPlaySpeed={2500}>
      <Typography> <img src="https://webunwto.s3.eu-west-1.amazonaws.com/inline-images/animals.jpg" style={{width:"200px"}} /> </Typography>
      <Typography> <img src="https://webunwto.s3.eu-west-1.amazonaws.com/inline-images/animals.jpg" style={{width:"200px"}} /> </Typography>
      <Typography> <img src="https://webunwto.s3.eu-west-1.amazonaws.com/inline-images/animals.jpg" style={{width:"200px"}} /> </Typography>
      <Typography> <img src="https://webunwto.s3.eu-west-1.amazonaws.com/inline-images/animals.jpg" style={{width:"200px"}} /> </Typography>
      <Typography> <img src="https://webunwto.s3.eu-west-1.amazonaws.com/inline-images/animals.jpg" style={{width:"200px"}} /> </Typography>
      <Typography> <img src="https://webunwto.s3.eu-west-1.amazonaws.com/inline-images/animals.jpg" style={{width:"200px"}} /> </Typography>
      <Typography> <img src="https://webunwto.s3.eu-west-1.amazonaws.com/inline-images/animals.jpg" style={{width:"200px"}} /> </Typography>
      <Typography> <img src="https://webunwto.s3.eu-west-1.amazonaws.com/inline-images/animals.jpg" style={{width:"200px"}} /> </Typography>
      <Typography> <img src="https://webunwto.s3.eu-west-1.amazonaws.com/inline-images/animals.jpg" style={{width:"200px"}} /> </Typography>
    
      
    </Carousel>
    
        )
    }

}

export default ReactLeaf;