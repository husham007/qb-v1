import React, { Component } from 'react';
import questionsBook from './data/questionsBook';
import Form from './components/main/form/Form';
import UList from './components/main/list/UList';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {
        statement: '',
        marks: '1',
        type: 'short',
        category: 'general',
        complexityLevel: 'easy',
        answer: '',
        id: ''
      },

      questionsBook: questionsBook
    }

    this.stateHandler = this.stateHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);

  }

  stateHandler(obj) {
    //obj[Object.keys(obj)[0]]

    let form = this.state.form;
    console.log(obj[0]);
    form[Object.keys(obj)[0]] = obj[Object.keys(obj)[0]];

    this.setState({
      form: form
    });
  }

  saveHandler() {
    let qB = this.state.questionsBook;
    qB.questions.push({
      statement: this.state.form.statement,
      type: this.state.form.type,
      category: this.state.form.category,
      complexityLevel: this.state.form.complexityLevel,
      marks: this.state.form.marks
    });


    this.setState({
      form: {
        statement: '',
        type: "short",
        category: "general",
        marks: '1',
        complexityLevel: 'easy'
      },
      questionsBook: qB

    });

  }

  updateHandler(state){
    
  }


  deleteHandler(statement) {
    /* let index = questions.questions.findIndex(question => {
       return question.statement === statement;
     });
 
     ///console.log(index);
 
     questions.questions.splice(index, 1);
     console.log(questions.questions);
 
     this.setState({
       question: questions.questions
     });*/

    let questions = this.state.questionsBook.questions;
    let filteredQuestions = questions.filter(question =>
      question.statement !== statement
    );

    let newState = this.state;
    newState.form = {
      statement: '',
      type: "short",
      category: "general",
      marks: '1',
      complexityLevel: 'easy',
      answer: ''
    }
    newState.questionsBook.questions = filteredQuestions;
    this.setState(newState);

  }

  editHandler(statement) {
    /* let index = questions.questions.findIndex(question => {
       return question.statement === statement;
     });
 
     this.setState({
       statement: questions.questions[index].statement,
       type: questions.questions[index].type,
       category: questions.questions[index].category,
       editMode: index
     });*/

    let index = this.state.questionsBook.questions.findIndex(question => {
      return question.statement === statement;
    });

    let question = this.state.questionsBook.questions[index];

    let form = this.state.form;
    form.category = question.category;
    form.type = question.type;
    form.statement = question.statement;
    form.answer = question.answer;
    form.marks = question.marks;
    form.complexityLevel = question.complexityLevel;
    form.id = question.id;
    form.editMode = { index, value: true };
    this.setState({ form: form });
  }

  render() {

    return (
      <div className="App">

        hello qb-v1
      <UList state={this.state} stateHandle={this.stateHandler} saveHandle={this.saveHandler} deleteHandle={this.deleteHandler} editHandle={this.editHandler} />


        <Form state={this.state} stateHandle={this.stateHandler} saveHandle={this.saveHandler} />

      </div>);
  }
}

export default App;
