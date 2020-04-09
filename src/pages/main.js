import React, { Component, Fragment } from 'react';
import axios from 'axios';
import FeatureCard from '../components/FeatureCard';
import { Card, Icon } from 'semantic-ui-react';

class main extends Component {
    state = {
        topMovies: [],
        isLoaded: false,
    }

    componentDidMount(){
        axios.get('https://itunes.apple.com/us/rss/topmovies/limit=10/json')
        .then((response) => {
            this.setState({ topMovies: response.data.feed.entry, isLoaded: true})
        })
    };

    mapItems(items){
        var movies = items.map((item, index) => <FeatureCard key={index} movie={item}/>)
        return movies;
    };

    render() {
        const { isLoaded, topMovies } = this.state;
        var movies = [];
        if(this.state.isLoaded){
            movies = this.mapItems(topMovies) 
        }

        return (
            
            <Fragment>
                <div className="results-title">
					<strong>Top Movies</strong>
				</div>

                 <Card.Group itemsPerRow={5}>
                 {movies}
                </Card.Group>
            </Fragment>
        )
    }
}

export default main
