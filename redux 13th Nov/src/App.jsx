// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, reset } from './counterSlice.jsx';

// function App() {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div style={{ margin: "20px", padding: "20px", backgroundColor: "black" }}>
//       <h1 style={{ color: "pink" }}>Counter</h1>
//       <h2 style={{ color: "red" }}>Count: {count}</h2>

//       <button
//         style={{ padding: "10px", backgroundColor: "green", borderRadius: "10px", marginRight: "10px" }}
//         onClick={() => dispatch(increment())}
//       >
//         Increment
//       </button>

//       <button
//         style={{ padding: "10px", backgroundColor: "red", borderRadius: "10px", marginRight: "10px" }}
//         onClick={() => dispatch(decrement())}
//       >
//         Decrement
//       </button>

//       <button
//         style={{ padding: "10px", backgroundColor: "lightblue", borderRadius: "10px" }}
//         onClick={() => dispatch(reset())}
//       >
//         Reset
//       </button>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import zustandstore from './zustandstore';

function App() {
  const {count, increase, decrease, reset} = zustandstore
  return (
    <div style={{
      margin:"20px",
      padding:"10px",
      backgroundColor:"black",
      borderRedius:"20px",
    }} >
      <h2>{count}</h2>
      <button style={{color:"green",}}onClick={increase}>Increament</button>
      <button style={{color:"red",}}onClick={decrease}>Decreament</button>
      <button  style={{color:"blue",}}onClick={reset}>reset</button>
      <zustandstore/>
    </div>
  )
}

export default App;