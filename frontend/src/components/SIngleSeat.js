import React from 'react';

class SingleSeat extends React.Component{

    render() {
        return <div style={this.styleSeat()}>1</div>
    }

    styleSeat = () => {
        
       if (this.props.seat.isOccupied === false) return {
           backgroundColor: 'green',
            borderRadius: '20%'
       } 
       else return {
            color: 'red'
       }
    }
}

export default SingleSeat;