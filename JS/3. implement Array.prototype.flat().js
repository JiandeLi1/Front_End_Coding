3. implement Array.prototype.flat()
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
//recursion
// function flat(arr, depth = 1) {
//   // your imeplementation here
//   let res=[]
//   arr.forEach(item=>{
//       if(Array.isArray(item) && depth>0){
//         res.push(...flat(item,depth-1))
//       }else{
//         res.push(item)
//       }
//    }
//   )
//   return res
// }

//iter
/*
depth=1
[1,[2],[3,[4]]]=>map([element,depth])=>stack=[[1,1],[2,1][[3,[4],1]]]
stack.pop()=>[[3,[4]],1], [3,[4]] is array, and depth>0, 
we push [3, 0] and [[4], 0] to stack, now we get [[1,1],[2,1],[3,0],[[4],0]]

we pop again, and we get [[4],0], [4] is array, but depth is 0, we put [4] to res
res=[[4]], stack=[[1,1],[2,1],[3,0]]
we pop again, [3,0]->res=[4,3], stack=[[1,1],[2,1]
stack.pop()->[2,1], s is not array, even though depth is 1, but push it to res
res=[[4],3,2], stack=[[1,1]]
stack.pop()->[1,1], 1 is not array, res=[[4],3,2,1]

reverse the res, time complixty is n , return res.reverse()=[1,2,3,[4]]
*/
function flat(arr, depth = 1) {
  // your imeplementation here
 let stack=arr.map(item=>[item, depth]);
 let res=[]
 while(stack.length){
   let [i,d]= stack.pop()
   if(Array.isArray(i) && d>0){
      stack.push(...i.map(e=>[e, d-1]))
   }else{
     res.push(i)
   }
 }
 return res.reverse()
}

const arr = [1, [2], [3, [4]]];
console.log(flat(arr))
// [1, 2, 3, [4]]
console.log(flat(arr, 1))
// [1, 2, 3, [4]]
console.log(flat(arr, 2))
// [1, 2, 3, 4]