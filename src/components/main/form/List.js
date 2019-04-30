import React from "react";


class List extends React.Component {
  constructor(props) {
    super(props);
    //props.parentState.val = 'enter text';


    this.handleList = this.handleList.bind(this);
  }

  handleList(event) {
    // console.log(this.props.parentState.val);
    let obj = {};
   obj[this.props.listType] = event.target.value;
    this.props.stateHandle(obj);
    // this.props.parentState.setState({val: event.target.value});
  }
  render() {
    let  types  = this.props.state.questionsBook[this.props.listType];
    console.log(this.props.listType);
    return (
      <div className="save">
        <h3>{this.props.type}</h3>
        <select onChange = {this.handleList} value = {this.props.state.form[this.props.listType]}>
          {types.map(type => (
            <option key={type} value={type}>
              {type} 
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default List;
