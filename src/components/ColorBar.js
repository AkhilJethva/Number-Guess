import React, {Component } from 'react';


class ColorBar extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div>
            { this.props.message ?
                <div className="colorbar container">
                    { this.props.message == 'correct' ? <div className="col-3 correct"><strong>Correct</strong></div> : null }
                    { this.props.message == 'hot' ?  <div className="col-3 hot"><strong>Hot</strong></div> : null }
                    { this.props.message == 'warm' ? <div className="col-3 warm"><strong>Warm</strong></div> : null }
                    { this.props.message == 'cold' ?<div className="col-3 cold"><strong>Cold</strong></div> : null }
                </div>
                :
                null
            }
            </div>
        );
    }
}

export default ColorBar;