import React from 'react';
import TextArea from './TextArea';
import List from './List';
import Button from './Button';



class Form extends React.Component {
    constructor(props) {
        super(props);
        //props.parentState.val = 'enter text';


    }

    render() {
        return (
            <div>


                <TextArea state={this.props.state} formHandle={this.props.stateHandle} type='statement' />
                <List
                    stateHandle={this.props.stateHandle}
                    listType='category'
                    state={this.props.state}
                />
                <List
                    stateHandle={this.props.stateHandle}
                    listType='type'
                    state={this.props.state}
                />

                <List
                    stateHandle={this.props.stateHandle}
                    listType='complexityLevel'
                    state={this.props.state}
                />

                <List
                    stateHandle={this.props.stateHandle}
                    listType='marks'
                    state={this.props.state}
                />

                <TextArea state={this.props.state} formHandle={this.props.stateHandle} type='answer' />
                <Button text={this.props.mode} saveHandle={this.props.saveHandle} updateHandle = {this.props.updateHandle} state = {this.props.state}/>
            </div>
        );
    }
}


export default Form;