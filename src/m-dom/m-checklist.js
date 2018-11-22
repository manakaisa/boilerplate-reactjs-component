export default class Checklist extends React.Component {
  constructor (props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.checklist !== nextProps.checklist) {
      return true;
    }
    if (this.props.onChange !== nextProps.onChange) {
      return true;
    }
    return false;
  }
  
  handleChange (e, item) {
    this.props.onCheck(item.key, e.target.checked);
  }
  
  render () {
    // JS template literal (experimental)
    const elmLiList = this.props.checklist.map(item => {
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
    const elmLiList = this.props.checklist.map(item => {
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
    const elmLiList = this.props.checklist.map(item => {
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
