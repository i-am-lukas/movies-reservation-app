import React from 'react';
import Button from '@material-ui/core/Button';
import SingleSeat from './SIngleSeat'

class Seats extends React.Component {
    


    render(){
        return(
            <div>
                <div style={this.wholeGrid()}>
                    {this.props.seats.map((seat) => (
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