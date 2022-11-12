

type friendType = {
  name:string
}



let initialState ={
    friendsobj: [
        {
          name: "Sedrak",
        },
        {
          name: "Vaxinak",
        },
        {
          name: "Pargev",
        },
      ] as Array<friendType>
    };



const friendReducer=(state=initialState,action:any):initialStateType=>{


    return state;
}   


export default friendReducer;

type initialStateType = typeof initialState
