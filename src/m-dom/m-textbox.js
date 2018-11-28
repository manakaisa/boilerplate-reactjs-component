export default class Textbox extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = { value: this.props.value };
    
    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.value !== nextProps.value) {
      return true;
    }
    if (this.props.onChange !== nextProps.onChange) {
      return true;
    }
    if (this.state.value !== nextState.value) {
      return true;
    }
    if (this.props.value !== this.state.value) {
      return true;
    }
    
    return false;
  }
  
  componentDidUpdate (prevProps, prevState) {
    if (
      (this.props.value !== prevProps.value && this.props.value !== this.state.value) ||
      (this.props.value !== this.state.value && this.state.value === prevState.value)
    ) {
      this.setState({ value: this.props.value });
    }
  }
  
  handleChange (e) {
    this.setState({ value: e.target.value });
    
    this.props.onChange(e.target.value);
  }
  
  render () {
    // JSX template literal (experimental)
    return jsx`
      <input type="text" value=${this.state.value} onChange=${this.handleChange} />
    `;
    
    /*
    // JSX
    return <input type="text" value={this.state.value} onChange={this.handleChange} />;
    */
    
    /*
    // Native JS
    return React.createElement(
      'input',
      { type: 'text', value: this.state.value, onChange: this.handleChange }
    );
    */
  }
}
