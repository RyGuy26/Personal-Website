import React, {Component} from 'react'

class Menu extends Component{
    render(){
        return(
            <div className="Menu" style = {styles}>
            Ryan Manfred
            </div>
        )
    }
}

const styles ={
    backgroundColor: '#ff3333',
    color: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    padding: '2rem 0',
    display: 'flex',
    flexDirection: 'row',
}
export default Menu