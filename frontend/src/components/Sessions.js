import React from 'react';
import SingleSession from './singleSession';


class Sessions extends React.Component {
    render() {
        return (
            <div style={{ flexBasis: '90%'}} >
                <div style={this.buttonContainer()}>{this.mapIt()}</div>
            </div>
        )
    }

    buttonContainer = () => {
        return {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            // borderTop: '1px black solid'
        }
    }
    

    mapIt = () => {
        const toArray = Object.values(this.props.sessions)
        return toArray.map((session) => (
            <SingleSession key={session._id} session={session}/>
        ))
        // return toArray
    }
    
}

export default Sessions;