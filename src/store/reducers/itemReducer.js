const initState = {
    items:[
        {id:'1', title:'title1', content:'content1'},
        {id:'2', title:'title2', content:'content2'},
        {id:'3', title:'title3', content:'content3'}
    ]
}

const itemReducer = ( state = initState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'CREATE_ITEM':
            console.log('created', action.item)
    }
    return state
}

export default itemReducer