export default function (
    state={
        index: ""
    },action)
{
    switch(action.type){
        case "DEFAULT_STATE":
            state = {...state, index: "Hello world"}
            break;
    }
    
    return state;
}
    