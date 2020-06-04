var oImg = document.getElementsByTagName('img');

var len = oImg.length;
console.log(len)
// 默认中间大图
var curDisplay = 0;
var timer;

function init(){
    show();
    // 点击事件
    bindEvent();
    // 自动轮播
    play();
}
init();

// 初始图片平铺展示
function show(){
    var mLen = Math.floor(len/2);
    var lIndex,rIndex;
    for(var i = 0 ;i<mLen;i++){
        lIndex = len + curDisplay - i -1;
        if(lIndex>len-1){
            lIndex-=len;
        }
        oImg[lIndex].style.transform = 'translateX('+(-120*(i+1)) +'px) rotateY(25deg)';
        rIndex = curDisplay + i + 1;
        if(rIndex>len-1){
            rIndex-=len;
        }
        oImg[rIndex].style.transform = 'translateX('+(120*(i+1)) +'px) rotateY(-25deg)';

    }
    oImg[curDisplay].style.transform = 'translateZ(150px)'
}

function bindEvent(){
    for(var i = 0;i<len;i++){
        (function(i){
            oImg[i].onclick = function(){
                curDisplay = i;
                show();
            }
            oImg[i].onmouseenter = function(){
                clearInterval(timer);
            }
            oImg[i].onmouseleave = function(){
                play();
            }
        })(i)
        
    }
}

function play(){
    timer = setInterval(function(){
        curDisplay = (curDisplay + 1)%len;
        show();
    },1000)
}