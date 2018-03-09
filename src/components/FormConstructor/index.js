import React, {Component} from 'react';
import TextField from '../TextField';
import * as styles from './css';

class FormConstructor extends Component {
  constructor(props) {
    super(props);
    const state = {};
    this.state = state;
  }

  render() {
    const {container, item, loginBody, row} = styles;
    const {schema, saveItem} = this.props;
    return (
      <div className={container}>
        <div className={`${loginBody}`}>
          {schema.map((r, i) => (
            <div key={i} className={row}>
              {r.map((obj, key) => (
                <div className={item} key={key}>
                  <TextField {...obj} saveItem={saveItem} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FormConstructor;
