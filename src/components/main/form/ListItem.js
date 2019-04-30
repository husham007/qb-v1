import React, { Component } from 'react';
import Button from './Button';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let question = this.props.question.question;
        return (
            <div>
                <li>
                    {question.statement}
                    <button >Delete</button>
                    <button>Edit</button>


                </li>
            </div>
        );
    }
}

export default ListItem;

