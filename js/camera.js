console.log('Camera loaded');
var mouseDown = false;
var $camera = $('.camera');
$(document)
.mousedown(function() {
    mouseDown = true;
    console.log('mousedown');
})
.mousemove(function(e) {
    if (mouseDown == true){ 
      console.log('dragging');    
      console.log('X position', e.clientX);
      console.log('Y position', e.clientY);
      $camera.css('transform', 'rotateY(' + e.clientY + 'deg' + ')' + 'scale(' + 0.5 + ')' + 'translateX(' + '12em)' + 'translateY(' + '-10em)' + 'translateZ(-10em' + ')');
        // $('.user-text').css('transform', 'scale(' + ui.value + ')');
        // 'scale(' + 0.5 + ')' + 'translateX(' + 12em + ')' + 'translateY(' + -10em + ')' + 'translateZ(' + -10em + ')';
    }
 })
.mouseup(function() {
  mouseDown = false;
});