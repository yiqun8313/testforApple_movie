import React, { Component, Fragment } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';

//title, artwork image, short description, rental price
// const genre = response.data.results[0].primaryGenreName

// console.log('entry =', entry)
// console.log('title = ', entry.title.label)
// console.log('summary = ', entry.summary)
// console.log('image url = ', entry["im:image"][2])

class FeatureCard extends Component {
    render() {
        const {
            movie 
        } = this.props

        const artwork = movie["im:image"][2].label.split('113x170bb.png')[0] + '300x300bb.png'
        const description = movie.summary.label.substring(0, 100) + '...'
        const genre =  movie.category.attributes.term
        const price = movie["im:price"].label

        return (
            <Card 
                // href="/"
                raised>
            <Image src={artwork}/>
            <Card.Content>
                <Card.Header> {movie.title.label} </Card.Header>
                <Card.Meta> {genre}   </Card.Meta>
                <Card.Meta> {price}   </Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Content>
            </Card>
        )
    }
}

export default FeatureCard;
