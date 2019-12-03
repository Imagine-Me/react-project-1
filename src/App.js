import React from 'react';
import './App.css';
import Input from './Components/Input/Input'
import Button from './Components/Button/Button'
import List from './Components/List/List'


const App = () => {
  return (
    <div class="MainBody">
      <Input type="text" placeHolder="Enter some text" />
      <Button>Add</Button>
      <ul>
          <List/>
          <List/>
          <List/>
      </ul>
    </div>
  )
}

export default App;
