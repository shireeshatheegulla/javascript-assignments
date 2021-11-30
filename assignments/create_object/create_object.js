function CreateObject(arr) {
    // Write your code here
    const obj={};
    for(var i=1;i<arr.length;i=i+2){
        obj[arr[i-1]]=arr[i];
    }
    return obj
}

module.exports = CreateObject;
