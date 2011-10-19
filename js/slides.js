(function($) {

        $.fn.extend({
            slider : function(options) {
                var that = $(this),
                    slides = that.find('ul'),
                    slide = slides.find('li'),
                    len = slide.length,
                    slideW = slide.width(),
                    slideH = slide.height(),
                    ctrlHtml = [],
                    configs = {
                        'direction' : 'horizon',
                        'method' : 'click',
                        'speed' : 500
                    },
                    options = $.extend(configs,options);

                    if(options.imgSet){
                        ctrlHtml.push('<div id="ctrl">');
                        for(var i = 0 , count = options.imgSet.length; i < count ; i++){
                            ctrlHtml.push(options.imgSet[i]);
                        }
                        ctrlHtml.push('</div>');
                        ctrlHtml = ctrlHtml.join('');

                        slides.css({
                                'position'  : 'absolute',
                                'top'       : '0',
                                'left'      : '0'
                        });

                        that.css({
                                'position'  : 'relative',
                                'border'    : '1px solid #000',
                                'height'    : slideH,
                                'width'     : slideW
                            }).after(ctrlHtml);

                        var btns = $('#ctrl').find('img');
                        $('#ctrl').delegate('img',options.method, function() {
                                var index = btns.index($(this));
                                switch(options.direction){
                                case 'vertical' : 
                                    slides.stop().animate({ 'top' : -index * slideH },options.speed);
                                    break;
                                case 'horizon' :
                                    slide.css({ 'float' : 'left' });
                                    slides.css({ 'width' : slideW * len }).stop().animate({ 'left' : -index * slideW } , options.speed);
                                }
                            });
                        var idx = 0;
                        var timeInterval = setInterval(function() {
                            var index = ++idx % btns.length;
                            btns.eq(index)[options.method]();
                        },3000);
                    }
                return this;
            }
        });

        $(function() {
            var imgSet = [
                '<img src="themes/images/content/content1.jpg" alt="" />',
                '<img src="themes/images/content/content2.jpg" alt="" />',
                '<img src="themes/images/content/content3.jpg" alt="" />',
                '<img src="themes/images/content/content4.jpg" alt="" />',
                '<img src="themes/images/content/content5.jpg" alt="" />',
                '<img src="themes/images/content/content6.jpg" alt="" />',
                '<img src="themes/images/content/content7.jpg" alt="" />',
                '<img src="themes/images/content/content8.jpg" alt="" />'
            ];
            $('#slider').slider({
                'imgSet': imgSet
            }); 
        });
    
})(jQuery);
