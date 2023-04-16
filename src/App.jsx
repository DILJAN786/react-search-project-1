import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JsonData from "./MOCK_DATA -1.json"


function App() {
  const [searchterm, setSearchterm] = useState("")

  return (
    <div className="App">
           <input type='text' placeholder='Search...' onChange={(event =>{setSearchterm(event.target.value)})}/>
           {
            JsonData.filter((val)=>{
              if(searchterm == ""){
                return val
              }else if(val.first_name.toLowerCase().includes(searchterm)) {
                return val
              }
            }).map((val,key)=>{
              return <div className='user' key={key} >
                <p> {val.first_name}</p>
              </div>
            })
           }

    </div>
  )
}

export default App
