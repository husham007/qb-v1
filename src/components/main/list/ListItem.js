import React, { Component } from 'react';
import Form from '../form/Form';

class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statement: '',
            marks: '1',
            type: 'short',
            category: 'general',
            complexityLevel: 'easy',
            answer: '',
            id: ''
          }
          
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    
    }

    saveHandler (){
        console.log(this.state);
    }


    handleDelete(event) {
        this.props.deleteHandle(event.target.value);
      }
    
      handleEdit(event) {
          
        this.props.editHandle(event.target.value);
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
                    <button value =  {question.statement} onClick = {this.handleDelete}>Delete</button>
                    <button value =  {question.statement} onClick = {this.handleEdit}>Edit</button>
                    {
                          (editMode!== undefined && index === editMode.index) ?
                          <Form state={this.state} stateHandle={this.stateHandler} saveHandle={this.saveHandler} appState = {this.props.state} />   : null

                    }
                  
                        
                    
                   

                    


                </li>
            </div>
        );
    }
}

export default ListItem;

