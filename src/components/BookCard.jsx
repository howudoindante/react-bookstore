import React from 'react'
import {Card, Icon, Image, Rating} from 'semantic-ui-react'
import Button from "./Button";


const BookCard = (book) => {
    const {image,title,author,price,rating,addBook,countOfSameBooks} = book;
    return (
        <Card centered >
            <Image src={image} wrapped ui={false}/>
            <Card.Content key={1}>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>
                <Card.Description>
                    <Icon key={1} name='ruble'/>
                    {price}

                </Card.Description>
            </Card.Content>
            <Card.Content extra key={2}>

                <Button onButtonClick={addBook.bind(this, book)} countOfSameBooks={countOfSameBooks}/>
            </Card.Content>
            <Card.Content extra key={3}>
                {rating ?
                    <Rating icon='star' defaultRating={rating} maxRating={5} size='large'/> :
                    [<Icon key={3} className="frown outline icon"/>,
                        <b key={1}>Будьте первым!</b>]}
            </Card.Content>
        </Card>
    )
}

export default BookCard;