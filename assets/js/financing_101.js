/** 
*   DOCU:
*   Last updated at: September 19, 2022
*   @author Silver
*/

$(document).ready(function(){
    
    $("body").on("click",".rectangle", function(){
        let button = $(this);
        let sum = 0;


        button.toggleClass("active");
        button.find().toggleClass("active");
        button.attr('data-active', $(this).attr('data-active')==='true'?'false':'true');
        
        $(".value[data-active!='false']").each(function(){
            let button = $(this);
            const values = button.attr('data-value');
            sum += parseFloat(values);
        });

        if($("#gauge_savings_container").find("#250").attr('data-active')==='true'){
            $("#gauge_savings_container").find("#bar").css('left','270px');
        }

        if($("#gauge_savings_container").find("#100").attr('data-active')==='true'){
            $("#gauge_savings_container").find("#bar").css('left','405px');
        }

        if($("#gauge_savings_container").find("#1_1500").attr('data-active')==='true'){
            $("#gauge_savings_container").find("#bar").css('left','538px');
        }

        if($("#gauge_savings_container").find("#1500").attr('data-active')==='true'){
            $("#gauge_savings_container").find("#bar").css('left','670px');
        }

        $("#gauge_savings_container").find("#sum").text('$' +sum);

    });
});