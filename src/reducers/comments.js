
function comments( state = [], action){
    console.log(state, action);
        const {postId} = action;
    switch(action.type){
    
        case 'ADD_COMMENT':
            const {comment,author} =  action;
            return {
                ...state,
                [postId]:[
                    ...state[postId],
                    {
                        text:comment,
                        user:author
                    }
                ]
            };
        case 'REMOVE_COMMENT':
            const {i} = action;
            return{
                ...state,
                [postId]:[
                    ...state[postId].slice(0,i),
                    ...state[postId].slice(i+1)

                ]
            }
        default :
        return state;
    }
    // return state;
}


export default comments;