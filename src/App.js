import './App.css';
import React, {useState , useEffect} from 'react';
import axios from 'axios';

function App() {
  const [currenTime , setCurrenTime] = useState('');
  useEffect(()=>{
    // /localhost:8080/api/time Get
    axios.get('/api/time')
    .then(respons =>{
      setCurrenTime(respons.data);
    })
    .catch(error=>{
      console.log('API 호출중 오류 발생 ' , error);
    })
  })
  return (
    <div className="App">
      <h1>현제 시간</h1>
      <p>{currenTime}</p>
    </div>
  );
}

export default App;
