import React, {Component} from 'react';
import Switch from 'material-ui/Switch';

export default class componentName extends Component {
  render() {
    return (
      <div className={block} key={key}>
        <div className={title}>
          {name.replace(/_PERMS/g, ' Permissions').replace(/_/g, ' ')}
        </div>
        {Permissions[name].map((permission, inKey) => (
          <div className={toggleCont} key={inKey}>
            <div className={toggle}>
              <Switch
                name={permission}
                color="primary"
                checked={this.state[permission]}
                onChange={this.handleChange}
                value={permission}
              />
              <p>{permissionDescription[permission].name.replace(/_/g, ' ')}</p>
            </div>
            <span className={description}>
              {permissionDescription[permission].description}
            </span>
          </div>
        ))}
      </div>
    );
  }
}
