let arr =[4,5,7];
if(toString.call(arr)==="[object Array]"){
    console.log(true);
}else{
    console.log('false');
}
console.log(toString.call(arr)); 
//toString.call() is very useful when you have to deal with more detailed type of values.
