/**
 * Created by Administrator on 2016-11-17.
 * Design nas.
 */
var cnt = 0;

$(document).ready(function () {
    //HTML 과 CSS 의 모든 로딩이 끝나면 J-Query 를 실행.



});


$(function () {


});

function fnMoveNextContent(id, nextID,cntYN) {
    if(cntYN == "Y") {
        cnt = cnt + 1;
    }
    if(nextID == "FINAL") {
        $(id).addClass("none");
        $("#section_final").removeClass("none", "");
    } else {
        $(id).addClass("none");
        $(nextID).removeClass("none", "");
    }    
    console.log(cnt);
}









