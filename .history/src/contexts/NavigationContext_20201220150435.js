import React from 'react';

const Context = React.createContext();

export class NavigationStore extends React.Component {
  state = { isActive: false };

  onActiveChange = (isActive) => {
    this.setState({ isActive: !isActive });
    console.log('active' + this.state.isActive);
    document.body.classList.toggle('nav-active');
  };

  render() {
    return (
      <Context.Provider
        value={{ this.state.i, onActiveChange: this.onActiveChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
