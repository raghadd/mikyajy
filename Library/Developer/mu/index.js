$(window).resize(function() {
    var height = $('#header').height();
    $('#container').css({
      'margin-top': height
    });
}).trigger('resize');

// $(window).resize(function() {
//     var height = $('.card-body').height();
//     $('.card-title').css({
//         'margin-bottom': height
//     });
// }).trigger('resize');


// $(window).resize(function() {
//     var width = $(window).width();
//     console.log(width);
//     $('.dropdown-menu').css({
//         'width': width
//     });
// }).trigger('resize');