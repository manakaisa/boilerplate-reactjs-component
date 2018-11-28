// "Include" component (experimental)
export default class Include extends React.Component {
  constructor (props) {
    super(props);
    
    this.html = '';
    
    this.state = { updatedDate: Date.now() };
  }
  
  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.href !== nextProps.href) {
      return true;
    }
    if (this.props.scopes !== nextProps.scopes) {
      return true;
    }
    if (this.state.updatedDate !== nextState.updatedDate) {
      return true;
    }
    return false;
  }
  
  render () {
    // HTML to React (experimental)
    return jsx._tranformHTML('<React.Fragment>' + this.html + '</React.Fragment>', this.props.scopes);
  }
  
  componentDidMount () {
    fetch(this.props.href)
      .then((res) => res.text())
      .then((html) => {
        this.html = html;
        this.setState({ updatedDate: Date.now() });
      });
  }
  
  componentDidUpdate (prevProps, prevState) {
    if (this.props.href !== prevProps.href) {
      fetch(this.props.href)
        .then((res) => res.text())
        .then((html) => {
          this.html = html;
          this.setState({ updatedDate: Date.now() });
        });
    }
  }
}
