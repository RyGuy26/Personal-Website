import React from 'react'
import profile from './profile2.png';


const MenuInfo = () => {
  return (
    <div className="MenuInfo" style={styles.info}  >
      <img src={profile} alt="Ryan Manfred" style={styles.pic} />
      <h1 style={styles.h1}>Ryan Manfred</h1>
     
    </div>
  )
}

const styles = {
    info: {
        marginLeft: '15rem',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
      },
      pic: {
        
        height: '80px',
        width: '80px',
        fontSize: '1rem',
        borderRadius: '40px',
        backgroundSize: '40px',
        backgroundColor: '#eeeeee',
      },
      h1: {
        marginLeft: '3rem',
        color: "eeeeeeee"
      },
      h2: {
        marginRight: '2rem',
      },
}

export default MenuInfo
