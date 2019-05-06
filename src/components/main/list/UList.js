import React, { Component } from 'react';
import ListItem from './ListItem';

class UList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { questions } = this.props.state.questionsBook;

        return (
            <div>
                <ul>
                    {
                        questions.map((question, index) => (
                            
                            <ListItem state = {this.props.state} question={{ question: question, index: index }} editHandle={this.props.editHandle} deleteHandle={this.props.deleteHandle} stateHandle = {this.props.stateHandle} updateHandle = {this.props.updateHandle}/>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default UList;

