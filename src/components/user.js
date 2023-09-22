import React from 'react'
import './User.css'

const User = (props) => {
    const name = props.name;
    const age = props.age;
  return (
    <div className='user'>
      {`${name} (${age} years olds)`}
    </div>
  )
}

export default User
