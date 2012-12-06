
if(!Modernizr.input.placeholder){ // comment
    $('input, textarea').each(function(){                                                                       
        var self = $(this),
            placeholderText = self.attr('placeholder'),
            label = self.parent().find($('label')); 

        if(placeholderText){
            label
                .show()
                .css({
                    width: self.width(),
                    height: self.height()
                });

            self.on('focus', function(){
                label.hide();
            })
            .on('blur', function(){
                if (self.attr('value') == '') {
                    label.show();
                }
            });
        }                                                                              
    });
}

