import React, { Component } from 'react'
import Carrousel from './Carrousel'
import TimeCount from './TimeCount'

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
                <TimeCount/>           
            </div>
        )
    }
}
