export const changeFilterState = (param) => {
    return {type:"CHANGE_FILTER",payload:param}
}

export const searchBook = (value) => {
    return {type:"SEARCH",payload:value}
}