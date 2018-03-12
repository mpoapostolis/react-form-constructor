import React, {Component} from 'react';
import TextField from '../TextField';
import Button from 'material-ui/Button';
import * as styles from './css';

class FormConstructor extends Component {
  constructor(props) {
    super(props);
    const state = {};
    this.state = state;
  }

  render() {
    const {container, step, item, loginBody, row, btnCont, stepper} = styles;
    const {schema, saveItem} = this.props;
    return (
      <div className={container}>
        <div className={`${loginBody}`}>
          <div className={stepper}>
            <div className={`${step} active`}>1</div>
            <div className={step}>1</div>
            <div className={step}>1</div>
            <div className={step}>1</div>
          </div>
          {schema.map((r, i) => (
            <div key={i} className={row}>
              {r.map((obj, key) => (
                <div className={item} key={key}>
                  <TextField {...obj} saveItem={saveItem} />
                </div>
              ))}
            </div>
          ))}
          <div className={btnCont}>
            <Button variant="raised" color="primary">
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default FormConstructor;
