
import * as React from 'react'


// 🐨 import the `render` and `fireEvent` utilities from '@testing-library/react'
import {render,fireEvent} from '@testing-library/react'
//import jest library
import '@testing-library/jest-dom/extend-expect'


import Counter from '../../components/counter'

// cleanup function  is in-build function in '@testing-library/react' so no need to write 
// beforeEach(() => {
//   document.body.innerHTML = ''
// })

test('counter increments and decrements when the buttons are clicked', () => {
  


  //we import render from '@testing-library/react' so no need to write ReactDOM

  // const view =render(<Counter />)

  // const div = view.container
//we can do this using object distructuring  and below simple object distructuring example
//   const {container}=render(<Counter />)
//  const div= container
 
//advance object distructuring

const {container:div}=render(<Counter />)

  
  const [decrement, increment] = div.querySelectorAll('button')
  const message = div.firstChild.querySelector('div')

  expect(message).toHaveTextContent('Current count: 0')

  // 🐨 replace all this code with one line of code 
  // const incrementClickEvent = new MouseEvent('click', {
  //   bubbles: true,
  //   cancelable: true,
  //   button: 0,
  // })
  // increment.dispatchEvent(incrementClickEvent)
  fireEvent.click(increment)

  expect(message).toHaveTextContent('Current count: 1')
  // const decrementClickEvent = new MouseEvent('click', {
  //   bubbles: true,
  //   cancelable: true,
  //   button: 0,
  // })
  // decrement.dispatchEvent(decrementClickEvent)
  fireEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
})
