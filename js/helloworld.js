(function ($) {

    var p = "drupal/?q=";

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
                        url: p + "rest/helloworld/" + that.data("id"),
                        type : "DELETE",
                        success: function(result) {
                            var e = $("#helloworld-context-" + that.data("id"));
                            e.hide();
                        }
                    });
                });
            });

            var helloworldCreate = $(".helloworld-create");
            helloworldCreate.click(function(){

                var e = {
                    title : $("#helloworld-title").val(),
                    text : $("#helloworld-text").val()
                };

                $.ajax({
                    url: p + "rest/helloworld",
                    type : "POST",
                    data: e,
                    dataType: 'json',
                    success: function(result) {
                        console.log("Success: " + result.id);
                        console.log(result);
                        location.reload(); // FIXME
                    }
                });

            });

        }
    };

})(jQuery);
