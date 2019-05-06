import React, { Component } from 'react';
import Form from '../form/Form';

class ListItem extends Component {
    constructor(props) {
        super(props);

        
    this.deleteHandle = this.deleteHandle.bind(this);
    this.editHandle = this.editHandle.bind(this);
    this.updateHandle = this.updateHandle.bind(this);    
    
    }

    


    deleteHandle(event) {
        this.props.deleteHandle(event.target.value);
      }
    
      editHandle(event) {
          
        this.props.editHandle(event.target.value);
      }

      updateHandle(){
        this.props.updateHandle();
      }

      


    render() {
        let question = this.props.question.question;
        let index = this.props.question.index;
        let editMode = this.props.state.form.editMode;
        console.log('editMode', editMode, 'question', index)
        return (
            <div>
                <li>
                    {question.statement}
                    <button value =  {question.statement} onClick = {this.deleteHandle}>Delete</button>
                    <button value =  {question.statement} onClick = {this.editHandle}>Edit</button>
                    {
                          (editMode!== undefined && index === editMode.index) ?
                          <Form state={this.props.state} stateHandle={this.props.stateHandle} updateHandle={this.updateHandle} mode = 'Update' appState = {this.props.state} />   : null

                    }
                  
                        
                    
                   

                    


                </li>
            </div>
        );
    }
}

export default ListItem;

