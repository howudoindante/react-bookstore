import React, {Component} from 'react';
import Menu from "../containers/Menu";
import BookCard from "../containers/BookCard";
import axios from 'axios';
import {Container, Card, Message, Icon} from "semantic-ui-react";
import Filter from "../containers/Filter";

class App extends Component {

    componentDidMount() {
        const {setBooks} = this.props;
        axios.get('/books.json').then(response => {
            setBooks(response.data);
        });
    }

    render() {
        const {books, isReady, cartItem} = this.props;
        return (
            <Container>
                <Menu {...books} {...cartItem}/>
                <Filter/>
                        <Card.Group itemsPerRow={5}>
                            {isReady ? books.map(book => <BookCard key={book.id} {...book}/>) :
                                <Message style={{margin: "30px auto", width: "60%"}} icon>
                                    <Icon name='circle notched' loading/>
                                    <Message.Content>
                                        <Message.Header>Just one second</Message.Header>
                                        We are collecting that content for you.
                                    </Message.Content>
                                </Message>}

                        </Card.Group>

            </Container>
        )
    }
}

export default App;




