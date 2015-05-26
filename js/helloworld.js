(function ($) {
    // We need a Drupal behavior, because DOM is not ready when this file is loaded
    Drupal.behaviors.hello = {
        attach: function (context, settings) {
            var hello = $('#hello');
            var colors = ['red', 'green', 'blue', 'yellow', 'orange'];
            if(hello.length > 0) {
                var p = $('<p>Hello World!</p>');
                var button = $('<button class="btn">Change color</button>');
                hello.append(p, button);

                // This function updates the color of the `p`-element on each click
                var i = 0;
                button.click(function() {
                    p.css('color', colors[i]);
                    i = (i + 1) % colors.length;
                });
            }
        }
    };

})(jQuery);
