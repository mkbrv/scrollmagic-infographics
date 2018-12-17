(function ($, GLOBAL) {

    var InfoGraphic = GLOBAL.InfoGraphic || new function () {

        this.init = function () {
            this.controller = new ScrollMagic.Controller();
            this.$container = $('#db-infographics');
        };

        this.uniqueId = function () {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        };

        this.loadPart = function (part) {
            var sectionId = this.uniqueId(),
                $partContainer = $('<section class="db-infographics__scene" id="' + sectionId + '"></section>'),
                self = this;
            this.$container.append($partContainer);
            $.get(part.template, function (data) {
                $partContainer.html(data);
                part.init(sectionId, self.controller);
            });
        };

    };

    if (!GLOBAL.InfoGraphic) {
        GLOBAL.InfoGraphic = InfoGraphic;
        InfoGraphic.init();
    }


})(jQuery, window);