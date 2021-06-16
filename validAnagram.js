function validAnagram(s,t){
    if(s.length !== t.length) return false;
    let hash = {}
    for(let ele of s){
        if(ele in hash) hash[ele] += 1;
        else hash[ele] =1
    }
    for(let ele of t){
        if(hash[ele]) hash[ele]--;
        else return false
    }
    return true;
}
