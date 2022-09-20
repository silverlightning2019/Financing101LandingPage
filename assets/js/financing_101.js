/** 
*   DOCU:
*   Last updated at: September 20, 2022
*   @author Silver
*/

$(document).ready(function(){
    
    $("body").on("click",".rectangle", function(){
        let button = $(this);
        let gauge = $("#gauge_savings_container");
        let gauge_bar = gauge.find("#gauge_savings_bar");
        let sum = 0;
        
        if(button.attr('data-active')==='true'){
            button.nextAll().removeClass("active");
            button.nextAll().attr('data-active','false');
        }
        else{
            button.addClass("active");
            button.prevAll().addClass("active");
            button.attr('data-active','true');
            button.prevAll().attr('data-active','true');
        }
        
        $(".value[data-active!='false']").each(function(){
            let values = $(this).attr('data-value');
            sum += parseFloat(values);
        });

        if(gauge.find("#250").attr('data-active')==='true'){
            gauge_bar.css('left','270px');
        }

        if(gauge.find("#100").attr('data-active')==='true'){
            gauge_bar.css('left','405px');
        }

        if(gauge.find("#1_1500").attr('data-active')==='true'){
            gauge_bar.css('left','538px');
        }

        if(gauge.find("#1500").attr('data-active')==='true'){
            gauge_bar.css('left','670px');
        }

        gauge.find("#gauge_sum").text('$' +sum);

    });

    $("body").on("click","#footer_scroll", function(){
        $('html,body').scrollTop(0);
    });
});