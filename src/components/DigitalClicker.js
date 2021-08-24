import React, { Component } from 'react';

class DigitalClicker extends React.Component {
     constructor () {
         super();
         this.state = {
            timesClicked: 0,
         }
     }

     getClicked = () => {
        this.setState((previousState) => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
     }

     render () {
         return (
            <button onClick={this.getClicked}>{this.state.timesClicked}</button>
         )
     }
}

export default DigitalClicker;