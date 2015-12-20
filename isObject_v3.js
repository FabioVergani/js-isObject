log = console.log.bind(console);
//
isObject=function(e){return typeof(e)==='object' && e.constructor===Object;};
//
log(isObject(alert));
log(isObject({}));
log(isObject(3));
log(isObject(Math));
log(isObject(undefined));
