$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $('.TabArea').hide();
	var active_tab = $('.room_dimensions_type a.active').attr('id');
	$('.TabArea.'+active_tab).show();

    $('.room_dimensions_type a').click(function(){
    	var current_tab = $(this).attr('id');
    	$('.TabArea').hide();
    	$('.'+current_tab).show();
    	$('.room_dimensions_type a.active').removeClass();
    	$(this).addClass('active');    	
    });

    jQuery(".show-hide-detail").hide();
    jQuery(".show-hide-detail:first").show();
    jQuery(".show-hide-btn a").click(function() {
        var thid_data = jQuery(this).attr('data-id');
        jQuery(".show-hide-btn a").removeClass('active');
        jQuery(this).addClass('active');
        if (!jQuery("#" + thid_data).is(":visible")) {
            jQuery(".show-hide-detail").hide();
            jQuery("#" + thid_data).show();
        }
    });

    jQuery('.inner-faq-panel-heading img').click(function(){
        $(this).next().trigger("click");
    });             
    jQuery('.inner-faq-panel-heading a').first().trigger("click");

});