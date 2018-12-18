import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './Content.css'
import Grid from '@material-ui/core/Grid';

const Content = props => (
  <Grid item xs={6}>
    <Card
      className="card" >
      <CardActionArea>
        <CardContent>
          <CardMedia
            className="media"
            image={props.image}
            title={props.name}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
)

export default Content