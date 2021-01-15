import React from 'react'; 

interface AppContextInterface {
  isActive: boolean,
  onActiveChange: 
}

const Context = React.createContext<AppContextInterface | null>(null);

export class NavigationStore extends React.Component {
  state = { isActive: false };

  onActiveChange = () => {
    this.setState({ isActive: !this.state.isActive });
    console.log('active' + this.state.isActive);
    document.body.classList.toggle('nav-active');
  };

  render() {
    return (
      <Context.Provider
        value={{
          isActive: this.state.isActive,
          onActiveChange: this.onActiveChange
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
