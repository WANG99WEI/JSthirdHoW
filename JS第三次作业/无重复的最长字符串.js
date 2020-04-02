var lengthOfLongestSubstring = function(str){
 let arr = [];
 let max = 0;
 for(let item of str){
     if(arr.includes(item)){
         let index = arr.indexOf(item);
         arr.splice(0,index + 1);
     }
     arr.push(item);
     max = max > arr.length ? max : arr.length;
 }
   return max;
}