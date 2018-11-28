export default class Todo extends React.Component {
  constructor (props) {
    super(props);
    
    this.maxID = 2;
    
    this.state = {
      checklist: [
        { key: 1, label: 'foo', checked: true },
        { key: 2, label: 'bar', checked: false }
      ],
      todoText: ''
    };
    
    this.handleCheck = this.handleCheck.bind(this);
    this.handleTodoText = this.handleTodoText.bind(this);
    this.handlePush = this.handlePush.bind(this);
    this.handlePop = this.handlePop.bind(this);
  }
  
  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.checklist !== nextState.checklist) {
      return true;
    }
    if (this.state.todoText !== nextState.todoText) {
      return true;
    }
    return false;
  }
  
  handleCheck (key, checked) {
    this.state.checklist.find(item => item.key === key).checked = checked;
  }
  
  handleTodoText (value) {
    this.state.todoText = value;
  }
  
  handlePush () {
    this.maxID += 1;
    this.setState({
      checklist: this.state.checklist.concat([{ key: this.maxID, label: this.state.todoText, checked: false }]),
      todoText: ''
    });
  }
  
  handlePop () {
    this.setState({
      checklist: this.state.checklist.filter(item => !item.checked)
    });
  }
  
  render () {
    // JSX template literal (experimental)
    return jsx`
      <m-todo>
        <mDOM.Checklist checklist=${this.state.checklist} onCheck=${this.handleCheck} />
        <mDOM.Textbox value=${this.state.todoText} onChange=${this.handleTodoText} />
        <mDOM.Button onClick=${this.handlePush}>add</mDOM.Button>
        <mDOM.Button onClick=${this.handlePop}>del</mDOM.Button>
      </m-todo>
    `;
    
    /*
    // JSX
    return (
      <React.Fragment>
        <mDOM.Checklist checklist={this.state.checklist} onCheck={this.handleCheck} />
        <mDOM.Textbox value={this.state.todoText} onChange={this.handleTodoText} />
        <mDOM.Button onClick={this.handlePush}>add</mDOM.Button>
        <mDOM.Button onClick={this.handlePop}>del</mDOM.Button>
      </React.Fragment>
    );
    */
    
    /*
    // Native JS
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(mDOM.Checklist, { checklist: this.state.checklist, onCheck: this.handleCheck }),
      React.createElement(mDOM.Textbox, { value: this.state.todoText, onChange: this.handleTodoText }),
      React.createElement(mDOM.Button, { onClick: this.handlePush }, 'add'),
      React.createElement(mDOM.Button, { onClick: this.handlePop }, 'del')
    );
    */
  }
}
