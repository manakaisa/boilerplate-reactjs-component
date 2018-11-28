export default class Textbox extends React.Component {
  constructor (props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.value !== nextProps.value) {
      return true;
    }
    if (this.props.onChange !== nextProps.onChange) {
      return true;
    }
    return false;
  }
  
  handleChange (e) {
    this.props.onChange(e.target.value);
  }
  
  render () {
    // JSX template literal (experimental)
    return jsx`
      <input type="text" value=${this.props.value} onChange=${this.handleChange} />
    `;
    
    /*
    // JSX
    return <input type="text" value={this.props.value} onChange={this.handleChange} />;
    */
    
    /*
    // Native JS
    return React.createElement(
      'input',
      { type: 'text', value: this.props.value, onChange: this.handleChange }
    );
    */
  }
}
