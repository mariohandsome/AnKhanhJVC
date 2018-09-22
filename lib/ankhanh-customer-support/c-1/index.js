function navCollapseAllPanels3() {
	var searchTerm, panelContainerId;
	$.expr[':'].containsCaseInsensitive = function (n, i, m) {
		return jQuery(n).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};

	$('.canhcam-ankhanh-customer-support-c-1 #accordion_search_bar').on('change keyup paste click', function () {
		searchTerm = $(this).val();
		$('.canhcam-ankhanh-customer-support-c-1 #accordion > .card').each(function () {
			panelContainerId = '#' + $(this).attr('id');
			$(panelContainerId + ':not(:containsCaseInsensitive(' + searchTerm + '))').hide();
			$(panelContainerId + ':containsCaseInsensitive(' + searchTerm + ')').show();
		});
	});
	$(".canhcam-ankhanh-customer-support-c-1 #accordion .card").on("click", function () {
		checkClickPanel3($(this))
	})
}

function checkOpenPanel3() {
	$('.canhcam-ankhanh-customer-support-c-1 #accordion .card').each(function () {
		var getactive = $(this).find('.collapse.show').length
		if (getactive > 0) {
			$(this).addClass('active')
		} else {
			$(this).removeClass('active')
		}
	})
}
function checkClickPanel3(e) {
	var name = e.find('a').attr('href')
	$(name).on('hidden.bs.collapse', function () {
		e.removeClass('active')
	})
	$(name).on('shown.bs.collapse', function () {
		e.addClass('active')
	})
}

function navCollapseForm3() {
	$('.canhcam-ankhanh-customer-support-c-1 .validator').validator().on('submit', function (e) {
		if (e.isDefaultPrevented()) {
		} else {
			$(this)[0].reset();
		}
	})
};

$(function () {
	navCollapseForm3();
})


$(document).ready(function () {

	navCollapseAllPanels3()
	checkOpenPanel3()

});
