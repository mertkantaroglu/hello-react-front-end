import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/Greetings/greetingsSlice';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greeting);

  console.log(greeting);
  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return (
    <h1>{greeting}</h1>
  );
}

export default Greeting;
