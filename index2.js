//陣列array
document.write("陣列array<br/>");
//var 陣列名稱=[值1, 值2, 值3, ...];
//舉例:存放學生成績
var scores = [80, 30, 89, 70];
document.write("舉例:存放學生成績<br/>");
document.write(scores);
document.write("<br/>");
//取得陣列內容:陣列名稱[要取得的值的順序位子]
scores[1]
//舉例:取得第2位學生資料
document.write("舉例:取得第2位學生資料<br/>");
document.write(scores[1]);
document.write("<br/>");
//修改陣列內容:陣列名稱[要改值的順序位子] = 要改成的值
//舉例:修改第二位學生的成績
scores[1] = 56
document.write("舉例:修改第二位學生的成績<br/>");
document.write(scores);
document.write("<br/>");
//觀念:順序是從0開始
//觀念:存放的型態可以是字串, 陣列, 布林值
var YuSay = ["girl", 77, true];
document.write("存放的型態可以是字串, 陣列, 布林值:<br/>");
document.write(YuSay);
document.write("<br/>");

//取得陣列長度:陣列名稱.length
document.write("取得陣列長度:")
document.write(scores.length);
document.write("<br/>");

//---------------------------------------------------
document.write("<hr/>");

//函式
document.write("函式<br/>");

/*
函式定義:function 函式名稱(){
    要運行的程式內容;
}
*/
//舉例:定義一個名叫hello的函式
function hello() {
    document.write("你好");
}
//如果只有定義, 則函式的內容不會被執行

//呼叫函式:函式名稱();
//舉例:呼叫hello函式
document.write("舉例:呼叫hello函式<br/>");
hello();
//此時內容才會被執行
document.write("<br/>");
//函式可以有傳入值
/*
function 函式名稱(傳入值){
    要運行的程式內容;
}
*/
//舉例:設定ok函式的傳入值為ans
function ok(ans) {
    document.write("Ans=" + ans);
}
//一樣我們需要進行呼叫, 並且輸入傳入值給函式
ok("rue");
document.write("<br/>");
//傳入值也可以設為多個

//小測驗:add1函式, 可輸入兩個數並且顯示相加結果
//document.write("小測驗:add函式");
function add1(num1, num2) {
    ans = num1 + num2;
    document.write("ans=" + ans);
}
add1(5, 7);

document.write("<br/>");
//函式的回傳:return
//可以將回傳的值, 覆蓋原先呼叫的位子
//舉例:add2用回傳的方式印出
function add2(num1, num2) {
    ans = num1 + num2;
    return ans;
}
document.write("ans2=" + add2(4, 5));
//觀念:函式執行時, 如果執行到return, 就會跳出函式, return下面的程式不會被執行

//------------------------------------
document.write("<hr/>");

//if判斷
document.write("if判斷");
document.write("<br/>");
/*
if(條件成立){
    要執行的程式碼;
}
*/
//舉例:如果肚子餓, 印出我就去吃飯
var hungry = true;
document.write("如果肚子餓為True:");
if(hungry){
    document.write("我就去吃飯");
}
document.write("<br/>");

//if..else
/*
if(條件成立){
    要執行的程式碼;
}
else{
    條件不成立時, 要執行的程式碼;
}
*/
//舉例:如果下雨, 我就開車, 否則我就走路
var rainy = true;
document.write("如果下雨, 我就開車, 否則我就走路:");
if(rainy){
    document.write("我會開車");
}
else{
    document.write("我會走路");
}
document.write("<br/>");

//if..else if..else
/*
if(條件成立){
    要執行的程式碼;
}
else if(另一條件成立){
    要執行的程式碼;
}
else{
    條件都不成立時, 要執行的程式碼;
}
*/
//舉例:如果考100分得100塊, 考60分得60塊, 不然就是10塊
var score = 100;
if(score == 100){
    document.write("考100分得100塊");
}
else if(score >= 60){
    document.write("考60分得60塊");
}
else{
    document.write("得10塊");
}
//如果前面的條件已符合, 就不會再去執行後面的程式
document.write("<br/>");
//&&(且:有否為否)、||(或:有真為真)、!(反面)
if(score==100 && rainy){
    document.write("考100分得100塊且我會開車");
}
else if(score==100 || rainy){
    document.write("考100分得100塊或是我會開車");
}
else if(score==100 || !rainy){
    document.write("考100分得100塊或是我會走路");
}
document.write("<br/>");
//小測驗:max_num函式可以傳入三個數, 並且回傳最大值
document.write("小測驗:max_num函式可以傳入三個數, 並且回傳最大值<br/>");
function max_num(num1, num2, num3){
    if(num1 >num2 && num1 > num3){
        return ("最大值為="+ num1);
    }
    else if(num2 >num1 && num2 > num3){
        return("最大值為="+ num2);
    }
    else{
        return("最大值為="+ num3);
    }
}
document.write(max_num(3,6,4));