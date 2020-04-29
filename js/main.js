$(function() {
  //change hambarger menu icons
  let hambarger = $('#hambarger');
  hambarger.click(function (e){
     $('.drawer').toggleClass('js-drawer--show');
     $('.hambarger__bar1').toggleClass('js-drawer--show');
     $('.hambarger__bar2').toggleClass('js-drawer--show');
     $('.hambarger__bar3').toggleClass('js-drawer--show');
    e.stopPropagation(); //
     $('.hambarger__a').click(function () {
        $('.drawer').removeClass('js-drawer--show');
        $('.hambarger__bar1').removeClass('js-drawer--show');
        $('.hambarger__bar2').removeClass('js-drawer--show');
        $('.hambarger__bar3').removeClass('js-drawer--show');
     });

     $(window).click(function () {
        $('.drawer').removeClass('js-drawer--show');
        $('.hambarger__bar1').removeClass('js-drawer--show');
        $('.hambarger__bar2').removeClass('js-drawer--show');
        $('.hambarger__bar3').removeClass('js-drawer--show');
     });
     
  });

});


$(function () {
//with mouseover/leave, work will scale up/down
const $imgWrap = $('.work-img-wrap');
$imgWrap.on('mouseover', function() {
  $(this).children('.work__img').css({'transform' : 'scale(1.1, 1.1)', 'transition' : 'transform 0.7s ease-in-out'});
});
$imgWrap.on('mouseleave', function() {
  $(this).children('.work__img').css({'transform' : 'scale(1.0, 1.0)', 'transition' : 'transform 0.7s ease'});
});
});

$(function () {
//show a character one by one
  const msg = "Tatsuya Yamamoto";
  const delay = 150;
  const $name = $('.hero__title');
  let count = 0;

  const id = setInterval(function() {
    let type = msg.substring(count, count + 1);
    $name.append(type);
    count++;
    if (count > msg.length) {
      clearInterval(id);
    }
  }, delay);

});


