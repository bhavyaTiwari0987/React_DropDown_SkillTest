import { useEffect, useState } from 'react';
import './App.css';
import Dropdown from './DropD';

function App() {
  const [options , setOptions] = useState([]);
  useEffect(() => {
    setOptions(["Yes" , "Probably Not" , "No" , "Never"])
  }, [])
  return (
      <Dropdown
      options={options}
      />
  )
}

export default App;
