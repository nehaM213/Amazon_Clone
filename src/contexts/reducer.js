export const initialState={
    basket:[],
    user:null
};
export const getBasketTotal=(basket)=>basket?.reduce((amount,item)=>item.price+amount,0);

const reducer =(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
            //here it finds the index of the basket item where the id match(finds the first match)
            const index=state.basket.findIndex(
                (basketItem)=> basketItem.id===action.id
            );
            let newBasket=[...state.basket];
            if(index>=0){
                //from the index delete 1 item
                newBasket.splice(index,1);
            }
            else{
                console.warn("can't remove the product");
            }
            return{
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        default:
            return state;
    }
}
export default reducer;