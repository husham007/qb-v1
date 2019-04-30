import React from 'react';



class Save extends React.Component{
constructor(props){
    super(props);
    //props.parentState.val = 'enter text';

this.handleButton = this.handleButton.bind(this);

}

handleButton(event) {
   // console.log(this.props.parentState.val);
    this.props.saveHandle();
   // this.props.parentState.setState({val: event.target.value});
  }
    render(){
        return (
            <div className = 'save'>
                <button onClick= {this.handleButton}>{this.props.text}</button>
            </div>
        );
    }
}


export default Save;