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

module.exports.EventDispatcher=class EventDispatcher{
    constructor(){
        this.dic={};
    }
    on(type,fun){
        if(!this.dic.hasOwnProperty(type)){
            this.dic[type]=[];
        }
        this.dic[type].push(fun);
    }
    remove(type,fun){
        if(!this.dic.hasOwnProperty(type)){
            return;
        }
        if(fun==undefined||fun==null){
            this.dic[type]=[];
        }else{
            for(var i = 0;i< this.dic[type].length;i++){
                if(this.dic[type][i]==fun){
                   this.dic[type] = this.dic[type].splice(i,1);
                }
            }
        }
    }
    emit(type,...args){
        if(!this.dic.hasOwnProperty(type)){
            return;
        }else{
            for(var i = 0;i< this.dic[type].length;i++){
                this.dic[type][i].apply(args);
            }
        }
    }
}