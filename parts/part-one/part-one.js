(function ($, GLOBAL) {

    var PartOne = function () {
        this.template = 'parts/part-one/part-one.html';

        this.init = function (container, controller) {
            this.$container = $('#' + container);
            var horizontalSlide = new TimelineMax()
            // animate panels
                .to(this.$container.find('.sections'), 1, {x: "-20%"})
                .to(this.$container.find('.sections'), 1, {x: "-40%"})
                .to(this.$container.find('.sections'), 1, {x: "-60%"})
                .to(this.$container.find('.sections'), 1, {x: " -80 % "});

            // create scene to pin and link animation
            this.scene = new ScrollMagic.Scene({
                triggerElement: '#' + container,
                triggerHook: "onLeave",
                duration: "400%"
            })
                .setPin('#' + container)
                .setTween(horizontalSlide)
                //.addIndicators() // add indicators (requires plugin)
                .addTo(controller);
        }

    };

    if (GLOBAL.InfoGraphic) {
        var part = new PartOne();
        GLOBAL.InfoGraphic.loadPart(part);
    }


})(jQuery, window);