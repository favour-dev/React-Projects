// import React from 'react'; 
// import ReactDOM from 'react-dom';

// class ErrorCatcher extends React.Component {
//     state = {error: null}

//     componentDidCatch(error, info) {
//         console.log('[componentDidCatch]', error);
//         this.setState({error: info.componentStack });
//     }

//     render() {
//         if(this.state.error) {
//             return(
//                 <div>
//                     An error occured: {this.state.error}
//                 </div>
//             )
//         }
//         return this.props.children;
//     }
//     }

//     class LifecycleDemo extends React.Component {
//         state = {counter: 0};

//         constructor (props) {
//             super(props);
//             console.log('[constructor]');
//             console.log(' State already exist:', this.state);
//         }
//         componentDidMount() {
//             console.log('[componentDidCatch]', 'Mounted.');
//         }

//         static getDerivedStateFromProps(nextProps, prevState) {
//             console.log('[gerDerivedStateFromProps]');
//             console.log(' Next props:', nextProps);
//             console.log(' prev state:', prevState);
//             return null;
//         }

//         shouldComponentUpdate(nextProps, nextState) {
//             console.log('[shouldComponentUpdate]', 'Deciding to update');
//             return true;
//         }

//         getSnapshotBeforeUpdate(nextProps, nextState) {
//             console.log('[getSnapshotBeforeUpdate]', 'About to update...');
//             return `Time is ${Date.now()}`;
//         }

//         componentDidUpdate(prevProps, prevState, snapshot) {
//             console.log('[componentDidUpdate]', 'Updated.');
//             console.log(' snapshot:', snapshot);
//         }
//         componentWillUnmount() {
//             console.log('[componentWillUnmount]', 'Goodbye cruel world.');
//             }
//             handleClick = () => {
//             this.setState({
//             counter: this.state.counter + 1
//         });
//         };
//         causeErrorNextRender = () => {
//             // Set a flag to cause an error on the next render
//             // This will cause componentDidCatch to run in the parent
//             this.setState({
//             causeError: true
         
//             });
//         };
//         render() {
//             console.log('[render]');
//             if(this.state.causeError) {
//             throw new Error('oh no!!');
//         }
//         return (
//             <div>
//             <span>Counter: {this.state.counter}</span>
//             <button onClick={this.handleClick}>
//             Click to increment
//             </button>
//             <button onClick={this.causeErrorNextRender}>
//             Throw an error
//             </button>
//             </div>
//            );
//          }
//         }
//         ReactDOM.render(<ErrorCatcher><LifecycleDemo/></ErrorCatcher>,document.querySelector('#root'));
    

// STEP TRACKER

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// function StepTracker () {
//   const [steps, setSteps] = useState(0);

//   function increment() {
//     setSteps(steps => steps + 1);
//   }

//   return (
//     <div>
//       Today you've taken {steps} steps!
//       <br/>
//       <button onClick = {increment}>I took another step</button>
//     </div>
//   );
// }
// ReactDOM.render(<StepTracker />, document.querySelector('#root')
// );



// STATE IN AN ARRARY
//  

//STATE IN OBJECT
// const MultiCounter = () => {
//   const [counts, setCounts] = useState({
//     countA: 0,
//     countB: 0
//   });
//   const incA = () => (
//     setCounts(counts => ({
//        ...counts,
//       countA: counts.countA + 1
//     }))
//   );
//   const incB = () => (
//     setCounts(counts => ({
//      ...counts,
//        countB: counts.countB + 1
//     }))
//   );
//   const badIncA = () => (
//     setCounts({
//     countA: counts.countA + 1
//     })
//   );


//   return (
//     <>
//       <div>
//         A: {counts.countA}
//       </div>
//       <div>
//         B: {counts.countB}
//       </div>
//       <button onClick={incA}>
//         Increment A
//       </button>
//       <button onClick={incB}>
//         Increment B
//       </button>
//       <button onClick={badIncA}>
//         Increment A Badly
//       </button>
//     </>
//     );
//     }
//     ReactDOM.render(<MultiCounter />,document.querySelector('#root'));


    // const Room = () => {

    //   const [ notLit] = useState(false);

    //   const lightSwitch = () => {
    //     // notLit(false);
    //     if(notLit){
    //       console.log('not lit')
    //     //  <div>The room is not lit</div> 
    //     }else {
    //       console.log('lit')
    //       // <div>The room is lit</div>
    //     }
    //   };
    
    //   return (
  
    //     <button onClick={lightSwitch}>
    //       Click me!
    //    </button>
    //   )
    // }
    // ReactDOM.render(<Room />,document.querySelector('#root'));

    // const RandomList = () => {

    //   const [items ,setNumb] = useState([]);
      
    //   const addItem = () => {
    //     setNumb([
    //       ...items,
    //       {
    //         id:items.length,
    //         value: Math.random() * 100
    //       }
    //     ]);
    //   };
    //   return (
    //     <>
    //       <button onClick={addItem}>Add</button>
    //       <ol>
    //         {items.map(item => (
    //           <li key ={item.id}>{item.value}</li>
    //         ))}
    //       </ol>
    //     </>
    //   )
    // }
    // ReactDOM.render(<RandomList />,document.querySelector('#root'));


    const AudioControls = ()  => {
       const [count, setCount] = useState({
         volume:0,
         bass:0,
         mid:0,
         treble:0
       });

       const volIncrease = () =>(
         setCount(count => ({
           ...count,
           volume: count.volume + 1 
         })
        )
       )
      const volumeDecrease = () =>(
        setCount(count => ({
          ...count,
          volume:count.volume - 1
        })
        )
      )

      const bassincrease = () =>(
        setCount(count => ({
          ...count,
          bass: count.bass + 1 
        })
       )
      )
     const bassdecrease = () =>(
       setCount(count => ({
         ...count,
         bass:count.bass - 1
       })
       )
     )

     const midincrease = () =>(
      setCount(count => ({
        ...count,
        mid: count.mid + 1 
      })
     )
    )
   const middecrease = () =>(
     setCount(count => ({
       ...count,
       mid:count.mid - 1
     })
     )
   )

   const trebleincrease = () =>(
    setCount(count => ({
      ...count,
      treble: count.treble + 1 
    })
   )
  )
 const trebledecrease = () =>(
   setCount(count => ({
     ...count,
     treble:count.treble - 1
   })
   )
 )
     

      return(
        <>

          <button onClick={volumeDecrease}>-</button> 
          <div>  
             Volume {count.volume}
          </div>
          <button onClick={volIncrease}>+</button>
          <br/>
          <br/>
          <button onClick={bassdecrease}>-</button> 
          <div>
         Bass {count.bass}
          </div>
          <button onClick={bassincrease}>+</button>
          <br/>
          <br/>
          <button onClick={middecrease}>-</button> 
          <div>
           Mid {count.mid}
          </div>
          <button onClick={midincrease}>+</button>
          <br/>
          <br/>
          <button onClick={trebledecrease}>-</button> 
          <div>
           Treble {count.treble}
          </div>
          <button onClick={trebleincrease}>+</button>
    
        </>
      )
    }
    ReactDOM.render(<AudioControls />,document.querySelector('#root'));