import React from 'react'
import { scroller } from 'react-scroll'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1500,
            delay:100,
            smooth: true,
            offset: -150
        });
        props.onClose(false)
    }




        return (

            <Drawer
                anchor='right'
                open={props.open}
                onClose={()=> props.onClose(false)}
                >
                
                <List component="nav">

                <ListItem button onClick={()=> scrollToElement('highlights')}>
                    Venue Highlights
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('guests')}>
                    Special Guests
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('recording')}>
                 Fans Recording
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('venueinfor')}>
                    Venue Information
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('location')}>
                Venue Location
                </ListItem>

                <ListItem>
                More venue coming soon 🖤
                </ListItem>

                </List>
            </Drawer>
        )
    }

export default SideDrawer