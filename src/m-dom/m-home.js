export default class Home extends React.Component {
  constructor (props) {
    super(props);
    
    this.title = 'Home';
    this.scopes = { '$ctrl': this };
  }
  
  render () {
    // JSX template literal (experimental)
    return jsx`
      <mDOM.Include href="home.html" scopes=${this.scopes} />
    `;
  }
}
