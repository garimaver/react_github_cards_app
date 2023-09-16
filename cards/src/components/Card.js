import React from 'react'


function Card(props) {
  const profile = props;
  return (
    <div>
      <img src={profile.avatar_url}/> 
      <div className="info">
      <div className="name">{profile.name}</div>
      <div className="company">{profile.company}</div>
    </div>
    </div>
  )
}

export default Card;
