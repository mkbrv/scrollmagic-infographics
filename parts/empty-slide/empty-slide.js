(function ($, GLOBAL) {

    var PartOne = function (controller) {
        this.id = 'empty-slide';
        this.template = 'parts/empty-slide/empty-slide.html';

        this.init = function (controller) {

        }

    };

    if (GLOBAL.InfoGraphic) {
        var part = new PartOne();
        GLOBAL.InfoGraphic.loadPart(part);
    }


})(jQuery, window);