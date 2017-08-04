const initialState = {
  treeMango: [{old: 0, nameTree: ''}]
}

export default (state=initialState, action) =>{
  switch(action.type){
    case 'GROW':
      console.log('--------------------3')
      return {...state, treeMango: action.payload.numberOLD}
  }
  return state
}
