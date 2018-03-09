import React, {Component} from 'react';
import * as styles from './css';

class TextField extends Component {
  state = {
    errorClass: '',
    value: '',
  };

  componentDidMount() {
    this.setState({value: this.props.defaultValue || ''});
  }

  isValid = ({currentTarget}) => {
    const {saveItem, type, validator, field, list, id} = this.props;
    let isValid;
    if (id || type === 'file' || type === 'date') return;
    const value = currentTarget.value;
    const options = list || [];
    switch (validator) {
      case 'email':
        const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        isValid = Boolean(value.match(pattern));
        break;

      case 'no-empty':
        isValid = value.length > 0;
        break;

      case 'select':
        isValid = Boolean(options.find(e => e === value));
        break;
      default:
        isValid = true;
        break;
    }
    if (!isValid) this.setState({errorClass: 'error'});
    else {
      this.setState({errorClass: ''});
      saveItem({[field]: value});
    }
  };

  handleChange = ({currentTarget}) => {
    const {saveItem, field} = this.props;
    this.setState({value: currentTarget.value});
  };

  render() {
    const {errmsg, type, list, label, id} = this.props;
    const {inputCont, input} = styles;
    const {errorClass, value} = this.state;
    const labelExtraClass = value ? 'notEmpty' : '';
    return (
      <div className={inputCont}>
        <label className={`inputLabel ${labelExtraClass} ${errorClass}`}>
          {errorClass ? errmsg : label}
        </label>
        {type === 'textarea' ? (
          <textarea
            className={`${input} textArea ${errorClass}`}
            onChange={this.handleChange}
            onBlur={this.isValid}
          />
        ) : (
          <input
            value={value}
            className={`${input} ${errorClass}`}
            onChange={this.handleChange}
            onKeyDown={this.props.pressEnter}
            onBlur={this.isValid}
            type={type}
            list={list}
            id={id}
          />
        )}
        {list && (
          <datalist id={list}>
            {list.map((opt, key) => <option key={key} value={opt} />)}
          </datalist>
        )}
      </div>
    );
  }
}

export default TextField;
