import React from 'react'
import {Item, Button, Icon, Modal, Label, Statistic} from 'semantic-ui-react'

function ModalScrollingExample(props) {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={props.children}
        >
            <Modal.Header>Your cart</Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    <Item.Group>
                        {props.items.map(item => {
                            return <Item key={Math.floor((item.id + 1) * Math.random() * 100)}>
                                <Item.Image size='tiny' src={item.image}/>

                                <Item.Content>
                                    <Item.Header as='a'>{item.title}</Item.Header>
                                    <Item.Meta>{item.author}</Item.Meta>
                                    <Item.Description>
                                        <Label>
                                            <Icon name='cart' /> In a cart
                                        </Label>
                                    </Item.Description>
                                    <Item.Extra>
                                        <Icon key={Math.floor((item.id + 1) * Math.random() * 100)} name='ruble'/>
                                        {item.price}
                                    </Item.Extra>
                                </Item.Content>

                                <Item.Extra>
                                    <Button onClick={()=>props.addBook(item)} basic color='orange' floated='right'>
                                        <Icon name='plus' />
                                        Add more
                                    </Button>
                                    <Button onClick={()=>props.removeBook(item.id)} basic color='red' floated='right'>
                                        <Icon name='minus' />
                                        Remove all
                                    </Button>
                                </Item.Extra>
                            </Item>
                        })}
                    </Item.Group>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color="green" onClick={() => setOpen(false)}>
                    Confirm and buy ({props.total} <Icon key={2} name='ruble' size="small"/>) <Icon
                    name='right chevron'/>
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalScrollingExample;