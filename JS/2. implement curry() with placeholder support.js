/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curr(...args){
    if(args.length>=fn.length && !args.slice(0,fn.length).includes(curry.placeholder)){
      args.length=fn.length
      args.sort((a,b)=>a-b)
      return fn(...args)
    }else{
      return (...args2)=>{
        let res = args.map(arg=>
          arg===curry.placeholder && args2.length ?
          args2.shift() : arg
        )
        return curr(...res, ...args2)
      }
    }
  }
}


curry.placeholder = Symbol()
const  join = (a, b, c) => {
   return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder

curriedJoin(1, 2, 3) // '1_2_3'

curriedJoin(_, 2)(1, 3) // '1_2_3'

curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'

console.log(curriedJoin(_,_,3,4)(1,_)(2,5))

curriedJoin(1,2,3,4)(5,6)