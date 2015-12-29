import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

const notes = [
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
];

/*
* notes:
* {} below allows mixing JS syntax within JSX.  map returns a list of li elements for React to render
* key={note.id} provides React with correct order to render
* */

export default class App extends React.Component {
	render() {
		return (
			<Notes notes={notes} />
		);
	}
}
