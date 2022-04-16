var BTN = document.getElementById("BTN");
var topic = document.getElementById("topic");
var content = document.getElementById("content");
var list = document.getElementById("list");


BTN.addEventListener("click",function(){
    list.innerHTML = list.innerHTML +
    `<div>
    <b>${topic.value}</b><br/>
    ${content.value}<hr/>
    </div>`;
    topic.value = "";
    content.value = "";
})