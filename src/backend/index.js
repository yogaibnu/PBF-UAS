import React from 'react'
import Item from './item'

const firebase = require('firebase');

class Back extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedNoteIndex: null,
            selectedNote: null,
            notes: null
        }
    }


    render() {

        return (
            <div className="app-container">
                <Item
                    selectedNoteIndex={this.state.selectedNoteIndex}
                    notes={this.state.notes}
                    deleteNote={this.deleteNote}
                    selectNote={this.selectNote}
                    newNote={this.newNote}
                ></Item>
            </div>
        )
    }

    componentDidMount = () => {
        firebase
            .firestore()
            .collection('notes')
            .onSnapshot(serverUpdate => {
                const notes = serverUpdate.docs.map(_doc => {
                    const data = _doc.data();
                    data['id'] = _doc.id;
                    return data;
                });
                console.log(notes);
                this.setState({ notes: notes });
            });
    }
}

export default Back
