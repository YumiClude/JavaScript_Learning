document.write("這是利用引入的文字");

//註解的兩種方式:

//單行註解

/*
多行註解
*/

//---------------------------------------

//基本資料型態

//字串:
"這是一段字串"

//數字:
20
55.5

//布林值:是或否
true
false

//-----------------------------------------

//變數:可以存放資料的容器
/*規則：只能是(1)英文大小寫(2)數字(3)$(4)_的組合,
並且開頭不能是數字*/

/*創建變數:
    var 變數名稱 = 要存進去的值;
*/
var my_name = "YuSay";
//印出my_name的內容
document.write("<br/>");
document.write("你的名字:"+ my_name);

//變數的內容是可以改變的, 且改成不同資料類型也可以

document.write("<hr/>");
//-------------------------------------------

//如何使用字串、字串用法

//如果我們想要印出雙引號",只要在雙引號前面加上\即可
var phrase = "hello\"lala";
document.write("<br/>");
document.write("印出雙引號:"+ phrase);

//印出字串,變數相加(連接), 利用"+"
document.write("<br/>");
document.write("變數相加(連接):"+ phrase + my_name);

//算字串長度:變數名稱.lenght
document.write("<br/>");
document.write("算字串長度:"+ phrase.length);

//字串全部變成大寫:變數名稱.toUpperCase()
document.write("<br/>");
document.write("字串全部變成大寫:"+ phrase.toUpperCase());

//字串全部變成小寫:變數名稱.toLowerCase()
document.write("<br/>");
document.write("字串全部變成小寫:"+ phrase.toLowerCase());

//回傳字串第x+1位的文字:變數名稱.charAt(x)
document.write("<br/>");
document.write("回傳字串第2位的文字:"+ phrase.charAt(1));

//觀念:JavaScript的世界中, 順序是從0開始算的:0123456789

//回傳某個內容是字串中第幾位:變數名稱.indexOf()
document.write("<br/>");
document.write("回傳某個內容是字串中第幾位:" + phrase.indexOf("l"));
//注意:他所回傳的數值, 是從0開始算的
//如果是裡面沒有的字元, 則會回傳"-1"
document.write("<br/>");
document.write("某個內容是字串,是裡面沒有的字元:" + phrase.indexOf("r"));
//如果是重複的內容, 則會回傳最前面那個的位子

//回傳字串第a位到第b位的內容:變數名稱.substring(a, b)
document.write("<br/>");
document.write("回傳字串第3位到第7位的內容:" + phrase.substring(2, 6));

//更多內容:詳見w3c javascript

document.write("<hr/>");
//----------------------------------------------------------

//如何使用數字、數字用法

document.write("<br/>");
document.write("印出數字:"+ 34.5);

//運算:+,-,*,/
//規則同一般數學概念:順序為先乘除後加減,並且括號內會優先運算
//另外, 如果變數的型態是數字, 也可以直接拿來運算
var num = 7;
document.write("<br/>");
document.write("變數加7:");
document.write(num + 7);
//提醒:如果跟字串類型的變數一起印出, 則結果會變成字串
document.write("<br/>");
document.write("變數加7,但是跟字串寫在一起:"+ num + 7);
document.write("<br/>");
document.write("普通運算6 + 7*4*(4+5):");
document.write(6 + 7*4*(4+5));

//運算符號:%(取餘數)
document.write("<br/>");
document.write("8除5取餘數(8%5):");
document.write(8%5);

//絕對值:Math.abs(變數名稱)
num = -6;
document.write("<br/>");
document.write("變數為-6的絕對值:");
document.write(Math.abs(num));

//找x,y,x..多個數字的最大的那個數:Math.max(x,y,x)
document.write("<br/>");
document.write("找3,7,-1,4,7,5以及變數num之中最大值:");
document.write(Math.max(3,7,-1,4,7,5,num));

//找x,y,x..多個數字的最小的那個數:Math.min(x,y,x)
document.write("<br/>");
document.write("找3,7,-1,4,7,5以及變數num之中最小值:");
document.write(Math.min(3,7,-1,4,7,5,num));

//四捨五入:Math.round(數字or變數名稱)
num = 3.6;
document.write("<br/>");
document.write("變數num為3.6做四捨五入:");
document.write(Math.round(num));

//x乘以y次方:Math.pow(x,y)
document.write("<br/>");
document.write("3的5次方:");
document.write(Math.pow(3,5));

//開根號:Math.sqrt(數字or變數名稱)
document.write("<br/>");
document.write("36開根號:");
document.write(Math.sqrt(36));

//回傳隨機值:Math.random()
document.write("<br/>");
document.write("產生一個隨機值:");
document.write(Math.random());

/*如果我們希望這個隨機值是0~10之間, 則可以把Math.random()*10
接著在進行四捨五入Math.round(Math.random()*10)
*/
document.write("<br/>");
document.write("產生一個0~10的隨機值:");
document.write(Math.round(Math.random()*10));
