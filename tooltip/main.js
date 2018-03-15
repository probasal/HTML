$('document').ready(function(){

    $('a').on('mouseenter', function(){
        var position = $(this).offset();
        var window_size = $(window).height();
        var box_height = $('.box').height();
        var mycondition = position.top + box_height;
        //console.log('Top : ' + position.top, 'Left : ' + position.left, 'Window Height : ' + window_size);
        
        if(mycondition <= window_size){
            $('.box').css({
                'top': position.top,
                'left': position.left + 50
            }).show();
        }else{
            $('.box').css({
                'top': position.top - (box_height-10),
                'left': position.left + 50
            }).show()
        }
    }).on('mouseleave', function(){
        $('.box').hide();
    })
})