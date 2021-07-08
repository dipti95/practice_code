function myIndexOf(source, searchValue,startIdx = 0){
    for(let i= startIdx; i <= source.length- searchValue.length; i++){
      let str = source.slice(i, i + searchValue.length)
      if(str  === searchValue) return i
    }
    return -1
  }
  //---------------
  