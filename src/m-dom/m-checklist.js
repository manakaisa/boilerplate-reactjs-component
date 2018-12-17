export default class Checklist extends React.Component {
  constructor (props) {
    super(props);
    
    this.checklistState = JSON.parse(JSON.stringify(this.props.checklist));
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
      this.checklistState = JSON.parse(JSON.stringify(this.props.checklist));
      this.setState({ updatedDate: Date.now() });
    }
  }
  
  handleChange (e, changedItem) {
    this.checklistState.find(item => item.key === changedItem.key).checked = e.target.checked;
    this.setState({ updatedDate: Date.now() });
    
    this.props.onCheck(changedItem.key, e.target.checked);
  }
  
  render () {
    // JSX template literal (experimental)
    const elmLiList = this.checklistState.map(item => {
      return jsx`
        <li key=${item.key}>
          <input type="checkbox" value=${item.key} checked=${item.checked} onChange=${(e) => this.handleChange(e, item)} />
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
    const elmLiList = this.checklistState.map(item => {
      return (
        <li key={item.key}>
          <input type="checkbox" value={item.key} checked={item.checked} onChange={(e) => this.handleChange(e, item)} />
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
    const elmLiList = this.checklistState.map(item => {
      return React.createElement(
        'li',
        { key: item.key },
        React.createElement('input', { type: 'checkbox', value: item.key, checked: item.checked, onChange: (e) => this.handleChange(e, item) }),
        item.label
      );
    });
    return React.createElement('ul', null, elmLiList);
    */
  }
}
