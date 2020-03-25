(function($) {
  $("body").on("click", "a[data-notice]", function(evt) {
    evt.preventDefault();
    const link = $(this);
    const target = $(`div.notice#${link.attr("data-notice")}`);

    if (!!target.length) {
      target.attr("style", "display: flex !important");
    }
  });

  $("body").on("click", "div.notice span.close", function() {
    const popup = $(this).closest(".notice");

    if (!!popup.length) {
      popup.hide();
    }
  });
})(jQuery);
