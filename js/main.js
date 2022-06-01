$(function(){
    AtivarTooltip();
    AtivarSelecaoDeModeloDeMouse();
    AtivarTrocaDeImagemPrincipal();
})

function AtivarSelecaoDeModeloDeMouse(){
    $('select').on('change', function (e) {
        var valueSelected = this.value;
        if(valueSelected == 'viperUltimateCyberpunk'){
            setMainColor('#FBEE46')
        }else if(valueSelected == 'viperUltimateRose'){
            setMainColor('#F2C5D6')
        }else{
            setMainColor('#00DE00')
        }
    });
}

function AtivarTooltip(){
    $('.tooltip_dot').on('click' , function(e){
        var target = $(e.target);
        if( $(target).children().css('visibility') == 'hidden')
            $(target).children().css('visibility','visible');
        else
            $(target).children().css('visibility','hidden');
    })
}

function setImgNumber(target){
    $(".mini_pics").find("img").css('box-shadow', '-12px 0px 0 transparent')
    $(".mini_pics").find(`img.${target}`).css('box-shadow', '-12px 0px 0 var(--mainColor)')
}

function setMainColor(color){
    document.documentElement.style.setProperty('--mainColor', color);    
}

function TrocarDeImagemPrincipal(target){
    $('.main_pic').css('background-image', 'url("./src/'+target+'.png")')
    setImgNumber(target)
    AjustarTooltip(target)
}

function AjustarTooltip(target){
    if(target == "img1"){
        $('.tooltips').css("display","block")
    }else{
        $('.tooltips').css("display","none")
    }
}

function AtivarTrocaDeImagemPrincipal(){
    $(".mini_pics").find('img').click( function(e){
        var e = $(e.target); 
        var target = e[0].className
    
        switch(target){
            case "img1":
                TrocarDeImagemPrincipal(target)
                break;
            case "img2":
                TrocarDeImagemPrincipal(target)
                break;
            case "img3":
                TrocarDeImagemPrincipal(target)
                break;
            case "img4":
                TrocarDeImagemPrincipal(target)
                break;
        }
    
    })
}


