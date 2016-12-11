var colours = ['purple','#4b0082','#357AB7','green','yellow','orange','red'];
function random(range){
  return Math.floor(Math.random()*range);
}
var oldCursor = {x:0, y:0};
var svg;
var cursor = {x:0, y:0};
function onMouseMove(e){
  var e = e || window.event;

  if (e.pageX || e.pageY){
    cursor.x = e.pageX;
    cursor.y = e.pageY;
  }
};

function drawCircle() {
  if (Math.abs(cursor.x - oldCursor.x) > 10 || Math.abs(cursor.y - oldCursor.y) > 10 ){
    svg.circle(cursor.x,cursor.y, random(80) + 20, {fill:colours[random(7)], stroke: colours[random(7)],'stroke-width':random(5)+1});

  }
  oldCursor.x = cursor.x;
  oldCursor.y = cursor.y;
};



$(document).ready(function() {
  $('#svg').svg();
  svg = $('#svg').svg('get');
  setInterval ('drawCircle()', 100);
  document.onmousemove = onMouseMove;
});
