import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

/*
* notes:
* {} below allows mixing JS syntax within JSX.  map returns a list of li elements for React to render
* key={note.id} provides React with correct order to render
* */

export default class App extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learn Webpack'
                },
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do laundry'
                }
            ]
        };
	}
	render() {
		const notes = this.state.notes;
		return (
            <div>
                <button className="add-note" onClick={this.addNote}>+</button>
			    <Notes notes={notes} />
            </div>
		);
	}
    
    addNote = () => {
        this.setState({
           // this could make an async call to fetch a new id, etc... 
           notes: this.state.notes.concat([{
               id: uuid.v4(),
               task: 'New Task'
           }]) 
        });
        
        /*
        You could use [...this.state.notes, {id: uuid.v4(), task: 'New task'}] to achieve the same result. 
        This spread operator can be used with function parameters as well.
        */
    }
}
