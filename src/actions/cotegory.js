
export const addCot = (idItem, textItem) => ({
    type: 'ADD_CATEGORY',
    value: idItem,
    text: textItem
})

export const addTextToStore = text => ({
    type: 'TEXTALL',
    text
})

