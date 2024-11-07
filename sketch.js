let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle = 0 //(三角函數)sin角度
let r = 10 //sin的震幅
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的LXGWWenKaiTC-Bold.ttf字型
    font = loadFont("fonts/LXGWWenKaiTC-Bold.ttf") 
}
//===================================================


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES) //設定三角函數的角度用0~360
  //background(255)
  //===================================================
  
}

function draw() {
  //background(220);
  background(255)
  rectMode(CENTER)
  noFill() //以下所畫的物件不要充滿顏色
  strokeWeight(1)//線條粗細
//宣告變數
var bc_width = 50 + mouseX/5 //大園寬度+跟著滑鼠的方向幅度
var rect_width = 50 + mouseY/5 //方形寬度+跟著滑鼠的方向幅度
var sc_width = 25 +mouseX/10 //小園寬度+跟著滑鼠的方向幅度
     //第一排
  //FOR迴圈
  // i=0為變數，要i從0開始
  // i<40:判斷條件，當條件成立時，就繼續進到迴圈的程式碼執行
  // i=i+1:i值每次改變的差距值，當回圈內程式碼執行一次完畢後，i值會自動+1
  for(let j=0;j<20;j=j+1){ //產生第幾排，共20排
    for(let i=0;i<40;i=i+1){//產生一整排物件(兩個圓+一個方)，每排有40個物件
    ellipse(25+50*i,25+50*j,bc_width)  //在座標(X25,Y25)畫一個直徑50的圓
    stroke("#b388eb")  //線條顏色
    rect(25+50*i,25+50*j,rect_width)//畫方形
    stroke("#8093f1")
    ellipse(50+50*i,50+50*j,sc_width)//小圓
    stroke("#72ddf7")
    }
   }
   points = font.textToPoints("PONY", 10, 200, 200, {
    sampleFactor:0.1
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小。值越小點數越少
  //===================================================
  translate(width/2,height/2) //把原本原點(0,0)左上角，改道畫布中心點(width/2-300,height/2-120)為原點(0,0)
  rotate(frameCount%360)  //依照framecount除以360求餘數，旋轉
  for (let i=0; i<points.length-1; i++) { 
    //text(str(i),points[i].x,points[i].y)  //在()座標上，顯示一個文字
    fill("#fdc5f5") //圓的填色
    strokeWeight(1) //圓框的粗細
    ellipse(points[i].x,points[i].y,5) //文字產生點點
    stroke("#8d86c9") //線條顏色
    strokeWeight(3) //線條粗細
    line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),points[i+1].x+r*sin(angle+i*10),points[i+1].y+r*sin(angle+i*10)) //畫線，兩點一線
    //兩個點第一個點(points[i].x,points[i].y) 第二個點(points[i+1].x,points[i+1].y)前面length要-1
 } 
  //===================================================
  angle = angle+10 //讓角度每次+10
}
