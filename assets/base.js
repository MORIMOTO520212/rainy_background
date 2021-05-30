/*
    Author: MorimotoYuma
    Create: 2021.05.30
    reference:
    https://gray-code.com/javascript/create-new-html-element/
*/
var genre = 99; // object type:  0 - 紅葉 | 1 - 葉 | 2 - 桜
var limit = 35; // object display count

function pxRange(min, max){ // 最小～最大の範囲でランダムな値を返す
    // Type：String
    return Math.floor(Math.random()*(max-min)+15).toString();
}

function objGenre(genre){
    var momiji_lst = ["momiji_red.png", "momiji_yello.png", "momiji_orange.png", "ichou.png"];
    var sakura_lst = ["sakura_hanabira_large.png", "sakura_hanabira_2_large.png"];
    if(0==genre){
        return momiji_lst[Math.floor(Math.random()*momiji_lst.length)];
    }
    if(1==genre){
        return false;
    }
    if(2==genre){
        return sakura_lst[Math.floor(Math.random()*sakura_lst.length)];
    }else{

    }
}

/* effect */
var bg_elm = document.getElementById("background");
obj_cnt = 0; // DOM count
function rainy(){
    if(genre!=99){ // stop number 99
        var img_elm = document.createElement("img");
        img_elm.src = "assets/"+objGenre(genre);
        var rain_elm = document.createElement("div");
        rain_elm.className = "object rain";
        rain_elm.style.left = pxRange(5, 95)+"%"; // object x-axsis range
        rain_elm.style.animationDuration = pxRange(10, 20)+"s, 5s"; // object fall speed
        rain_elm.style.zIndex = "-1";
        rain_elm.appendChild(img_elm);
        bg_elm.appendChild(rain_elm);
        if(limit <= obj_cnt){
            bg_elm.removeChild(bg_elm.children[0]);
        }else{
            obj_cnt++;
        }
    }
}
setInterval(rainy, 500);

/* scroll point detection */
var c_01 = document.getElementById("c_01"); // change effect point
var c_02 = document.getElementById("c_02"); // change effect point
var g = 0;
window.addEventListener('scroll', function(){
    var scrollY = window.scrollY;
    //                                  * range of detection *
    if(scrollY > c_01.getBoundingClientRect().y-30 && c_01.getBoundingClientRect().y+50 > scrollY){
        console.log("scroll c01");
        g = 0;
    }
    if(scrollY > c_02.getBoundingClientRect().y-30 && c_02.getBoundingClientRect().y+50 > scrollY){
        console.log("scroll c02");
        g = 2;
    }
    if(genre != g){
        console.log("g:"+g);
        genre = g;
    }
});