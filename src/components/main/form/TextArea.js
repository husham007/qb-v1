import React, {Component} from 'react';



class TextArea extends Component{
    constructor(props){
        super(props);
        //props.parentState.val = 'enter text';
    
    this.handleChange = this.handleChange.bind(this);
    
    }
    
    handleChange(event) {
       // console.log(this.props.parentState.val);
       let obj = {};
       obj[this.props.type] = event.target.value;
        this.props.formHandle(obj);
       // this.props.parentState.setState({val: event.target.value});
      }
        render(){
            return (
                <div className = {this.props.type}>
                    <textarea onChange= {this.handleChange} value = {this.props.state.form[this.props.type]}></textarea>
                </div>
            );
        }
    }
    
    
    export default TextArea;