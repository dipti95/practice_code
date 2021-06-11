function ThirdGreatest(strArr) {
   let top3 = ['', '', ''];
   for (let i = 0; i < strArr.length; i++)
     if (strArr[i].length > top3[0].length)
       if (strArr[i].length > top3[1].length)
         if (strArr[i].length > top3[2].length) top3 = [top3[1], top3[2], strArr[i]];
         else top3 = [top3[1], strArr[i], top3[2]];
       else top3 = [strArr[i], top3[2], top3[3]];
   return top3[0];
 }

 // ----------------
 function ThirdGreatest(strArr) {
   let currentMax;
   for (let i = 0; i < 3; i++) {
     let maxIdx = 0;
     for (let j = 0; j < strArr.length; j++)
       if (strArr[j].length > strArr[maxIdx].length) maxIdx = j;
     currentMax = strArr.splice(maxIdx, 1)[0];
   }
   return currentMax;
 }
 //------------------------
 function ThirdGreatest(strArr) {
   function sortByLength(a, b) { return b.length - a.length; }
   return strArr.sort(sortByLength)[2];
 }