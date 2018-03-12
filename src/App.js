import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FormConstructor from './components/FormConstructor';
import {schema} from './schemas';

class App extends Component {
  state = {
    formData: {},
  };
  saveItem = obj => this.setState({formData: obj});

  render() {
    console.log(this.state.formData);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <FormConstructor schema={schema} saveItem={this.saveItem} />
      </div>
    );
  }
}

export default App;
