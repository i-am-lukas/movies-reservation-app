import React from 'react';
import Button from '@material-ui/core/Button';
import SingleSeat from './SIngleSeat'

class Seats extends React.Component {
    state = {
        seats: [this.props.seats]
    }

    render(){
        return(
            <div>
                <div style={this.wholeGrid()}>
                    {this.state.seats.map((seat) => (
                        <SingleSeat seat={seat}/>
                    ))}
                </div>
                <div>legenda</div>
                <Button>Rezerwuj</Button>
            </div>
        )
    }
    
    wholeGrid = () => {
        return {
            display: 'grid',
            gridTemplateColumns: '20px 20px 20px 20px 20px 20px 20px 20px 20px 20px ',
            gridTemplateRows: '20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px 20px ',
            borderTop: 'solid 1px black',
            width: '50%'
    }
    
}
}



export default Seats