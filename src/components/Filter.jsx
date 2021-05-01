import {Icon, Input, Menu} from "semantic-ui-react";

const Filter = ({changeFilterState,filterBy,searchBook}) => {
    return (
        <Menu pointing secondary>
            <Menu.Item>Sort by:</Menu.Item>
            <Menu.Item
                active={filterBy === 'no_sorting'}
                onClick={changeFilterState.bind(this,"no_sorting")}> No sorting <Icon className="times"/>
            </Menu.Item>
            <Menu.Item
                active={filterBy === 'name_up'}
                onClick={changeFilterState.bind(this,"name_up")}> Name <Icon className="sort alphabet up"/>
            </Menu.Item>
            <Menu.Item
                active={filterBy === 'author_up'}
                onClick={changeFilterState.bind(this,"author_up")}> Author <Icon className="sort alphabet up"/>
            </Menu.Item>
            <Menu.Item
                active={filterBy === 'price_up'}
                onClick={changeFilterState.bind(this,"price_up")}> Price <Icon className="sort numeric up"/>
            </Menu.Item>
            <Menu.Item
                active={filterBy === 'price_down'}
                onClick={changeFilterState.bind(this,"price_down")}> Price <Icon className="sort numeric down"/>
            </Menu.Item>
            <Menu.Item
                active={filterBy === 'rating_down'}
                onClick={changeFilterState.bind(this,"rating_down")}> Rating <Icon className="sort numeric down"/>
            </Menu.Item>
                <Menu.Item ><Input onChange={(e)=>searchBook(e.target.value,searchBook)} icon="search"/>
                </Menu.Item>
        </Menu>
    )
}

export default Filter;