/*
    Author: MorimotoYuma
    Create: 2021.05.30
    reference:
    https://gray-code.com/javascript/create-new-html-element/
*/
function pxRange(min, max){ // 最小～最大の範囲でランダムな値を返す
    // Type：String
    return Math.floor(Math.random()*(max-min)+15).toString();
}

function objGenre(genre){
    if(0==genre){
        let momiji_lst = ["momiji_red.png", "momiji_yello.png", "momiji_orange.png",];
        return momiji_lst[Math.floor(Math.random()*momiji_lst.length)];
    }
}

var bg_elm = document.getElementById("background");

obj_cnt = 0; // DOM count
function rainy(){
    var img_elm = document.createElement("img");
    img_elm.src = "assets/"+objGenre(0); // 0 - 紅葉 | 1 - 葉
    var rain_elm = document.createElement("div");
    rain_elm.className = "object rain";
    rain_elm.style.left = pxRange(10, 90)+"%"; // x-axis
    rain_elm.style.animationDuration = pxRange(10, 20)+"s, 5s"; // object fall speed
    rain_elm.appendChild(img_elm);
    bg_elm.appendChild(rain_elm);
    console.log("Obj Count: " + obj_cnt);
    if(35 < obj_cnt){
        bg_elm.removeChild(bg_elm.children[0]);
        obj_cnt--;
    }else{ obj_cnt++; }
}
setInterval(rainy, 500);