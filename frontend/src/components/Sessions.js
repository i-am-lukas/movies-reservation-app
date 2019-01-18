import React from 'react';
import SingleSession from './singleSession';

class Sessions extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>{this.mapIt()}</div>
            </React.Fragment>
        )
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