//物件Object

//key = 鍵
//value = 值

/*定義:
var 物件名稱 = {
    key1:value1,
    key2:value2,
    key2:value2,
    ...
};
*/

//舉例:定義一個人的物件
var person = {
    name:"YuSay",
    age:18,
    is_cute:true
};

//取出物件的值:物件名稱.key名
document.write(person.name);
document.write(person.age);
document.write(person.is_cute);

//物件當中可以寫入函式
var person = {
    name:"YuSay",
    age:18,
    is_cute:true,
    print_name:function(){
        document.write(this.name);
    }
};
person.print_name();

//.length=算長度
//.indexOf=回傳某個內容是字串中第幾位
document.write("<br/>");
//表達真實世界的東西
//舉例:一部電影
var movie = {
    title:"刻在你心底的名字",
    maker:"氧氣電影",
    duration:114,
    actors:[
        {
            name:"陳浩深",
            age:24,
            is_male:true
        },
        {
            name:"增進華",
            age:23,
            is_male:true
        }
    ]
};
//想要知道電影的資訊時
document.write(movie.actors[0].name);

document.write("<br/>");
//---------------------------------
document.write("<hr/>");
//while迴圈
document.write("while迴圈<br/>");
/*
定義:
while(條件持續成立){
    程式碼
}
*/
//舉例:當i<3執行
var i = 3;
while(i<7){
    document.write(i);
    document.write("<br/>");
    i++;
}
document.write("<br/>");

//另一種, 先執行程式, 在判斷是否符合條件要繼續重複執行
/*
do{
    程式碼
}while(條件持續成立)
*/

//----------------------------------------------

//密碼檢驗程式
var password = 123456;
var input;
var times = 3;

while(password!=input){
    input = prompt("請輸入密碼");
    times--;
    if(0 >= times){
        alert("超過輸入的機會了");
        exit;
    }
}
alert("登入成功");
