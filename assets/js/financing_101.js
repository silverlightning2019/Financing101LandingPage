/** 
*   DOCU:
*   Last updated at: September 20, 2022
*   @author Silver
*/

$(document).ready(function(){
    
    $("body")
        .on("click",".value_rectangle", function(){
            let clicked_value_rectangle = $(this);
            let gauge_savings_bar = $(".gauge_savings_bar");
            let total_potential_savings = 0;

            $(".value_rectangle").removeClass("active");
            clicked_value_rectangle.addClass("active");
            clicked_value_rectangle.prevAll().addClass("active");
            
            $(".value_rectangle.active").each(function(){
                let values = $(this).attr('data-value');
                total_potential_savings += parseFloat(values);
            });
            
            gauge_savings_bar.removeClass("gauge_savings_350 gauge_savings_1850 gauge_savings_3350");
            gauge_savings_bar.addClass('gauge_savings_'+ total_potential_savings);

            $("#gauge_total_potential_savings").text('$'+ total_potential_savings);
        })
        .on("click","#footer_scroll", function(){
            $('html,body').scrollTop(0);
        });
});