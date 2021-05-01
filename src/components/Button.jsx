import React, {Component} from 'react';
import {Button, Icon} from "semantic-ui-react";

class ButtonComponent extends Component {
    render() {
        return (
            <div>
                <Button basic color="orange" fluid animated="fade"
                        onClick={this.props.onButtonClick}>
                    <Button.Content hidden><Icon key={1}
                                                 name="plus"/>{` ${this.props.countOfSameBooks > 0 ? `In cart `
                        + this.props.countOfSameBooks : 'Add'}`}
                    </Button.Content>
                    <Button.Content visible>
                        <Icon key={2} name='shop'/>Move to cart
                    </Button.Content>
                </Button>
            </div>
        );
    }
}

export default ButtonComponent;