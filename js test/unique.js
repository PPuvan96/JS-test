var arr=[1, 2, 3, 3, 4, 5, 5]
var temp=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]!=arr[i+1]){
        temp.push(arr[i])
    }
}
console.log(temp)