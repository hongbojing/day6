var paper1=Raphael("code-left-1",450,450);

var rect_1_6=paper1.rect(50,50,100,50).attr({
  "stroke":"orange",
  "fill":"#ddd",
  "cursor":"pointer"
});
var rect_1_5=paper1.rect(50,50,100,50).attr({
  "stroke":"orange",
  "fill":"#ddd",
  "cursor":"pointer"
});
var rect_1_4=paper1.rect(50,50,100,50).attr({
  "stroke":"orange",
  "fill":"#ddd",
  "cursor":"pointer"
});
var rect_1_3=paper1.rect(50,50,100,50).attr({
  "stroke":"orange",
  "fill":"#ddd",
  "cursor":"pointer"
});
var rect_1_2=paper1.rect(50,50,100,50).attr({
  "stroke":"orange",
  "fill":"#ddd",
  "cursor":"pointer"
});
var rect_1_1=paper1.rect(50,50,100,50).attr({
  "stroke":"orange",
  "fill":"#ddd",
  "cursor":"pointer"
});
var text_1_1=paper1.text(65,75,'click me').attr({
  "text-anchor":"start",
  "font-size":20
});
var text_1_2=paper1.text(65,225,'click me').attr({
  "text-anchor":"start",
  "font-size":20
}).hide();
var text_1_3=paper1.text(265,225,'click me').attr({
  "text-anchor":"start",
  "font-size":20
}).hide();

rect_1_1.click(function(){
  rect_1_2.animate({
    transform:"t0,50"
  },10,'linear');
  rect_1_3.animate({
    transform:"t0,100"
  },10,'linear');
  rect_1_4.animate({
    transform:"t0,150"
  },10,'linear');
  rect_1_5.animate({
    transform:"t0,150"
  },10,'linear');
  rect_1_6.animate({
    transform:"t0,150"
  },10,'linear');
  text_1_2.show();
});

rect_1_4.click(function(){
  rect_1_5.animate({
    transform:"t100,150"
  },10,'linear');
  rect_1_6.animate({
    transform:"t200,150"
  },10,'linear');
  rect_1_1.animate({
    transform:"t0,150"
  },10,'linear');
  rect_1_2.animate({
    transform:"t0,150"
  },10,'linear');
  rect_1_3.animate({
    transform:"t0,150"
  },10,'linear');
  rect_1_4.toFront();
  text_1_3.show();
});

rect_1_1.mouseover(function(){
  text_1_1.show();
});
rect_1_1.mouseout(function(){
  text_1_1.hide();
});

rect_1_4.mouseover(function(){
  text_1_2.show();
});
rect_1_4.mouseout(function(){
  text_1_2.hide();
});





