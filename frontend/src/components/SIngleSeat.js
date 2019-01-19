import React from 'react';

class SingleSeat extends React.Component{

    state = {
        reserve: false
    }

    render() {
        return <button onClick={this.handleClick} style={this.styleSeat()}>{this.props.number}</button>
    }

    handleClick = () => {
        if (this.props.seat.isOccupied === true) return
        else if (this.state.reserve === false){
            this.setState({reserve: true})
        }
        else {
            this.setState({reserve: false})
        }
    }

    styleSeat = () => {
        
       if (this.props.seat.isOccupied === true) return {
            backgroundColor: '#18191e',
            color: '#DDDDDD',
            borderRadius: '20%',
       } 

       else if(this.state.reserve===false) return {
           backgroundColor: '#2ECC40',
               borderRadius: '20%',
       }

       else return {
            backgroundColor: '#FF4136',
            borderRadius: '20%',
       }
    }
}

export default SingleSeat;