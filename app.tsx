import React from 'react';
import button from './components/button';
import sucessAlert from './components/sucessAlert';
import labels from './components/labels';
import { useState } from 'react';

const app = () => {
  const [alertVisible, setAlertVisibility] = useState(false);   
  return (
    <form>
        <labels>Sign in</labels>
        {alertVisible && <sucessAlert>Sign in alert</sucessAlert>}
        <button children='Submit' onClick={() => setAlertVisibility(true)}>button</button>
    </form>
  )
}

export default app