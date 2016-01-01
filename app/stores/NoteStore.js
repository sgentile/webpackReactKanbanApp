//Defining a Store for Notes

import uuid from 'node-uuid';
import assign from 'object-assign';
import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';

class NoteStore {
    constructor() {
        /*
        We call bindActions to map each action to a method by name. 
        We trigger the appropriate logic at each method based on that. 
        Finally, we connect the store with Alt using alt.createStore.
        */
        this.bindActions(NoteActions);
        
        this.notes = [];
    }
    
    //skeleton
    create(note) {
        
    }
    
    update(updatedNote) {
        
    }
    
    delete(id) {
        
    }
}

//creates a label for the store
export default alt.createStore(NoteStore, 'NoteStore');