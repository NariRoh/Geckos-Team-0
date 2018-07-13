import React from 'react';
import "../styles/Focus.css";

class Focus extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            focus: '' 
        };
    }

    componentDidMount() {
        try {
          const json = localStorage.getItem('focus');
          const options = JSON.parse(json);
      
          if (options) {
            // this.setState(() => ({ focus }));
          }
        } catch (e) {
          // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.focus !== this.state.focus.length) {
            localStorage.setItem('focus', this.state.focus);
        }
        console.log('It Updated!');
    }

    // Handles form submission
    addFocus = (e) => {
        e.preventDefault();
        console.log(`focus added`);
    }

    // Handles removal of Focus field
    deleteFocus = (e) => {
        console.log(`focus deleted`);
    }

    render() {
      return (
        <div>   
            <div className="FocusInput">
                <form onSubmit={this.addFocus}>
                    <p id="FocusHeader">What is your main focus for today?</p>
                    <input 
                        id="FocusValue" 
                        type="text" 
                        name="focus" 
                    />
                </form>
            </div>
            <div className="FocusInput hide">
                <p id="FocusItem">TODAY</p>
                <p>My Focus</p>
            </div>
        </div>
      );
    }
}

export default Focus;