import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
    constructor(props) {
        super(props);
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
    }

    handleRemove(id) {
        const response = window.confirm('Are you sure?');
        if(response){
            this.props.removeNote(id);
        }
        return;
    }

    render() {
        return <div className="Note">
            <div className="textContainer">
                <p> {this.noteContent}</p>
            </div>
            <div className="spanButton">
                <span onClick={() => this.handleRemove(this.noteId)}>X</span>
            </div>
        </div>
    }
}

export default Note;
