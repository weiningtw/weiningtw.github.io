$(document).ready(function(){
    var name = document.getElementById('res_txt');
    var btn = document.getElementById("go");

    $('.map').hide();
    $('.google_map').hide();
    $('.intro').hide();
    $('.join').hide();

    // 定義店家資料
    var storeData = [
        ["野菜家","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.505980166738!2d121.52304832211993!3d25.050834151814527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a965c4fc1789%3A0x7ebd94f5460b35ed!2z6YeO6I-c5a62!5e0!3m2!1szh-TW!2stw!4v1653925041956!5m2!1szh-TW!2stw","https://www.japaholic.com/tw/article/detail/909559"],
        ["金澤壽司","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.7681829522385!2d121.54271965106567!3d25.04193998388999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd62d60cc45%3A0x61c6644672b3c822!2z6YeR5r6k576O5ZGz5aO95Y-4IOmHkeayouOBvuOBhOOCguOCk-Wvv-WPuCBTT0dP5Y-w5YyX5b-g5a2d6aSo5bqX!5e0!3m2!1szh-TW!2stw!4v1653925744209!5m2!1szh-TW!2stw","https://www.japaholic.com/tw/article/detail/834786#heading_834786_1"],
        ["上村牧場","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.587976257875!2d121.5146656510658!3d25.048053083887083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a912a546c873%3A0x650c1dac92924552!2z5LiK5p2R54mn5aC05b6u6aKo5YyX6LuK5bqX!5e0!3m2!1szh-TW!2stw!4v1653925776137!5m2!1szh-TW!2stw","https://www.japaholic.com/tw/article/detail/834786#heading_834786_3"],
        ["勝博殿","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115672.7160446888!2d121.4217222215485!3d25.04179771426139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9694c25097f%3A0xde93a3aeaed95850!2z5paw5a6_5Yud5Y2a5q6_5pel5byP6LGs5o6S44GV44G844Gm44KTIOaWsOWFieS4iei2iuWNl-ilv-W6l--8iOS4iemkqO-8iQ!5e0!3m2!1szh-TW!2stw!4v1653925940209!5m2!1szh-TW!2stw","https://www.japaholic.com/tw/article/detail/792449#heading_792449_3"],
        ["美登利壽司","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28912.50171471354!2d121.49319226979391!3d25.06586343613908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab9ed2d79af9%3A0xb518a5a75605db87!2z5aO95Y-4576O55m75YipIOWPsOWMl-Wkp-WuieW6lw!5e0!3m2!1szh-TW!2stw!4v1653925664329!5m2!1szh-TW!2stw","https://www.japaholic.com/tw/article/detail/834786#heading_834786_0"]
    ];

    var dataAll = storeData;
    
    btn.addEventListener('click',function(e){
        e.preventDefault();
        name.textContent = "";

        // 禁止按鈕再被點擊
        e.target.classList.add('not-allow');

        // 生成 餐廳列表
        for(var k = 0;k < 5;k++){
            name.insertAdjacentHTML('beforeend',`<p>${dataAll[k][0]}</p>`);
        }
        
        // 加入動畫 class name
        var list = document.querySelectorAll('.res_txt > p');
        for(var h = 0;h < 5;h++){
            list[h].className = `p-${h + 1}`;
        }
        
        // 抽選結果生成
        setTimeout(function(){
            var max,min;
            var txt;
            var str = document.createElement('p');
            var google_map = document.querySelector('.google_map');
            var intro_a = document.querySelector('.intro_a');
            var chooseShop = function math(){
                max = 5 - 1;
                min = 0;
                return Math.floor(Math.random() * (max - min + 1));
            }
            name.textContent = "";
            txt = chooseShop();
            str.textContent = dataAll[txt][0];
            name.appendChild(str);
            google_map.setAttribute('src',`${dataAll[txt][1]}`);
            intro_a.setAttribute('href',`${dataAll[txt][2]}`);
            // console.log(dataAll);
            e.target.classList.remove('not-allow');

            $('.map').fadeIn(1500);
            $('.google_map').delay(600).fadeIn(1500);
            $('.intro').delay(1200).fadeIn(1500);
            $('.join').delay(1800).fadeIn(1500);
        },2400);
    });                   
});