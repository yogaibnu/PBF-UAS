import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import List from '@material-ui/core/List'
import { Divider, Button } from '@material-ui/core'
import SidebarItemComponent from '../sidebaritem/sidebaritem'

class SiderbarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null
        };
    }
    render() {

        const { notes, classes, selectedNoteIndex } = this.props;

        return (
            <div className={classes.sidebarContainer}>
                <Button
                    onClick={this.newNoteBtnClick}
                    className={classes.newNoteBtn}
                >New Note</Button>
            </div>
        );
    }

    newNoteBtnClick = () => {
        console.log('NEW BTN CLIKCED');
    }
}

export default withStyles(styles)(SiderbarComponent);