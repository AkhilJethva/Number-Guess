import React, {Component} from 'react';
import './App.css';
import ColorBar from './components/ColorBar';
import Rules from './components/Rules';

class App extends Component{

   
    constructor(props){
        super(props);
        
      
        this.state = {
            iqnumber: '',
            message: '',
            levelClearence: false,
            randomNumber: parseInt(Math.abs(Math.random()*100))
        }

        if(this.state.message == "correct")
        {
           
        }
   

    }

   

    onSubmit = async(event) => {
        event.preventDefault();
        let x = 1;
        const {iqnumber,randomNumber} = this.state;

        const diffrence = Math.abs(randomNumber - iqnumber);
        if(diffrence == 0){
            this.setState({message: 'correct'});
            x = x + 1; 
            const randomNumber = parseInt(Math.abs(Math.random()*100*x));
            this.setState({randomNumber});

        }
        else if( 1 <= diffrence && diffrence <= 4)
        {
            this.setState({message: 'hot'});
        }
        else if( 5 <= diffrence && diffrence <= 15)
        {
            this.setState({message: 'warm'});
        }
        else{
            this.setState({message: 'cold'});
        }
    }


    render(){

        
        return(
            <div className="app">
                <h3>Number Guessing Game</h3>
                <div className="submit_form">
                    <form onSubmit={this.onSubmit}>
                        <h2>Enter your number ::</h2>
                        <input 
                            type="number"
                            value={this.state.iqnumber}
                            placeholder="Enter A valid number"
                            onChange={event => {this.setState({ iqnumber: event.target.value});}} 
                        ></input>{"  "}
                        <button value="Submit">Submit</button>
                    </form>
                </div>
                
                <h1>{this.state.message}</h1>

                <ColorBar message={this.state.message}/>
                <Rules />
            </div>
        );
    }
}

export default App;