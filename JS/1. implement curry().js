/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curr(...args){
    //fn.length= fn(param)->param.length
    /*If args is more or equal element than the parmas of fn
      using ...args, else return a function use the second parmas

      for example:
      curriedJoin(1)(2)(3)
      1 param in first param, join() need 3 params,
      curr(1,..2), not enough again,
      curr(1,2,..3) enough
    */

    if(args.length>=fn.length){
      return fn(...args)
    }else{
       return (...args2)=>{
         return curr(...args, ...args2)
         }
    }
  }
}

const join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3)) // '1_2_3'

console.log(curriedJoin(1)(2, 3)) // '1_2_3'

console.log(curriedJoin(1, 2)(3)) // '1_2_3'

console.log(curriedJoin(1)(2)(3))