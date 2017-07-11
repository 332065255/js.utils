/**
 * 只触发一次
 */
module.exports.once=function(fun){
    return function(...args){
        var ret;
        if(fun!=null){
            ret= fun.apply(this,args);
            fun=null;
        }else{
            console.log('jest once')
        }
        return ret;
    }
}

/**
 * 触发1次后冻结,wait秒后解冻
 */
module.exports.throttle=function (fn, wait){
    var timer;
    return function(...args){
        if(!timer){
            timer = setTimeout(()=>timer=null, wait);
            return fn.apply(this, args);
        }
    }
}

/**
 * 多次操作只有delay秒后才会触发
 */
module.exports.debounce=function (fn, delay){
    var timer = null;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    }
}