import React, {Component} from 'react';
import ListItem from './ListItem';

class UList extends Component {
    constructor(props){
        super(props);
    }

    render (){
        let {questions} = this.props.state.questionsBook;
     
        return (
            <div>
                <ul>
                    {
                        questions.map((question, index)=>(
                            <ListItem question = {{question, index}} />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default UList;

