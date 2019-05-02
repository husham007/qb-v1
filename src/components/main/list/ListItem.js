import React, { Component } from 'react';
import Form from '../form/Form';

class ListItem extends Component {
    constructor(props) {
        super(props);

        
    this.deleteHandle = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    
    
    }

    


    deleteHandle(event) {
        this.props.deleteHandle(event.target.value);
      }
    
      editHandle(event) {
          
        this.props.editHandle(event.target.value);
      }

      updateHandle(event){
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
                    <button value =  {question.statement} onClick = {this.handleDelete}>Delete</button>
                    <button value =  {question.statement} onClick = {this.handleEdit}>Edit</button>
                    {
                          (editMode!== undefined && index === editMode.index) ?
                          <Form state={this.props.state} stateHandle={this.props.stateHandle} saveHandle={this.props.saveHandle(index)} mode = 'Update' appState = {this.props.state} />   : null

                    }
                  
                        
                    
                   

                    


                </li>
            </div>
        );
    }
}

export default ListItem;

