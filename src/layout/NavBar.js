import React, { Component } from 'react';
import { Toolbar, AppBar, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Search, Grid, Header, Segment } from 'semantic-ui-react';
import { withRouter, Link } from "react-router-dom";

const styles = (theme) => ({
       ...theme.spreadThis, 
       root: {
        display: 'flex',
        zIndex: 1,
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: { 
                display: 'block',
                color: '#ffffff',
            },
        },
        appBar:{
            height: '70px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#21292E',
        },
        searchBar:{
            paddingLeft: '20px'
        }   
});

class NavBar extends Component {
    state = {
        results: [],
        value: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push({
            pathname: `/${this.state.value.split(' ').join('+')}`,
            state: `${this.state.value.split(' ').join('+')}`
        });
    };

    handleResultSelect = (e, { result }) => {
        this.setState({ value: result.title })
    }

    handleSearchChange = (e, { value }) => {
        console.log('search changed')
        this.setState({ isLoading: true, value })
    }


    render() {
        const { classes } = this.props;
        const { isLoading, value, results } = this.state;
        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar} position="absolute" color="inherit"> 
                    <Toolbar>
                        <Link to="/">
                            <Typography className={classes.title} variant="h5" noWrap>
                                iTunes Movie Search
                            </Typography>
                        </Link>
                           
                            <div className={classes.searchBar}>
                                <form onSubmit={this.handleSubmit}>
                                    <Search
                                        placeholder={"Search iTunes Movies"}
                                        // loading={isLoading}
                                        onResultSelect={this.handleResultSelect}
                                        onSearchChange={this.handleSearchChange}
                                        results={results}
                                        value={value}
                                        // size='big'
                                        {...this.props}/>
                                </form>
                            </div>
                            </Toolbar>
                            </AppBar>
            </div>

        )
    }
}

export default withRouter(withStyles(styles)(NavBar));
