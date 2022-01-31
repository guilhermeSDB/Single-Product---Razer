function setColorImgDetail(imgNumber){
    $('img').closest('div').css('border-left', '10px solid transparent')
    $(imgNumber).closest('div').css('border-left', '10px solid var(--mainColor)')
}

function setColorPage(color){
    document.documentElement.style.setProperty('--mainColor', color);    
}

$('select').on('change', function (e) {
    var valueSelected = this.value;
    if(valueSelected == 'viperUltimateCyberpunk'){
        setColorPage('#FBEE46')
    }else if(valueSelected == 'viperUltimateRose'){
        setColorPage('#F2C5D6')
    }else{
        setColorPage('#00DE00')
    }
});

$("div").children('img').click( function(e){
    var target = $( e.target );   
    if($(target).hasClass('img1')){
        $('.main_pic').css('background-image', 'url("./src/mouse1.png")')
        setColorImgDetail('img.img1')
    }else if ((target).hasClass('img2')){
        $('.main_pic').css('background-image','url("./src/mouse2.png")')
        setColorImgDetail('img.img2')
    }
    else if ((target).hasClass('img3')){
        $('.main_pic').css('background-image','url("./src/mouse3.png")')
        setColorImgDetail('img.img3')
    }
    else if ((target).hasClass('img4')){
        $('.main_pic').css('background-image','url("./src/mouse4.png")')
        setColorImgDetail('img.img4')
    }

})
