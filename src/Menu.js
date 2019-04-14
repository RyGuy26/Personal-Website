import React, {Component} from 'react'
import MenuInfo  from './MenuInfo'


class Menu extends Component{
    render(){
        return(
            
                <div className="Menu" style={styles}>
                <MenuInfo/>
                
                </div>
        )
    }
}

const styles ={
    backgroundColor: '#ff3333',
    color: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'row',
}
export default Menu