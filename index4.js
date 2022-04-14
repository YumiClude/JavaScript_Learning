//For 迴圈
 var i = 0;
 //複習while
 while(i<=9){
     i++;
 }
 //定義
 /*
 for(變數; 判斷式; 跑完一次要做){

 }
 */

 //舉例
 for(var i = 0; i<10; i++){
    document.write(i);
    document.write("<br/>");
 }

 //想要取得陣列所有的值時
 var friends = ["小黑", "小黃", "小綠"];
 for(var q = 0; q < friends.length; q++){
     document.write(friends[q]);
     document.write("<br/>");
 }

 //問答程式
 var questions = [
     {
        prompt:"香蕉的顏色?(a)Red(b)Blue(c)Yello",
        answer:"c"
     },
     {
        prompt:"Color of 草莓?(a)Red(b)Blue(c)Yello",
        answer:"a"
     },
     {
         prompt:"1m=?cm(a)1(b)10(c)100",
         answer:"c"
     }
 ]
//  var score = 0;
//  for(var i=0; i<questions.length; i++){
//      var input = prompt(questions[i].prompt)
//      if(input==questions[i].answer){
//          score++;
//          alert("答對了")
//      }
//      else{
//          alert("答錯了")
//      }
//  }
//  alert("總共答對了"+score+"題")

 //2維陣列、巢狀迴圈

 //如果我們在陣列中又寫陣列, 為變成2維陣列
 var number=[
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9],
     [0]
 ];
 //取得陣列:第一個值
 document.write(number[0][0]);

 //巢狀迴圈:迴圈中又寫迴圈
 for(var i=0; i<4; i++){
     for(var j = 0; j<3; j++){
         document.write("i:"+i+"j:"+j);
         document.write("<br/>")
     }
 }

 //取得2維陣列中, 所有的值
//  for(var i=0; i<4; i++){
//     for(var j=0; j<3;j++){
//         if(number[i][j] != ""){
//             document.write(number[i][j]);
//             document.write("<br/>");
//         }
//     }
//  }
//  document.write("<hr/>");

 for(var p=0; p<number.length; p++){
     for(var q=0; q<number[p].length; q++){
         document.write(number[p][q]);
         document.write("<br/>");
     }
 }

 //class模板:創建一個模板
 //可以方便的創建物件
 
 var phone1 = {
    number:"345",
    year:22,
    is_will:true
 }

 //定義
 /*
 class 模板名稱{
     constructor(變數1, 變數2, 變數3..)
     this.變數1 = 設定1;
     this.變數2 = 設定2;
     this.變數3 = 設定3;
 }
*/

class Phone{
    constructor(number, year, is_will){
        this.number = number;
        this.year = year;
        this.is_will = is_will;
    }
}

var phone1 = new Phone("3333",44,true);
document.write(phone1.number);
document.write(phone1.year);
document.write(phone1.is_will);