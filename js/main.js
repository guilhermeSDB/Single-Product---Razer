$("div").children('img').click( function(e){
    var target = $( e.target );   
    console.log(target)
    if($(target).hasClass('img1')){
        $('.main_pic').css('background-image', 'url("../src/mouse1.png")')
    }else if ((target).hasClass('img2')){
        $('.main_pic').css('background-image','url("../src/mouse2.png")')
    }
    else if ((target).hasClass('img3')){
        $('.main_pic').css('background-image','url("../src/mouse3.png")')
    }
    else if ((target).hasClass('img4')){
        $('.main_pic').css('background-image','url("../src/mouse4.png")')
    }

})