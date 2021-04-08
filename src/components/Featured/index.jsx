import React, { Component } from 'react'
import Carrousel from './Carrousel'

export default class Featured extends Component {
    render() {
        return (
            <div style = {{position:'relative'}}>

                <Carrousel/>

                <div className='artist_name'>
                    <div className='wrapper'>
                        Reputation tour
                    </div>
                    
                </div>                
            </div>
        )
    }
}
