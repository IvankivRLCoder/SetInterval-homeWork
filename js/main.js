////function inFunc(){//    console.log('Hello');//};////var idNumber = 1;//var stopNumber;//var timeOn;////function mySetInterval(inFunc, myTime){//    func();//    return idNumber;//    function func(){//        if(stopNumber != idNumber){//            timeOn = setTimeout(a, myTime);//            function a(){//                inFunc();//                return func();//            }//        }//    }//}////function stopFunc (inNumber){//    if (inNumber === idNumber) {//        stopNumber = inNumber;//        clearTimeout(timeOn);//        idNumber ++;//    }//}//function assign(obj) {    for(var i = 1; i < arguments.length; ++i) {        var newObj = arguments[i];        for(var inf in newObj) {            obj[inf] = newObj[inf];        }    }    return obj;}