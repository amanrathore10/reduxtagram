
function posts( state = [], action){
    const i = action.index;
    switch(action.type){
        case 'INCREMENT_LIKES':
        console.log('Incrementing likes',state[action.index]);
        return [
            ...state.slice(0,i),
            {
                ...state[i], 
                likes: state[i].likes + 1
            },
             ...state.slice(i+1)
        ];
        
    default :
        return state;
    }
}

export default posts;