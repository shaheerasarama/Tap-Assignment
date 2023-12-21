function res(arr,tar){
    let result = [];
    arr.map((e,index)=>{
        if(arr[index] + arr[index+1] == tar){
            result = [index,index+1];
        }
    })
    return result;
}
let a = [2,7,11,15];
console.log(res(a,9));