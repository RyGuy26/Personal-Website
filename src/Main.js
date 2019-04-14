import React, {Component} from 'react'
import Menu from './Menu'

class Main extends Component{
    render(){
        return(
            <div className="Main" style={styles.main}>
            <Menu/>
            <div >
                <h1 syle={styles.h1}>Main</h1>
                
            </div>
            
            
            </div>
        )
    }
}
const styles ={
    main: { 
    display: 'flex',
    alignItems:'stretch',
    height: '100vh',
    flexDirection: 'column',
    textAlign: 'center',
    },

    h1: {
        textSize: '15vw',
    },

    maincontent: {
        height:'100%',
        width:'100%',
        textAlign: 'center',
        marginLeft:'10rem',
        marginRight:'10rem',

    },
}
export default Main