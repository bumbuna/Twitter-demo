import React, { useEffect } from 'react';
import { SignupForm } from './components/SignupForm';
import Container from 'react-bootstrap/Container'
import {Meteor} from 'meteor/meteor'

export const App = () =>  {
  const user = Meteor.user()
  console.log(user);
  return (
  <div>
    <Container>
      <SignupForm/> 
    </Container>
    
  </div>
  )
}
