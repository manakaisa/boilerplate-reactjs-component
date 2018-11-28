export default class Checklist extends React.Component {
  constructor (props) {
    super(props);
    
    this.checkedlist = {};
    this.props.checklist.forEach(item => {
      this.checkedlist[item.key] = item.checked;
    });
    
    this.state = { updatedDate: Date.now() };
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.checklist !== nextProps.checklist) {
      return true;
    }
    if (this.props.onChange !== nextProps.onChange) {
      return true;
    }
    if (this.state.updatedDate !== nextState.updatedDate) {
      return true;
    }
    return false;
  }
  
  componentDidUpdate (prevProps, prevState) {
    if (this.props.checklist !== prevProps.checklist) {
      this.props.checklist.forEach(item => {
        this.checkedlist[item.key] = item.checked;
      });
      this.setState({ updatedDate: Date.now() });
    }
  }
  
  handleChange (e, item) {
    this.checkedlist[item.key] = e.target.checked;
    this.setState({ updatedDate: Date.now() });
    
    this.props.onCheck(item.key, e.target.checked);
  }
  
  render () {
    // JSX template literal (experimental)
    const elmLiList = this.props.checklist.map(item => {
      return jsx`
        <li key=${item.key}>
          <input type="checkbox" value=${item.key} checked=${(this.checkedlist[item.key] || false)} onChange=${(e) => this.handleChange(e, item)} />
          ${item.label}
        </li>
      `;
    });
    return jsx`
      <ul>
        ${elmLiList}
      </ul>
    `;
    
    /*
    // JSX
    const elmLiList = this.props.checklist.map(item => {
      return (
        <li key={item.key}>
          <input type="checkbox" value={item.key} checked={(this.checkedlist[item.key] || false)} onChange={(e) => this.handleChange(e, item)} />
          {item.label}
        </li>
      );
    });
    return (
      <ul>
        {elmLiList}
      </ul>
    );
    */
    
    /*
    // Native JS
    const elmLiList = this.props.checklist.map(item => {
      return React.createElement(
        'li',
        { key: item.key },
        React.createElement('input', { type: 'checkbox', value: item.key, checked: (this.checkedlist[item.key] || false), onChange: (e) => this.handleChange(e, item) }),
        item.label
      );
    });
    return React.createElement('ul', null, elmLiList);
    */
  }
}
