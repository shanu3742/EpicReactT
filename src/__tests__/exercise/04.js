// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'
import {build,fake} from '@jackfranklin/test-data-bot'
import Login from '../../components/login'

 //if we have more data and we don't want to get usernme from faker we can do that  using props sprate operator we
 //can do that
//  const  fakerUserName = (overrides) => {
//   return ({
//     username:faker.internet.userName(),
//     password:faker.internet.password(),
//     ...overrides
//   })
// }

const buildForm = build({
  fields:{
    username:fake((faker) =>faker.internet.userName() ),
    password:fake((faker) => faker.internet.password())
  }
})


test('submitting the form calls onSubmit with username and password', () => {

  const handleSubmit = jest.fn()
  render(<Login onSubmit={handleSubmit}/>)
 const {username, password} = buildForm()
 
  
  
 userEvent.type( screen.getByLabelText( /username/i),username)
 userEvent.type( screen.getByLabelText(/password/i),password)
 userEvent.click( screen.getByRole('button', {name: /submit/i}))
  

  expect(handleSubmit).toHaveBeenCalledWith({
  
    username,
    password,

  })
  //toHaveBeenCalledTimes is used to check how many times onSubmit button is called in this example we set condition 
  //it should be call only one times
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
