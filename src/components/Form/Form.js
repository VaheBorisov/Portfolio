import React, { Component } from 'react';

import './Form.css'

export default class Form extends Component {
    
    render() {

        return(
            <form >
                <div className='inputs input-name'>
                    <label className="input-labels">
                        Your Name :
                        <input type="text" id="name" placeholder="Enter Your Name" required/>
                    </label>
                </div>

                <div className='inputs input-name'>
                    <label className="input-labels">
                        Your Email :
                        <input type="email" id="name" placeholder="Enter Your Email" required/>
                    </label>
                </div>
                <div className='inputs input-name'>
                    <label className="textarea-labels">
                        Your Message :
                        <textarea cols="40" placeholder="Your Message..." required></textarea>
                    </label>
                </div>

                <button type="submit" value="Submit" className='send-message'>Submit</button>
            </form>
        )
    }
}