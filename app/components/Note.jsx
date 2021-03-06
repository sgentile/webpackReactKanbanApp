import React from 'react';

//export default ({task}) => <div>{task}</div>

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            editing: false
        };
    }
    render() {
        if(this.state.editing) {
            return this.renderEdit();
        }
        return this.renderNote();
    }
    renderEdit = () => {
        return <input type="text"
            autoFocus={true}
            defaultValue={this.props.task}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter} />;         
    }
    
    renderNote = () => {
        const onDelete = this.props.onDelete;
        
        return (
            <div onClick={this.edit}>
                <span className="task">{this.props.task}</span>
                {onDelete ? this.renderDelete() : null }
            </div>
        );
    }
    
    renderDelete = () => {
        return <button className="delete" onClick={this.props.onDelete}>x</button>;
    }
    
    edit = () => {
        this.setState({
            editing: true
        });
    }
    
    checkEnter = (e) => {
        if(e.key === 'Enter') {
            this.finishEdit(e);
        }
    }
    
    finishEdit = (e) => {
        //a smarter way to deal with this would be to set 'defaultProps'.
        //see *Typing with React* chapter for more information.
        if(this.props.onEdit) {
            this.props.onEdit(e.target.value);
        }
        
        this.setState({
            editing: false
        });
    }
}
