import './App.css';

import {useState} from 'react'




function App() {

  const [person, setPerson]= useState([

    {
      id:1,
      name: 'Arto hellas',
      number: '09022064453'
    
    },
  
  
  ])

  const [newName, setNewName]= useState('')
  const [newNumber, setNewNumber]= useState('')

  const handleChange= (event) => {
  
    setNewName(event.target.value)
  }

  const handleNumberChange= (event) => {
  
    setNewNumber(event.target.value)
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    setPerson([...person, {id:newName, name:newName,}])
    setNewName('')
  }

  



  const handleNumberSubmit= (e) => {
    e.preventDefault();
    setPerson([...person, {id:newNumber, name:newNumber,}])
    setNewNumber('')
  }


  return( 
     <div>
      <h2>Phonebook</h2>
     
      <form onSubmit={handleSubmit} >
        
         <div> name: <input type={'text'} value={newName} onChange={handleChange} /> </div>
      
      </form>
     <form onSubmit={handleNumberSubmit}>
      <div  > number: <input type={'text'} value={newNumber}  onChange={handleNumberChange}/> </div>
      </form>
      <div> <button type="submit">add</button> </div> 
      <h2>Numbers</h2>

      <div> 
      {person.map((items)=>(
        <p key={items.id} > {items.name}  {items.number} </p>
      ))}
     </div>

    
    
       {/* {alert(`${newName} is already added to phonebook`)} */}
      {/*  > 
      
      
       
       <button type="submit">add</button>
      
      </form> */}

      </div>
)
  
}

export default App;



