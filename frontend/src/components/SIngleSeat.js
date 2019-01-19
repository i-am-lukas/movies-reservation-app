import React from 'react';

class SingleSeat extends React.Component{

    state = {
        seatNumber: this.props.seat.seatNumber,
        reserve: false
    }

    render() {
        return <button onClick={this.handleClick} style={this.styleSeat()}>{this.props.number}</button>
    }

    

    handleClick = () => {
        if (this.props.seat.isOccupied === true) return
        else if (this.state.reserve === false){
            this.setState({reserve: true})
            this.props.reserveSeat(this.state.seatNumber, this.state.reserve)
        }
        else {
            this.setState({reserve: false})
            this.props.reserveSeat(this.state.seatNumber, this.state.reserve)
        }
    }

    styleSeat = () => {
        
       if (this.props.seat.isOccupied === true) return {
            backgroundColor: '#18191e',
            color: '#DDDDDD',
            borderRadius: '20%',
            alignSelf: 'stretch',
            padding: '0px',
            width: '20px'
       } 

       else if(this.state.reserve===false) return {
           backgroundColor: '#2ECC40',
               borderRadius: '20%',
               alignSelf: 'stretch',
               padding: '0px',
               width: '20px'
       }

       else return {
            backgroundColor: '#FF4136',
            borderRadius: '20%',
            alignSelf: 'stretch',
            padding: '0px',
            width: '20px'
       }
    }
}

export default SingleSeat;