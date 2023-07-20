
    var img1 = document.getElementById('content_main3_img1');
    var img2 = document.getElementById('content_main3_img2');
    var arr = [
        ["../css/img/content_main4_1.png"],
        ["../css/img/content_main4_2.png"],
        ["../css/img/content_main4_3.png"],
        ["../css/img/content_main4_4.png"],
        ["../css/img/content_main4_5.png"],
        ["../css/img/content_main4_6.png"],
        ["../css/img/content_main4_7.png"],
        ["../css/img/content_main4_8.png"],
        ["../css/img/content_main4_9.png"],
    ]
    var index = 0;
    var index1 = 1;
function sildeShow() {    
    if (index == arr.length-1) {
        index = 0;
    } else{
        index++;
        index1++;
        img1.src = arr[index][0];
        if (index1 ==  arr.length) {
            index1 = 1;
        }else{
            img2.src = arr[index1][0];
        }
    }
}