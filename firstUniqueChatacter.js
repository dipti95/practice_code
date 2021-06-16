function firstUniqueChracter(s){
    let hash = {};
    for(let ele of s){
        if(ele in hash) hash[ele] +=1;
        else hash[ele] =1;
    }
    for(let key in hash){
        if(hash[key] ===1) return s.indexOf(key)
    }

    return -1
}