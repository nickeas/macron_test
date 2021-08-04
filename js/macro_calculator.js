//食材データ
var m = [
//[0][i][j]: 肉
[[116, 23, 1.9, 0],//0-0とりむね皮なし
[127, 19, 5, 0],//0-1とりにくもも皮なし
[105, 23, 1, 0],//0-2ささみ
[195, 23, 10, 0],//0-3とりにく手羽皮付き
[197, 18.2, 12.8, 0],//0-4とりにく手羽元
[226, 17.4, 16.2, 0],//0-5鶏肉手羽先
[492, 9.4, 48,0],//0-6鶏肉むね皮
[513,6.6, 51.6,0],//0-7鶏肉もも皮
[202, 21.1, 11.9, 0.3],//0-8豚ロース(皮下脂肪なし)
[135, 21, 5.5, 0.2],//0-9豚のこまぎれ赤身
[226, 17.8, 16, 0.1],//0-10ぶた肩ロース(皮下脂肪なし)
[183, 20.5, 10.2, 0.2],//0-11ぶたもも
[130, 22.2, 3.7, 0.3],//0-12豚ヒレ
[235, 18.8, 16.5, 0.2],//0-13ぶたそともも 
[263, 19.3, 19.2,0.2],//0-14豚ロース
[253,17.1,19.2, 0.1],//0-15豚肩ロース
[395, 14.4, 35.4, 0.1],//0-16豚バラ
[151, 12, 10, 0]//0-17卵
],


//[1][i][j]: 魚
[[138, 22, 3.6, 0.1],//1-0秋鮭
[125, 26.4, 1.4, 0.2],//1-1まぐろ赤身
[165, 25, 6.2, 0.2],//1-2カツオ 
[204, 19.6, 12.8, 0],//1-3銀鮭
[121, 20.5, 3.5, 0.1],//1-4あじ
[202, 20.7, 12.1, 0.3],//1-5サバ
[241, 20.1, 16.5, 0.1],//1-6アトランティックサーモン
[200, 19.5, 12.5, 0],//1-7キングサーモン
[189,20.5,10.8,0],//1-8トラウトサーモン
[138, 22.5, 4.5, 0.1],//1-9紅鮭
[133, 22.3, 4.1, 0.1],//1-10白鮭
[115, 17.3, 4.4, 0.1]//1-11ほっけ

],


//[2][i][j]: 野菜 
[[23, 1.3, 0.2, 5.3],//2-0キャベツ
[36.7, 1, 0.1, 8.75],//2-1玉ねぎ
[22, 1.1, 0.09, 5.1],//2-2なす
[18.8, 0.7, 0.1, 4.7],//2-3トマト
[18, 0.4, 0.1, 4.1], //2-4大根  
[36.9, 0.6, 0.1, 9], //2-5にんじん
[14, 0.8, 0.1, 3.2],//2-6白菜
[14, 1.7, 0.1, 2.6],//2-7もやし
[22, 0.9, 0.2, 5.1],//2-8ピーマン
[22, 2.7, 0.2, 7.6],//2-9えのきたけ
[18, 3, 0.4, 4.9],//2-10しいたけ
[16, 3.7, 0.7, 2.7],//2-11まいたけ
[76, 1.6, 0.1, 17.6],//2-12じゃがいも
[134, 1.2, 0.2, 31.9],//2-13サツマイモ
[19, 2.8, 0.4, 6],//2-14えりんぎ
[35, 4.5, 0.5, 5.5],//2-15ブロッコリー
[20, 2, 0.3, 3.5],//2-16ホウレンソウ
[9, 0.6, 0.1, 2],//2-17チンゲンサイ
[14, 1, 0.1, 3]//2-18きゅうり
],

//[3][i][j]:　穀物
[[356, 6.1, 0.9, 77.1],//3-0白米炊飯前
 [354, 6.8, 2.7, 74.3],//3-1玄米炊飯前
 [367, 8.5, 1.7, 75],//3-2薄力粉
 [365, 12, 1.6, 71],//3-3強力粉
 [360, 12, 1.8, 71]//3-4パスタ乾麺
],

//[4][i][j]: フルーツ
[[54, 0.2, 0.1, 14.6],//4-0リンゴ
 [39, 0.9, 0.1, 9.8],//4-1オレンジバレンシア
[45, 0.7, 0.1, 11.7],//4-2みかん
[46, 0.9, 0.1,11.8],//4-3オレンジネーブル
[63, 0.5, 0.1, 16.9],//4-4渋抜き柿
[60, 0.4, 0.1, 15.9],//4-5甘柿
[34, 0.9, 0.1, 8.5],//4-6イチゴ
[43, 0.3, 0.1, 11.3],//4-7日本なし
[47, 0.2, 0.1, 12.7],//4-8中国なし
[54, 0.3, 0.1, 14.4],//4-9西洋なし
[53, 0.6, 0.1, 13.7],//4-10パイナップル
[86, 1.1, 0.2, 22.5],//4-11バナナ
[59, 0.4, 0.1, 15.7],//4-12ぶどう
[49, 0.5, 0.1, 12.9],//4-13ブルーベリー
[64, 0.6, 0.1, 16.9],//4-14マンゴー
[42, 1.1, 0.1, 10.3]//4-15メロン
],

//[5][i][j]: 調味料
[[71, 11.6, 0, 15.2],//5-0醤油
 [387, 0, 0, 100],//5-1砂糖
[119, 1, 0.1, 27.1],//5-2ウスターソース
[921,0,100, 0],//5-3油
[60, 2, 2.3, 7.9],//5-4豆板醤
[25, 0.1, 0, 2.4],//5-5酢
[107, 7.7, 0.3, 18.3],//5-6オイスターソース
[121, 1.6, 0.2, 27.6],//5-7トマトケチャップ
[706, 1.4, 76, 3.6],//5-8マヨネーズ全卵
[686, 2.5, 74.7, 0.6],//5-9マヨネーズ卵黄
[217, 10, 3, 37.9],//5-10味噌
[226, 0.1, 0, 55.7],//5-11みりん
[130, 0.2, 0.1, 31],//5-12お好みソース
[133, 2.6, 10, 6],//5-13マヨネーズ80%オフ
[339, 22.7, 26, 1.3],//5-14チーズ
[256, 10, 7.7, 38.1],//5-15甜麺醤
[131, 0.8, 0.1, 30.9],//5-16中濃ソース
[745, 0.5, 81, 0.1],//5-17バター
[138,6.8,7.8,9.89]//5-18牛乳
]
];

function clickNow(){
    document.getElementsByTagName("output")[0].innerHTML ="";

//量

var inputdata=[];

inputdata[0] = document.getElementsByClassName('0_meat');
inputdata[1] = document.getElementsByClassName('1_fish');
inputdata[2] = document.getElementsByClassName('2_vegetable');
inputdata[3] = document.getElementsByClassName('3_grain');
inputdata[4] = document.getElementsByClassName('4_fruit');
inputdata[5] = document.getElementsByClassName('5_seasoning');
 


var q=[];


for(var i=0; i<m.length; i++){
    q[i] = [];
    for(var j=0; j<m[i].length; j++){
        q[i][j] = parseFloat(inputdata[i][j].value)||0; //量を代入したい;
    }

}

//配列mに関して
var end = [0,0,0,0];

for(var i=0; i<m.length; i++){
    for(var j=0; j<m[i].length; j++){
        for (var k=0; k<m[i][j].length; k++){
            end[k] += q[i][j] * m[i][j][k] /100;
        }
    }
    
}
    
    
//optionから値を取得

   
var option =[];

option[0]=document.getElementsByClassName('option1');//対応関係に注意
option[1]=document.getElementsByClassName('option2');
option[2]=document.getElementsByClassName('option3');   
option[3]=document.getElementsByClassName('option4');
option[4]=document.getElementsByClassName('option5');
    
//数値化 optioncに代入
    
var optionc=[];
    
for(var j=0 ; j<option.length; j++){
    optionc[j]=[];
    for(var k=0; k<option[j].length; k++){
        optionc[j][k] = parseFloat(option[j][k].value)||0;
    }
}
  
//optioncをendに代入 
    
for(var j=0; j<optionc.length; j++){
    if(optionc[j][1] != 0){
        for(var k =0; k<((optionc[j].length)-2);k++){
            end[k] += (optionc[j][0] * optionc[j][k+2])/(optionc[j][1]);
        }
    }
    }
    var endname=["カロリー(kcal)","タンパク質(g)","脂質(g)","炭水化物(g)"];
    

for(var k=0; k<end.length; k++){
    end[k]= Math.ceil(end[k]);
    document.getElementsByTagName("output")[0].innerHTML +="<p>"+endname[k]+" : "+end[k]+"</p>";
}


}
    
