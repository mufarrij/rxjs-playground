import { of, Observable, from } from 'rxjs'; 
import { map } from 'rxjs/operators';

//emit array as a sequence of values
const arraySource: Observable<number[]> = from([[1, 2, 3, 4, 5]]);
 

const source = of('World').pipe(
  map(x => `Hello ${x}!`)
);

function doubleArray(b: number[]): number[] {  
  let result : Array<number> = new Array();
  for(let i= 0; i< b.length; i++){
    result.push(b[i]* 2);
  }
  return result;  
}  


function getDouble(nums: Observable<number[]>){
  nums.subscribe(
    (x: number[]) => {
      return doubleArray(x);
    }
  )
}

//arraySource.subscribe(x => console.log(x));

console.log(getDouble(arraySource));
console.log(doubleArray([9,6,7]));