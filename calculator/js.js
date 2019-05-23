var tempStrOper = 0;
var temp = 0;
var cal = 0;
var display = 0;
var ans = 0;
var restart = 0;
var operStr = 0;
var i = 0;

console.log('123'); // 修改地方
console.log('123'); // 修改地方

function numBtn(numStr) {

    display = document.getElementById("step")
    cal = document.getElementById("step2")
    ans = document.getElementById("ans")

    if (restart == 1) {
        display.value = null;
        ans.value = null;
        display.value += numStr; //顯示數字使用
        cal.value += numStr; //實際計算數字使用
        restart = 0;

    } else if (ans.value == '計算式錯誤') {
        reset()
        display.value += numStr; //顯示數字使用
        cal.value += numStr; //實際計算數字使用
    }
    else {

        display.value += numStr; //顯示數字使用
        cal.value += numStr; //實際計算數字使用
    }


    while (display.value.indexOf("..") != -1) {
        display.value = display.value.substring(0, display.value.length - 1)
        cal.value = cal.value.substring(0, cal.value.length - 1)
    }
      

}

function operBtn(operStr) {

    display = document.getElementById("step")
    ans = document.getElementById("ans")
    cal = document.getElementById("step2")

    display.value += operStr;  //顯示符號使用

    if (restart == 1) {

        display.value = ans.value;
        display.value += operStr;  //顯示符號使用
        tempStrOper = operStr; // 將符號暫時存在tempStrOper，供下一次按運算使用
        temp = ans.value;
        restart = 0;


    } else if (restart == 2) {
        restart = 0;
        reset()
    }
    else {
        restart = 0;
        equal();
        tempStrOper = operStr; // 將符號暫時存在tempStrOper，供下一次按運算使用
        ans.value = cal.value;
        temp = cal.value; //將運算結果
        cal.value = null;　//清除數字

    }

    if (ans.value == 'NaN') {

        reset()
        ans.value = '計算式錯誤'

    }

}

function reset() {

    restart = 0;
    display.value = null;
    cal.value = null;
    ans.value = null;
    tempStrOper = 0
    temp = 0;

}

function keepAns() {

    tempStrOper = 0
    temp = 0
    cal.value = null;
}

function equal(str) { //計算過程

    if (str != "=") {

        switch (tempStrOper) {
            case '+':
                cal.value = parseFloat(temp) + parseFloat(cal.value);
                break;

            case '-':
                cal.value = parseFloat(temp) - parseFloat(cal.value);
                break;

            case 'x':
                cal.value = parseFloat(temp) * parseFloat(cal.value);
                break;

            case '÷':
                cal.value = parseFloat(temp) / parseFloat(cal.value);
                break;

            default:
                break;
        }

    }
    else {
        if (restart == 1) {
            reset()

        } else {
            equal()
            ans.value = cal.value;

            keepAns();
            restart = 1;

            if (ans.value == 'NaN') {
                ans.value = '計算式錯誤';
                restart = 2;
            }

        }

    }
  
    // $( "p:first" ).click(function() {
    //     $( this ).fadeTo( "slow", 0.33 );
    //   });

}




