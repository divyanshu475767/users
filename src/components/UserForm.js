import React,{useState} from 'react';
import './UserForm.css';
import Invalid from './Invalid';


const UserForm = (props) => {
 
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [validity , setValidity] = useState(true);
    
    const submitHandler = (event)=>{
        
        event.preventDefault();
        if(name === '' || age <=0){
          setValidity(false);
          return; 
        }

        setValidity(true);
        console.log(name,age);
        props.userDetails({name,age})
        setName('');
        setAge('');
        
    }

    const nameHandler = (event)=>{
        setName(event.target.value);
    }

    const ageHandler = (event)=>{
        setAge(event.target.value);
    }




  return (

    <div>
    
    {!validity && <Invalid/>}

    <form className='form' onSubmit={submitHandler}>
    <label>Username</label>
    <input type="text" onChange={nameHandler} value={name}></input>
    <label>Age(years)</label>
    <input type='number' onChange={ageHandler} value={age}></input>
    <button type='submit'>Add User</button>
    </form>
    </div>
  )
}
export default UserForm
