import React from 'react';
import Button from '@material-ui/core/Button';

class Hour extends React.Component {
    render(){
        return(
            <div>
                <Button variant="outlined" color="default" style={this.styleButton()} > {this.props.hour} </Button>
            </div>
        )
    }
    
    styleButton = () => {
        return {
            borderBottom: '2px black solid',
            borderLeft: '2px black solid',
            borderRight: '2px black solid',
            fontSize: '16px',
            fontWeight: '600',
            margin: '0px'
        }
    }
}



export default Hour;