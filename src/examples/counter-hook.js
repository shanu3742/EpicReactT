// http://localhost:3000/counter-hook

import * as React from 'react'
import useCounter from '../components/use-counter'

function Counter() {
  const {count, increment, decrement} = useCounter()
  return (
    <div>
      <div>Current count: {count}</div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  )

  // function Message(Props) {
  //   console.log(Props.children)
  //   return (
  //     <div className="message">
  //    {Props.children}
  //     </div>
  //     )
  // }

  // return <>
  //   	<Message >testing</Message>
  // </>
}

export default Counter
