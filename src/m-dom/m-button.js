export default class Button extends React.Component {
  constructor (props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.onClick !== nextProps.onClick) {
      return true;
    }
    return false;
  }
  
  handleClick (e) {
    this.props.onClick();
  }
  
  render () {
    // JSX template literal (experimental)
    return jsx`
      <button onClick=${this.handleClick}>${this.props.children}</button>
    `;
    
    /*
    // JSX
    return <button onClick={this.handleClick}>{this.props.children}</button>;
    */
    
    /*
    // Native JS
    return React.createElement(
      'button',
      { onClick: this.handleClick },
      this.props.children
    );
    */
  }
}
