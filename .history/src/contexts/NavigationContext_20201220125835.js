import React from 'react';

const Context = React.createContext(false);

export class LanguageStore extends React.Component {
  state = { isActive: false };

  onActiveChange = (isActive) => {
    this.setState({ isActive });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onActiveChange: this.onActiveChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
