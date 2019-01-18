import React from 'react';

class singleSession extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>{this.props.session.date}</div>
            </React.Fragment>
        )
    }
}

export default singleSession;