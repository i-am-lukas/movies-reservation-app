import React from 'react';
import Button from '@material-ui/core/Button';
import SingleSeat from './SIngleSeat';
import axios from 'axios';

class Seats extends React.Component {
    state = {
        reservation: [],
        seats: this.props.seats
    }

    render(){
        return(
            <div>
                <div style={this.wholeGrid()}>
                    {this.props.seats.map(this.seatNumber)}
                </div>
                <div>
                Legenda: <span style={{backgroundColor: 'rgb(46, 204, 64)'}}>X</span>-miejsce wolne 
                {'   '}
                <span style={{backgroundColor: 'rgb(255, 65, 54)'}}>X</span>-wybrane miejsce <br />
                <span style={{backgroundColor: '#18191e'}}>X</span>-miejsce zajęte
                </div>
                <Button style={this.styleBtn()} onClick={this.sendReservations}>Rezerwuj</Button>
            </div>
        )
    }

    styleBtn = () => {
        return {
            padding: '3px',
            border: '1px solid black',
            borderRadius: '10%',
            marginTop: '10px'
        }
    }

    sendReservations = () => {
        axios.put(`http://localhost:4500/seats/${this.props.sessionId}`, { reservation: this.state.reservation })
    }

    seatNumber = (seat) =>{
        var columns = 15
        var number = this.props.seats.indexOf(seat)+1
        for(var i=1; i<=columns; i++){
            if(number<=columns*i){
                return <SingleSeat reserveSeat={this.reserveSeat} key= {number*i} seat={seat} number={number-columns*(i-1)} />
            }
        } 
    }
    
    reserveSeat = (seatNumber, reserved) => {
        if(reserved){
            this.state.reservation.push(seatNumber)
            console.log(this.state.reservation)
            return
        }
        else{
            this.state.reservation.splice(this.state.reservation.indexOf(seatNumber), 1)
            console.log(this.state.reservation)
            return
        }
    }

    wholeGrid = () => {
        return {
            display: 'grid',
            gridTemplateColumns: '20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px ',
            gridTemplateRows: '20px 20px 20px 20px 20px 20px 20px 20px 20px 20px  ',
            borderTop: 'solid 1px black',
            width: 'auto',
            justifyContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',
            paddingTop: '15px',
            paddingBottom: '15px',
            gridGap: '2px 2px',
            
    }
    
}
}



export default Seats