//實作基本計算機
/*功能:
(1)讀取用戶輸入的兩個數字
(2)可以選擇要加減乘除或是取餘數
(3)接著要能夠輸出結果到網頁上
*/

//如何讀取用戶輸入
//變數名稱 = prompt(字串提示)
var num_1 = prompt("請輸入第一個數字");
var num_2 = prompt("請輸入第二個數字");

document.write("<hr/>");
//將字串轉換成整數(無小數點):parseInt(變數名稱or字串)
document.write("將字串轉換成整數(無小數點):parseInt(變數名稱or字串)<br>");
document.write("<div class=\"result\"> var ans = parseInt(num_1) + parseInt(num_2);<br/>document.write(num_1 +\"加上\"+num_2+\"等於\"+ans);</div>");
var ans = parseInt(num_1) + parseInt(num_2);
document.write(num_1 +"加上"+num_2+"等於"+ans);

//將字串轉換成數值(有小數點):parseFloat(變數名稱or字串)

document.write("<br/><br/>將字串轉換成數值(有小數點):parseFloat(變數名稱or字串)");
document.write("<div class=\"result\"> var ans = parseFloat(num_1) + parseFloat(num_2);<br/>document.write(num_1 +\"加上\"+num_2+\"等於\"+ans);</div>");
var ans = parseFloat(num_1) + parseFloat(num_2);
document.write(num_1 +"加上"+num_2+"等於"+ans);