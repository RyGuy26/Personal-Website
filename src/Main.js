import React, {Component} from 'react'
import Menu from './Menu'

class Main extends Component{
    render(){
        return(
            <div className="Main" style={styles}>
            <Menu/>
            <h1 syle={styles.h1}>Main</h1>
            </div>
        )
    }
}
const styles ={
    display: 'flex',
    alignItems:'stretch',
    height: '100vh',
    flexDirection: 'column',
    textAlign: 'center',
    h1: {
        textSize: '15vw',
    }
}
export default Main