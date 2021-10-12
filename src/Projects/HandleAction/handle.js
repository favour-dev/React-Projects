import React from 'react';
import ReactDOM from 'react-dom';

// function handleAction(event) {
//   console.log('Child did:', event)
// }

// function Parent(){
//   return (
//     <Child onAction={handleAction}/>
//   );
// }

function Child({onAction}){
  return(
    <button onClick={onAction}>
      Click me!
    </button>
  )
}
//#oc0200

// adding states to components using the class method
class CountingParent extends React.Component {
  // The constructor is called when a component is created
  constructor(props) {
    super(props);

    //sets the state here. Use "props" if needed.
    this.state = {
      actionCount:0
    };

    //Bind the event handler function, so that its 'this' binding is not lost when it gets passed to the button event
    this.handleAction = this.handleAction.bind(this);
  }

  handleAction(action) {
    console.log('Child says', action);
    //replaces actionCount with an incremented value
    this.setState({
      actionCount: this.state.actionCount + 1
  });
  }
  render() {
    return (
      <div>
        <Child onAction={this.handleAction}/>
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}

ReactDOM.render(<CountingParent/>, document.getElementById('root'))