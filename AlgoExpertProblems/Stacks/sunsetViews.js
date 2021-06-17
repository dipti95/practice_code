// Given an Array of buildings and direction that all the buildings face, 
// return an array of  the indices of buldings that can see the sunset.
// The indices in the output array should be sorted in ascending order.

function sunsetViews(buildings, direction) {
      let stack = []
      let arr = []
      if(direction === 'WEST'){
        for(let i = 0; i < buildings.length ; i++){
          if(stack.length === 0){
              stack.push(buildings[i])
              arr.push(i)
            }
             if(stack[stack.length -1] < buildings[i]) {
              stack.push(buildings[i])
              arr.push(i)
            }
        }
      }else {
          for(let i = buildings.length -1; i >=0 ; i--){
          if(stack.length === 0){
              stack.push(buildings[i])
              arr.push(i)
            }
             if(stack[stack.length -1] < buildings[i]) {
              stack.push(buildings[i])
              arr.push(i)
            }
        }
        // because this will give us  a non sorted array because it loop starts from backward
        // thats why  .reverse() is using 
           arr.reverse()
      }
      
      return arr
  }