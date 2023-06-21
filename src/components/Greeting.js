import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/Greetings/greetingsSlice';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  if (greeting) {
    return (
      <h1>{greeting.message}</h1>
    );
  }
  return (
    <h1>No message here!</h1>
  );
}

export default Greeting;
