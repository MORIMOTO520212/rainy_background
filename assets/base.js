/*
    Author: MorimotoYuma
    Create: 2021.05.30
    reference:
    https://gray-code.com/javascript/create-new-html-element/
*/
var genre = 99;  // object type:  0 - 紅葉 | 1 - 葉 | 2 - 桜
var limit = 40;  // object display count
var delay = 500; // object spawn interval (ms)

function pxRange(min, max){ // 最小～最大の範囲でランダムな値を返す
    // Type：String
    return Math.floor(Math.random()*(max - min) + min).toString();
}

function scrollPointDetector(element, top, bottom){
    /*
        element - 要素
        top     - 要素上部の検出範囲
        bottom  - 要素下部の検出範囲
        戻り値：検出 - 1 | 未検出 - 0
        Type: int
    */
    var scrollY = window.scrollY;
    if(scrollY > element.getBoundingClientRect().y+top && element.getBoundingClientRect().y+bottom > scrollY){
        return 1;
    }
    return 0;
}

function objGenre(genre){
    /*
        genre = 0 - 紅葉 4種類
        genre = 1 - 葉 2種類
        genre = 2 - 桜 4種類
    */
    var momiji_lst = ["momiji_red.png", "momiji_yello.png", "momiji_orange.png", "ichou.png"];
    var sakura_lst = ["sakura_hanabira_large.png", "sakura_hanabira_2_large.png"];
    var leaf_lst = ["leaf_large.png", "leaf_2_large.png", "leaf_red.png", "leaf_green.png"];
    if(0==genre){
        return momiji_lst[Math.floor(Math.random()*momiji_lst.length)];
    }
    if(1==genre){
        return leaf_lst[Math.floor(Math.random()*leaf_lst.length)];
    }
    if(2==genre){
        return sakura_lst[Math.floor(Math.random()*sakura_lst.length)];
    }
    return 0;
}

/* object spawn */
var bg_elm = document.getElementById("background");
obj_cnt = 0; // DOM count
function rainy(){
    if(genre < 3){
        var img_elm = document.createElement("img");
        img_elm.src = "assets/"+objGenre(genre);
        var rain_elm = document.createElement("div");
        rain_elm.className = "object";
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
setInterval(rainy, delay);

/* scroll point detection */
var c_01 = document.getElementById("c_01"); // change effect point
var c_02 = document.getElementById("c_02"); // change effect point
var g = 0;
window.addEventListener('scroll', function(){
    var res;
    //  * range of detection *
    res = scrollPointDetector(c_01, -30, 50);
    if(res) g = 0;
    res = scrollPointDetector(c_02, -30, 50);
    if(res) g = 2;
    res = scrollPointDetector(c_03, -30, 50);
    if(res) g = 1;

    if(genre != g){
        genre = g;
    }
});