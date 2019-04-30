import React, { Component } from 'react';
import questionsBook from './data/questionsBook';
import Form from './components/main/form/Form';


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
        answer: ''
      },

      questionsBook: questionsBook
    }

    this.stateHandler = this.stateHandler.bind(this);
    this.saveHandler = this.saveHandler.bind(this);

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




  render() {
    console.log(this.state);
    return (<div className="App">

      hello qb-v1
      <Form state={this.state} stateHandle={this.stateHandler} saveHandle={this.saveHandler} />

    </div>);
  }
}

export default App;
