export default class Home extends React.Component {
  constructor (props) {
    super(props);
    
    this.title = 'Home';
    
    this.state = { scopes: { '$ctrl': this } };
  }
  
  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.scopes !== nextState.scopes) {
      return true;
    }
    return false;
  }
  
  render () {
    // JSX template literal (experimental)
    return jsx`
      <mDOM.Include href="home.html" scopes=${this.state.scopes} />
    `;
  }
}
