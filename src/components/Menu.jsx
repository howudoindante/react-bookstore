import React from 'react';
import {Icon, Menu} from "semantic-ui-react";
import logo from '../logo.png'
import Modal from "./Modal"


const MenuBar = ({cart, total,addBook,removeBook}) => {
    return (
        <Menu>
            <Menu.Item name='logo'><img src={logo} alt="logo"/></Menu.Item>
            <Menu.Menu position='right'>
                <Modal removeBook={removeBook} addBook={addBook} total={total} items={cart}><Menu.Item name='cart'
                >Cart</Menu.Item></Modal>
                <Menu.Item name='cart'>Total: &nbsp; <b style={{fontSize: 25}}>{total}</b>  &nbsp;
                    <Icon key={1} name='ruble'/>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

export default MenuBar;