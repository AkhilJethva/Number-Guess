import React, {Component} from 'react';

class Rules extends Component{
    render(){
        return(
            <div className="rules">
                <h3>Rules for the Game</h3>
                <ol>
                    <li>If the difference is 0 you will display ‘Correct!’ - Green</li>
                    <li>If the difference is 1-4 you will display ‘Hot!!’ - Red</li>
                    <li>If the difference is 5-15 you will display ‘Warm’ - Yellow</li>
                    <li>For anything beyond, display ‘Cold’ - Blue</li>
                    <li>If you are correct it will start another game with a higher random number bracket (+100)
                        i.e. 1-200, after this number is guessed, the next game has a higher bracket,
                        1-300 and so on.
                    </li>
                </ol>
            </div>
        );
    }
}

export default Rules;