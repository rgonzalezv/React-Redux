export default function (state=null,action) {
    switch (action.type){
        case "CAR_SELECT":
            return action.payload;
            break;

    }
     return state;
}