var exp='', number, dec, equal, opr;
var textview = document.forms['myForm']['textview'];

function insertNumber(num){
    if(equal){
        exp = num;
        textview.value = exp;
        number = true;
        equal = false;
    }
    else{
        exp = textview.value + num;
        textview.value = exp;
        number = true;

    }
    if(opr){
        dec = false;
    }
}
function insertOp(op){
    textview.value = exp+op;
    opr = true;
    equal = false;
   
}
function insertDec(){
    if(number &&!dec){
        textview.value = exp + '.';
        decimal = true;
        opr = false;
    }
}
function insertEqual(){
    exp = eval(exp);
    textview.value = exp;
    equal = true;
    decimal = false;
    number = false;
    
}
function dellAll(){
    exp = '';
    textview.value = exp;

}
function remove(){
    exp = textview.value;
    exp = exp.substring(0, exp.length-1);
    textview.value = exp;
}
function minus(){
    if(textview.value >0)
    {
        exp = '-'+ textview.value;
    textview.value = exp;
    opr = false;

    }
    else{
        exp = textview.value * -1;
        textview.value = exp;
        opr = false;
    }
    
}
function percent(){
    //if(opr==false){
        exp = textview.value /100;
        textview.value = exp;
        opr = false;
    //}
    
}