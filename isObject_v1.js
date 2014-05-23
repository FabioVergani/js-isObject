function isObjectz(e){return e && e instanceof Object};
function isObject(e){return e && typeof(e)==='object'}

var Cases=[""," ",0,false,[],[''],['',''],['','',0],['','',1],[0],[1],{},{a:''},{b:null},{c:0},{d:1},undefined,null,1,true,'abc',Infinity,Object,alert,function(){}];
Cases.forEach(function(x){
var y="\u221A",n="\u263B",t=" \t",s="\u2018"+x+"\u2019"
console.log('isObjectz?',isObjectz(x)?y:n,t,s,x);
console.log('isObject?',isObject(x)?y:n,t,s,x);
//console.log('instanceof Function?',x instanceof Function ?y:n,t,s,x);
});

isObjectz? ☻  	 ‘’  
isObject? ☻  	 ‘’  
isObjectz? ☻  	 ‘ ’   
isObject? ☻  	 ‘ ’   
isObjectz? ☻  	 ‘0’ 0 
isObject? ☻  	 ‘0’ 0 
isObjectz? ☻  	 ‘false’ false 
isObject? ☻  	 ‘false’ false 
isObjectz? √  	 ‘’ [] 
isObject? √  	 ‘’ [] 
isObjectz? √  	 ‘’ [""] 
isObject? √  	 ‘’ [""] 
isObjectz? √  	 ‘,’ ["", ""] 
isObject? √  	 ‘,’ ["", ""] 
isObjectz? √  	 ‘,,0’ ["", "", 0] 
isObject? √  	 ‘,,0’ ["", "", 0] 
isObjectz? √  	 ‘,,1’ ["", "", 1] 
isObject? √  	 ‘,,1’ ["", "", 1] 
isObjectz? √  	 ‘0’ [0] 
isObject? √  	 ‘0’ [0] 
isObjectz? √  	 ‘1’ [1] 
isObject? √  	 ‘1’ [1] 
isObjectz? √  	 ‘[object Object]’ Object {} 
isObject? √  	 ‘[object Object]’ Object {} 
isObjectz? √  	 ‘[object Object]’ Object {a: ""} 
isObject? √  	 ‘[object Object]’ Object {a: ""} 
isObjectz? √  	 ‘[object Object]’ Object {b: null} 
isObject? √  	 ‘[object Object]’ Object {b: null} 
isObjectz? √  	 ‘[object Object]’ Object {c: 0} 
isObject? √  	 ‘[object Object]’ Object {c: 0} 
isObjectz? √  	 ‘[object Object]’ Object {d: 1} 
isObject? √  	 ‘[object Object]’ Object {d: 1} 
isObjectz? ☻  	 ‘undefined’ undefined 
isObject? ☻  	 ‘undefined’ undefined 
isObjectz? ☻  	 ‘null’ null 
isObject? ☻  	 ‘null’ null 
isObjectz? ☻  	 ‘1’ 1 
isObject? ☻  	 ‘1’ 1 
isObjectz? ☻  	 ‘true’ true 
isObject? ☻  	 ‘true’ true 
isObjectz? ☻  	 ‘abc’ abc 
isObject? ☻  	 ‘abc’ abc 
isObjectz? ☻  	 ‘Infinity’ Infinity 
isObject? ☻  	 ‘Infinity’ Infinity 
isObjectz? √  	 ‘function Object() { [native code] }’ function Object() { [native code] } 
isObject? ☻  	 ‘function Object() { [native code] }’ function Object() { [native code] } 
isObjectz? √  	 ‘function alert() { [native code] }’ function alert() { [native code] } 
isObject? ☻  	 ‘function alert() { [native code] }’ function alert() { [native code] } 
isObjectz? √  	 ‘function (){}’ function (){} 
isObject? ☻  	 ‘function (){}’ function (){}
