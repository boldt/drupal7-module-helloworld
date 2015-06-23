(function ($) {
    // We need a Drupal behavior, because DOM is not ready when this file is loaded
    Drupal.behaviors.hello = {
        attach: function (context, settings) {
            
            // Handle delete
            var helloworldDelete = $(".helloworld-delete");
            helloworldDelete.each(function(index) {
                var that = $(this);
                that.click(function(){
                    console.log("DELETE " + that.data("id"));

                    $.ajax({
                        url: "drupal/?q=helloworld/rest/" + that.data("id"),
                        type : "DELETE",
                        success: function(result) {
                            var e = $("#helloworld-context-" + that.data("id"));
                            e.hide();
                        }
                    });
                });
            });
        }
    };

})(jQuery);
