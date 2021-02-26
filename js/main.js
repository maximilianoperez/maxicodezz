$(document).ready(function(){
    $("#btn-abrir-menu").click(function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $("#menu li:not(.logo)").removeClass('open');
        }
        else{
            $(this).addClass('open');
            $("#menu li:not(.logo)").addClass('open');
        }
    })
})