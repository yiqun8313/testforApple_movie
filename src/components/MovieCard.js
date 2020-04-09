import React, { Component, Fragment } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import MovieModal from './MovieModal';

//title, artwork image, short description, rental price

class MovieCard extends Component {
    render() {
        const {
            movie 
        } = this.props
        
        const artwork = movie.artworkUrl100.split('100x100bb.jpg')[0] + '300x300bb.jpg'
        const description = movie.shortDescription ? (
            movie.shortDescription + '...'
        ) : movie.longDescription ? (
            movie.longDescription.substring(0, 100) + '...'
        ) : (
            null
        )

        const price = movie.trackRentalPrice ? (
            '$' + movie.trackRentalPrice
        ) : ( 
            'No Rental Option'
        )

        const genre = movie.primaryGenreName
      
        return (
            <Fragment>
            <Card 
                // href="#"
                raised>
            <Image src={artwork} wrapped ui={false}/>
            <Card.Content>
                <Card.Header> {movie.trackName} </Card.Header>
                <Card.Meta> {price}   </Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
            
            </Card.Content>
            <Card.Content extra>
            <Card.Meta textAlign='center'>{genre}</Card.Meta>
            </Card.Content>
            <MovieModal movie={movie}/>
           
            
            </Card>
            
            </Fragment>
            
        )
    }
}

export default MovieCard;
