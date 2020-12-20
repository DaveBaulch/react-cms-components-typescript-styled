import React from 'react';

const Context = React.createContext();

export class NavigationStore extends React.Component {
  state = { isActive: false };

  onActiveChange = (isActive) => {
    this.setState({ isActive: !isActive });
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
