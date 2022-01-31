function setColor(imgNumber){
    $('img').closest('div').css('border-left', '10px solid transparent')
    $(imgNumber).closest('div').css('border-left', '10px solid var(--mainColor)')
}

$('select').on('change', function (e) {
    var valueSelected = this.value;
    if(valueSelected == 'viperUltimateCyberpunk'){
        document.documentElement.style.setProperty('--mainColor', '#FBEE46');
    }else if(valueSelected == 'viperUltimateRose'){
        document.documentElement.style.setProperty('--mainColor', '#F2C5D6');
    }else{
        document.documentElement.style.setProperty('--mainColor', '#00DE00');
    }
});

$("div").children('img').click( function(e){
    var target = $( e.target );   
    if($(target).hasClass('img1')){
        $('.main_pic').css('background-image', 'url("./src/mouse1.png")')
        setColor('img.img1')
    }else if ((target).hasClass('img2')){
        $('.main_pic').css('background-image','url("./src/mouse2.png")')
        setColor('img.img2')
    }
    else if ((target).hasClass('img3')){
        $('.main_pic').css('background-image','url("./src/mouse3.png")')
        setColor('img.img3')
    }
    else if ((target).hasClass('img4')){
        $('.main_pic').css('background-image','url("./src/mouse4.png")')
        setColor('img.img4')
        document.documentElement.style.setProperty('--mainColor', 'Crimson');
    }

})
