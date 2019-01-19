import React from 'react';
import Button from '@material-ui/core/Button';
import SingleSeat from './SIngleSeat';
import axios from 'axios';

class Seats extends React.Component {
    state = {
        seats: this.props.seats,
        reservation: []
    }

    render(){
        return(
            <div>
                <div style={this.wholeGrid()}>
                    {this.props.seats.map(this.seatNumber)}
                </div>
                <div>legenda</div>
                <Button onClick={this.sendReservations}>Rezerwuj</Button>
            </div>
        )
    }

    sendReservations = () => {
        axios.put(`http://localhost:4500/seats/${this.props.sessionId}`, { reservation: this.state.reservation })
    }

    seatNumber = (seat) =>{
        var columns = 15
        var number = this.props.seats.indexOf(seat)+1
        for(var i=1; i<=columns; i++){
            if(number<=columns*i){
                return <SingleSeat key= {number*i} seat={seat} number={number-columns*(i-1)} />
            }
        } 
    }
    
    wholeGrid = () => {
        return {
            display: 'grid',
            gridTemplateColumns: '20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px ',
            gridTemplateRows: '20px 20px 20px 20px 20px 20px 20px 20px 20px 20px  ',
            borderTop: 'solid 1px black',
            width: '100%',
            justifyContent: 'center',
            padding: '15px',
            gridGap: '2px 2px',
            
    }
    
}
}



export default Seats