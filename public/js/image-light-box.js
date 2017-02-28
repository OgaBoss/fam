$(document).ready(function() {
	var imgsrc = "";
	var altertext = "";
	var openedImages = "";
	$(".image_description").click(function() {
		openedImages = $(this);
		imgsrc = $(this).parent().find("img").attr("src");
		altertext = $(this).parent().find("img").attr("alt");
		if ($(openedImages).parent().is(':last-child')) {
			$(".next_image_btn").hide();
		} else {
			$(".next_image_btn").show();
		}
		if ($(openedImages).parent().is(':first-child')) {
			$(".previous_image_btn").hide();
		} else {
			$(".previous_image_btn").show();
		}
	});
	$('#image_lightbox').on('show.bs.modal', function(e) {
		$("#image_lightbox").find("img").attr("src", imgsrc);
		$("#image_lightbox_label").html(altertext);
	});
	$(".next_image_btn").click(function() {
		openedImages = $(openedImages).parent().next();
		$(".previous_image_btn").show();
		if ($(openedImages).is(':last-child')) {
			$(this).hide();
		} else {
			$(this).show();
		}
		imgsrc = $(openedImages).find("img").attr("src");
		altertext = $(openedImages).find("img").attr("alt");
		openedImages = $(openedImages).find(".image_description");
		$("#image_lightbox").find("img").fadeOut("slow", function() {
			$("#image_lightbox").find("img").attr("src", imgsrc);
			$("#image_lightbox_label").html(altertext);
			$("#image_lightbox").find("img").fadeIn("slow");
		});
	});
	$(".previous_image_btn").click(function() {
		$(".next_image_btn").show();
		openedImages = $(openedImages).parent().prev();
		if ($(openedImages).is(':first-child')) {
			$(this).hide();
		} else {
			$(this).show();
		}
		imgsrc = $(openedImages).find("img").attr("src");
		altertext = $(openedImages).find("img").attr("alt");
		openedImages = $(openedImages).find(".image_description");
		$("#image_lightbox").find("img").fadeOut("slow", function() {
			$("#image_lightbox").find("img").attr("src", imgsrc);
			$("#image_lightbox_label").html(altertext);
			$("#image_lightbox").find("img").fadeIn("slow");
		});
	});
}); 