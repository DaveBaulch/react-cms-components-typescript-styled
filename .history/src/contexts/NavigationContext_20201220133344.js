import React from 'react';

const Context = React.createContext();

export class NavigationStore extends React.Component {
  state = { isActive: false };

  

  onActiveChange = (isActive) => {
    this.setState({ isActive: !isActive });
    console.log('active' + this.state.isActive);
  };

  render() {
    return (
      console.log(this.state.isActive);
      <Context.Provider
        value={{ ...this.state, onActiveChange: this.onActiveChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
