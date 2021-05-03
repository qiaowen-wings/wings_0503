var capture; 
var jsondata;
var ssobj=[];


function preload(){
  // 取得spreadsheet
  jsondata = loadJSON('https://spreadsheets.google.com/feeds/list/1W5zNvyw6a_RyI6CT3tqnmqn-zb9FoLJF0GX6Qz38Usw/od6/public/values?alt=json');
}
function setup() {
  
  let temp = jsondata.feed.entry;
  console.log(jsondata);

  let i=1;
  
  let str='';
  
    for(let i=0;i<temp.length;i+=1){
      
    str += '<div class="slide-'+i+'">'+
             '<center><img id="'+temp[i].gsx$圖片.$t+'_01" src="./asset/'+temp[i].gsx$圖片.$t+'" class="img-fluid" ></center></img>'+
      
      
      '<a href="'+ jsondata.feed.entry[i].gsx$網址.$t+'" target="_blank">'+
                '<p style="text-align:center">'+jsondata.feed.entry[i].gsx$作業.$t+'</p>'+
               '</a>'+
          '</div>';
    
    }
    
  //將演算的資料 str 插入 index 裡面 id= card 的tag物件
  
  //console.log(jsondata);
  
  /*console.log('第'+(i+2)+'行資料的tel欄位：'+jsondata.feed.entry[i].gsx$作業.$t);*/
  
  // 把所有name的資料抓出來 排在燈箱上

  
   //將演算的資料 str 插入 index 裡面 id= hw1 的 tag 物件
  
   window.document.getElementById("hw1").innerHTML=str;
   $('#hw1').html(str);
   //$('#task').html('點擊進入作業網址');
    
    // jquery 
    $(document).ready(()=>{
      
$('#hw1').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

    }); 
  

  
}

function draw() {
  
  
}