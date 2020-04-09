import React, { Component } from 'react'
import { Button, Header, Image, Modal, Embed } from 'semantic-ui-react';
import MovieCard from './MovieCard'
import Black from '../images/black.png';
import ratedG from '../images/g.png';
import ratedPg from '../images/pg.png';
import ratedPg13 from '../images/pg13.png';
import ratedR from '../images/R.png';
import notRated from '../images/notRated.png';

class MovieModal extends Component {

  pad = (n, z) => {
    z = z || 2;
    return ('00' + n).slice(-z);

  }

  msToTime = (s) => {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    if (hrs === 0){
      return this.pad(mins) + ' ' + 'min';
    } 

   
    return hrs + ' ' + 'hr' + ' ' +  this.pad(mins) + ' ' + 'min';
  }



    render() {
          const {
            movie 
        } = this.props
        console.log('movie = ', movie )

        const artwork = movie.artworkUrl100.split('100x100bb.jpg')[0] + '300x300bb.jpg'
        const duration = this.msToTime(movie.trackTimeMillis)
        const rating = movie.contentAdvisoryRating
        const genre = movie.primaryGenreName
        const price = movie.trackRentalPrice ? (
          '$' + movie.trackRentalPrice
      ) : ( 
          'No Rental Option'
      )

        return (
            <Modal
              trigger={<Button> See More</Button>}>
            <Modal.Header>{movie.trackName}</Modal.Header>
            <Modal.Content>
              <Embed
                icon='play icon'
                placeholder={Black}
                url={movie.previewUrl}
              />
              <Modal.Description>
                <Image className="modal-pic" src={artwork}/>

                <p>
                <strong>Description</strong><br/>
                 {movie.longDescription}
                </p>
                <p>
               
                <strong>Genre: </strong> {genre} <br/>
                <strong>Run Time: </strong> {duration} <br/>
                <strong>Rental: </strong> {price} 
                </p>

                <p>
                { rating === 'PG-13' ? (
                   <Image className="longer-icon" src={ratedPg13}/>

                ): rating === 'PG' ?(
                  <Image className="rate-icon" src={ratedPg}/>
                  
                ): rating === 'G' ? (
                  <Image className="rate-icon" src={ratedG}/>

                ): rating === 'R' ? (
                  <Image className="rate-icon" src={ratedR}/>
                ): rating === 'NR' ?(
                  <Image className="longer-icon" src={notRated}/>
                ): (
                  null
                )}
                </p>
                
              </Modal.Description>
            </Modal.Content>
            {/* <Modal.Actions>
            <Button primary>
              iTunes Store </Button>
            </Modal.Actions> */}
            
          </Modal>
          
        )
    }
}

export default MovieModal;
