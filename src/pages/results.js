import React, { Component, Fragment } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import { Card, Icon } from 'semantic-ui-react';

class results extends Component {
    state = {
        error: '',
        isLoaded: false,
        apiResults: [],
        resultCount: 0,
        query: ''
    }

    componentDidMount(){
        const searchQuery = this.props.match.params.query; 
        this.apiSearch(searchQuery)
    }

    componentWillReceiveProps(nextProps){
        this.setState( { isLoaded: false })
        const searchQuery = nextProps.match.params.query
        this.apiSearch(searchQuery)
    }

    apiSearch = (query) => {
        axios.get(`https://itunes.apple.com/search?term=${query.split(' ').join('+')}&entity=movie`)
        .then((response) => {
            // console.log('resultCount = ', response.data.resultCount)
            this.setState({ 
                    apiResults: response.data.results, 
                    resultCount: response.data.resultCount, 
                    query: query, 
                    isLoaded: true})
        })
    };

    mapItems(items){
        var movies = items.map((item, index) => <MovieCard key={index} movie={item}/>)
        return movies;
    }
    
    render() {
        const { isLoaded, query, items, apiResults, resultCount } = this.state;
        var movies = [];
        if(this.state.isLoaded){
            movies = apiResults.length > 0 ? this.mapItems(apiResults) : 'No Results Found'
        }
        
        return (
            <Fragment>
                <span>{!isLoaded ? "Loading..." : null}</span>
                <div className="results-title">
					<strong>{resultCount}</strong> Results for <strong>{query}</strong>
				</div>

                 <Card.Group 
                    // stackable -- for mobile view
                    itemsPerRow={5}>
                 {movies}
                </Card.Group>
            </Fragment>
        ); 
    }
}

export default results;
