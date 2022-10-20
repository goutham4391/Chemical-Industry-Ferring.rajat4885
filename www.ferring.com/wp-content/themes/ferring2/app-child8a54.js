jQuery(window).ready(function () {
   jQuery('.header-wrap').css('top','0px');
});


jQuery(document).ready(function(){
/*jQuery('.header-search-form').submit(function (e) {
     e.preventDefault();
    // Get the search text value and trim it
    var srchval = jQuery.trim(jQuery('.header-search-form input[type=text]').val());
    // Check if empty of not
    if (srchval  == '') {
        
        return false;
    }
    else{
        return true;
        
    }
    
});*/
// 	var owl = jQuery(".owl-carousel");
// 	owl.owlCarousel({
// 	    margin: 10,
// 	    nav: true,
// 	    loop: true,
// 	    items: 1,
// 	    autoHeight: true,
// 	    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
// 	});
// 	owl.on("changed.owl.carousel", function(event) {
// 		var index = event.item.index - 3;
// 		//console.log(index);
// 		jQuery(".link").removeClass("selected");
// 		jQuery(".link[data-target='" + index + "']").addClass("selected");
// 	});
// 	jQuery(".link").click(function(){
// 		var index = jQuery(this).data("target");
// 		owl.trigger('to.owl.carousel', [index]);
// 	});

    // jQuery('.level2menu_one').each(function(){
    //     jQuery(this).closest('li').addClass('first_element');
    // });
    
    // jQuery('.level2menu_two').each(function(){
    //     jQuery(this).closest('li').addClass('second_element');
    // });
    
    // jQuery('.level2menu_three').each(function(){
    //     jQuery(this).closest('li').addClass('third_element');
    // });
    
    // jQuery('.level2menu_four').each(function(){
    //     jQuery(this).closest('li').addClass('fourth_element');
    // });
    
    jQuery('.mega-sub-menu').each(function(){
        
        jQuery(this).find('.widget_text:eq(0)').addClass('first_element');
        jQuery(this).find('.widget_text:eq(1)').addClass('second_element');
        jQuery(this).find('.widget_text:eq(2)').addClass('third_element');
        jQuery(this).find('.widget_text:eq(3)').addClass('fourth_element');
        jQuery(this).find('.widget_text:eq(4)').addClass('fifth_element');
        
        jQuery(this).find('.widget_nav_menu:eq(0)').addClass('first_menu_element');
        jQuery(this).find('.widget_nav_menu:eq(1)').addClass('second_menu_element');
        jQuery(this).find('.widget_nav_menu:eq(2)').addClass('third_menu_element');
        jQuery(this).find('.widget_nav_menu:eq(3)').addClass('fourth_menu_element');
        jQuery(this).find('.widget_nav_menu:eq(4)').addClass('fifth_menu_element');
    });
    
	jQuery(".link a").click(function(){
		return false;
	});
	
	jQuery(".widget_search #searchform div").click(function(e){
        var $me = jQuery(this),
            width = $me.outerWidth(),
            height = $me.outerHeight(),
            top = 11,
            left = $me.position().left;
                        
        var len = Math.sqrt(Math.pow(width - e.offsetX, 2) + Math.pow(e.offsetY, 2));
    
        if (len < 43){
            if(jQuery('#s').val() != ''){
            jQuery('#searchform').submit();
            }
        }
    });
	
    jQuery("li.menu-item:not(.mega-menu-item-has-children) > a:not(.mega-menu-link)").on('click', function(e) {
        jQuery(".mega-menu-open").removeClass("mega-menu-open");
        jQuery(".max-mega-menu").css('display', '');
    });
    
    jQuery('#menu-item-24858').click(function(){
        jQuery('html, body').animate({
          scrollTop: jQuery('#headline5').offset().top - 165
        }, 200);
    })
});

/* Max Mega Menu 
 * Close the main menu as soon as a menu item is clicked */
jQuery(".mega-menu").on('after_mega_menu_init', function() {
    jQuery("li.menu-item:not(.mega-menu-item-has-children) > a:not(.mega-menu-link)").on('click', function(e) {
        jQuery('.mega-menu').data('maxmegamenu').hideAllPanels();
    });
});

// duration of scroll animation
// var scrollDuration = 300;
// paddles
// var leftPaddle = document.getElementsByClassName('left-paddle');
// var rightPaddle = document.getElementsByClassName('right-paddle');

// console.log(leftPaddle);
// get items dimensions
// var itemsLength = jQuery('.link').length;
// var itemSize = jQuery('.link').outerWidth(true);
// get some relevant size for the paddle triggering point
// var paddleMargin = 20;

// get wrapper width
// var getMenuWrapperSize = function() {
// 	return jQuery('.scroll-wrapper').outerWidth();
// }
// var menuWrapperSize = getMenuWrapperSize();
// // the wrapper is responsive
// jQuery(window).on('resize', function() {
// 	menuWrapperSize = getMenuWrapperSize();
// });
// // size of the visible part of the menu is equal as the wrapper size
// var menuVisibleSize = menuWrapperSize;

// // get total width of all menu items
// var getMenuSize = function() {
// 	var taille = 0;
// 	jQuery('.link').each(function(){
// 		taille += jQuery(this).outerWidth(true);
// 	});
// 	return taille;
// };
// var menuSize = getMenuSize();
// // get how much of menu is invisible
// var menuInvisibleSize = menuSize - menuWrapperSize;

// // get how much have we scrolled to the left
// var getMenuPosition = function() {
// 	return jQuery('.scroll-menu').scrollLeft();
// };

// the wrapper is responsive
// jQuery(window).on('resize', function() {
// 	jQuery('.scroll-wrapper').each(function(){
// 		var menuWrapperSize = jQuery(this).outerWidth();
// 		jQuery(this).find('.scroll-menu').attr('data-wrapper-size', menuWrapperSize);
// 	});
// });

// jQuery('.scroll-wrapper').each(function(){
// 	//console.log('coucou');
// 	var elem = jQuery(this);

// 	// get wrapper width
// 	var getMenuWrapperSize = function() {
// 		return elem.outerWidth();
// 	}
// 	var menuWrapperSize = getMenuWrapperSize();
// 	elem.find('.scroll-menu').attr('data-wrapper-size', menuWrapperSize);
// 	// size of the visible part of the menu is equal as the wrapper size
// 	var menuVisibleSize = menuWrapperSize;

// 	// get total width of all menu items
// 	var getMenuSize = function() {
// 		var taille = 0;
// 		for (var j = 0, cj = elem.find('.link').length; j < cj; j++) {
// 			taille += elem.find('.link').eq(j).outerWidth(true);
// 		}
// 		return taille;
// 	};
// 	var menuSize = getMenuSize();
// 	elem.find('.scroll-menu').attr('data-menu-size', menuSize);
// 	// get how much of menu is invisible
// 	var menuInvisibleSize = menuSize - menuWrapperSize;
// 	elem.find('.scroll-menu').attr('data-menu-invisible-size', menuInvisibleSize);
// });

// // finally, what happens when we are actually scrolling the menu
// jQuery('.scroll-menu').on('scroll', function() {

// 	// get how much of menu is invisible
// 	menuInvisibleSize = jQuery(this).data('menu-invisible-size');
// 	// get how much have we scrolled so far
// 	var menuPosition = jQuery(this).scrollLeft();

// 	var menuEndOffset = menuInvisibleSize - paddleMargin;

// 	// show & hide the paddles
// 	// depending on scroll position
// 	if (menuPosition <= paddleMargin) {
// 		jQuery(this).next('.paddles').find('.left-paddle').addClass('hidden');
// 		jQuery(this).next('.paddles').find('.right-paddle').removeClass('hidden');
// 	} else if (menuPosition < menuEndOffset) {
// 		// show both paddles in the middle
// 		jQuery(this).next('.paddles').find('.left-paddle').removeClass('hidden');
// 		jQuery(this).next('.paddles').find('.right-paddle').removeClass('hidden');
// 	} else if (menuPosition >= menuEndOffset) {
// 		jQuery(this).next('.paddles').find('.left-paddle').removeClass('hidden');
// 		jQuery(this).next('.paddles').find('.right-paddle').addClass('hidden');
// }

// });

// // scroll to left
// jQuery('.right-paddle').on('click', function() {
// 	jQuery(this).parent().prev('.scroll-menu').animate( { scrollLeft: jQuery(this).parent().prev('.scroll-menu').data('menu-invisible-size') }, scrollDuration);
// });

// // scroll to right
// jQuery('.left-paddle').on('click', function() {
// 	jQuery(this).parent().prev('.scroll-menu').animate( { scrollLeft: '0' }, scrollDuration);
// });

//Centralized JS from custom
jQuery(".clickTo [href^='#']").click(function() {
    id=jQuery(this).attr("href");
    top_value = 155;
    if (jQuery(window).width()< 1025){
        top_value = 0;
    }
    jQuery('html, body').animate({
        scrollTop: jQuery(id).offset().top - top_value
    }, 2000);
    return false;
});

jQuery(".scroll-smart .col-sm-8 [href^='#']").click(function() {
    id=jQuery(this).attr("href");
    top_value = 155;
    if (jQuery(window).width()< 1025){
        top_value = 0;
    }
    jQuery('html, body').animate({
        scrollTop: jQuery(id).offset().top - top_value
    }, 2000);
    return false;
});

jQuery(".href_product").click(function() {
    id=jQuery(this).attr("href");
    var index = id.indexOf("#");
    if (index !== -1)
    {
        var hash = id.substring(index + 1);
        console.log(hash);
    }
    top_value = 155;
    if (jQuery(window).width()< 1025){
        top_value = 0;
    }
    jQuery('html, body').animate({
        scrollTop: jQuery('#'+hash).offset().top - top_value
    }, 2000);
    return false;
});

jQuery(".link-show-bloc").click(function() {
    jQuery(".hidden-bloc").toggleClass('show-bloc');
    jQuery(".content-long").toggleClass('open');
    jQuery(".contact_link_shw_open").toggleClass('contact_link_shw_visible');//01June2020
    return false;
});


jQuery(".link-show-job_pharma").click(function(event) {
    event.preventDefault();
    // jQuery('')
    jQuery(".hidden-job_pharma").toggleClass('show-bloc');
    // jQuery(".content-long").toggleClass('open');
    // jQuery(".contact_link_shw_open").toggleClass('contact_link_shw_visible');//01June2020
    return false;
});









    jQuery( '#gform_next_button_5_3' ).attr( 'disabled',true );

jQuery(function() { 
    
    if (jQuery('#gform_wrapper_5').find('form').length) {

    
jQuery('input').change(function(){
      
      
      if( jQuery("#input_5_4").val().length !== 0 && jQuery("#input_5_5").val().length !== 0 && jQuery("#input_5_6").val().length !== 0 && jQuery("#choice_5_7_1").is(':checked')) {
        jQuery('#gform_next_button_5_3').css( "background-color", "#0088ce");           
        jQuery( '#gform_next_button_5_3' ).attr( 'disabled', false ); 
      }else{
        jQuery('#gform_next_button_5_3').css( "background-color", "#ddd");           
        jQuery( '#gform_next_button_5_3' ).attr( 'disabled', true );
      }

                                 
});
 
      jQuery('input').trigger('change');
     
      
    }

});

       
         
/*jQuery('.topCollapse').click(function(){
    jQuery('.mainCollapse').fadeToggle("slow");
}); */  

jQuery( document ).ready(function() {
    
    jQuery("#slider-home .caption-content").each(function() {
      var titre = jQuery(this).children('.caption-title').text();
      var classAll = jQuery(this).attr('class');
      jQuery(this).addClass(titre);
      
    });
    
    setTimeout(function(){ 
        var titreClass = jQuery('.caption-active .caption-title').text();
        jQuery('#slider-home .swift-slider').addClass(titreClass);
    }, 1500);
    
    jQuery("#slider-home .swift-slider-prev" ).on( "click", function() {
        
        setTimeout(function(){ 
            var titreClass = jQuery('.caption-active .caption-title').text();
              jQuery('#slider-home .swift-slider').removeClass('orange');
              jQuery('#slider-home .swift-slider').removeClass('orangeorange');
              jQuery('#slider-home .swift-slider').removeClass('blue');
              jQuery('#slider-home .swift-slider').removeClass('blueblue');
              jQuery('#slider-home .swift-slider').removeClass('pink');
              jQuery('#slider-home .swift-slider').removeClass('pinkpink');
              jQuery('#slider-home .swift-slider').removeClass('green');
              jQuery('#slider-home .swift-slider').removeClass('greengreen');
              jQuery('#slider-home .swift-slider').removeClass('purple');
              jQuery('#slider-home .swift-slider').removeClass('purplepurple');
              jQuery('#slider-home .swift-slider').removeClass('grey');
              jQuery('#slider-home .swift-slider').removeClass('greygrey');
              jQuery('#slider-home .swift-slider').addClass(titreClass);
            
        }, 1000);
    });
    
    jQuery("#slider-home .swift-slider-next" ).on( "click", function() {
        
        setTimeout(function(){ 
            var titreClass = jQuery('.caption-active .caption-title').text();
              jQuery('#slider-home .swift-slider').removeClass('orange');
              jQuery('#slider-home .swift-slider').removeClass('orangeorange');
              jQuery('#slider-home .swift-slider').removeClass('blue');
              jQuery('#slider-home .swift-slider').removeClass('blueblue');
              jQuery('#slider-home .swift-slider').removeClass('pink');
              jQuery('#slider-home .swift-slider').removeClass('pinkpink');
              jQuery('#slider-home .swift-slider').removeClass('green');
              jQuery('#slider-home .swift-slider').removeClass('greengreen');
              jQuery('#slider-home .swift-slider').removeClass('purple');
              jQuery('#slider-home .swift-slider').removeClass('purplepurple');
              jQuery('#slider-home .swift-slider').removeClass('grey');
              jQuery('#slider-home .swift-slider').removeClass('greygrey');
              jQuery('#slider-home .swift-slider').addClass(titreClass);
            
        }, 1000);
    });
    
    jQuery("#slider-home .dot" ).on( "click", function() {
        
        setTimeout(function(){ 
            var titreClass = jQuery('.caption-active .caption-title').text();
              jQuery('#slider-home .swift-slider').removeClass('orange');
              jQuery('#slider-home .swift-slider').removeClass('orangeorange');
              jQuery('#slider-home .swift-slider').removeClass('blue');
              jQuery('#slider-home .swift-slider').removeClass('blueblue');
              jQuery('#slider-home .swift-slider').removeClass('pink');
              jQuery('#slider-home .swift-slider').removeClass('pinkpink');
              jQuery('#slider-home .swift-slider').removeClass('green');
              jQuery('#slider-home .swift-slider').removeClass('greengreen');
              jQuery('#slider-home .swift-slider').removeClass('purple');
              jQuery('#slider-home .swift-slider').removeClass('purplepurple');
              jQuery('#slider-home .swift-slider').removeClass('grey');
              jQuery('#slider-home .swift-slider').removeClass('greygrey');
              jQuery('#slider-home .swift-slider').addClass(titreClass);
            
        }, 1000);
    });
    
    
    jQuery('a').each(function() {
       var a = new RegExp('/' + window.location.host + '/');
       if (!a.test(this.href)) {
          jQuery(this).attr("target","_blank");
       }
    });
    
    
    var urlChld = location.hash;
    if(urlChld.length){
        if(urlChld === '#reproductive-section' || urlChld === '#gastro-section' || urlChld === '#urology-section' || urlChld === '#endocrinology-section' || urlChld === '#ortho-section'){
            jQuery('html, body').animate({
                scrollTop: jQuery(urlChld).offset().top - 120
            }, 2000);
        }
        if(urlChld === '#boards-directors'){
            setTimeout(function(){
              jQuery('.boards-director').click();
              jQuery('body').addClass('page-current-boards');
            }, 4000);
        }
        if(urlChld === '#executive-committee'){
            setTimeout(function(){
              jQuery('.executive-committee').click();
              jQuery('body').addClass('page-current-executive');
            }, 4000);
        }
    }
    
    
    
   jQuery('.directory-category-option').each(function ()
      {
           
           var $this = jQuery(this),
           numberOfOptions = jQuery(this).children('option').length;
           

           $this.addClass('hide-select');
           $this.after('<div class="newSelect"></div>');

           var $newSelect = $this.next('div.newSelect');
           $newSelect.text($this.children('option').eq(0).text());

           var $list = jQuery('<ul />',
           {
                'class': 'options'
           }).insertAfter($newSelect);

           for (var i = 0; i < numberOfOptions; i++)
           {
                jQuery('<li />',
                {
                     text: $this.children('option').eq(i).text(),
                     rel: $this.children('option').eq(i).val(),
                     class: $this.children('option').eq(i).val()
                }).appendTo($list);
           }

           var $listItems = $list.children('li');

           $newSelect.click(function (e)
           {
                e.stopPropagation();
                jQuery('div.newSelect.active').each(function ()
                {
                     jQuery(this).removeClass('active').next('ul.options').hide();
                });
                jQuery(this).toggleClass('active').next('ul.options').toggle();
          });

           $listItems.click(function (e)
           {
                e.stopPropagation();
                $newSelect.text(jQuery(this).text()).removeClass('active');
                $this.val(jQuery(this).attr('rel'));
                $listItems.removeClass('checkList');
                jQuery(this).addClass('checkList');
                $list.hide();
           });
           
           if(jQuery('.locator-rd').length){
               jQuery('.research-development').click();
           }
           if(jQuery('.locator-ps').length){
               jQuery('.production-sites').click();
           }
           
           setTimeout(function(){
                var selectedCat = $this.children('option:selected').val();
                jQuery("."+selectedCat).click();
            }, 3000);
           

           jQuery(document).click(function ()
           {
                $newSelect.removeClass('active');
                $list.hide();
           });
      });
      
      

});

jQuery(function() {

    jQuery(".locator-rd select option").each(function(){
      if (jQuery(this).text() == "Research & Development"){
        jQuery(this).attr("selected","selected");
      }
    });
    
    jQuery(".locator-dis select option").each(function(){
      if (jQuery(this).text() == "DISTRIBUTOR"){
        jQuery(this).attr("selected","selected");
      }
    });
       
    	
   if(jQuery('.scroll-smart').length){
      var fixmeTop = jQuery('.scroll-smart').offset().top - 80;
    }
    if(jQuery('.remove-scroll').length){
      var fixmeTop2 = jQuery('.remove-scroll').offset().top - 495;
    }
    
   if(jQuery('.page-id-18977 .scroll-smart').length){
      var fixmeTop = jQuery('.scroll-smart').offset().top - 80;
      //var fixmeTop = jQuery('.scroll-smart').offset().top - 365;
    }
    if(jQuery('.page-id-18977 .remove-scroll').length){
      var fixmeTop2 = jQuery('.remove-scroll').offset().top - 600;
    }  

    jQuery(window).scroll(function () {
      var currentScroll = jQuery(window).scrollTop();
      if(currentScroll >= fixmeTop){
      jQuery('.clickTo').addClass('stick');
        jQuery('.clickTo').removeClass('stckbottom');
      }else{
      jQuery('.clickTo').removeClass('stick');
      jQuery('.clickTo').removeClass('stckbottom');
      }
      if(currentScroll >= fixmeTop2) {
      jQuery('.clickTo').removeClass('stick');
      jQuery('.clickTo').addClass('stckbottom');
      }
    });
   
   });
 
/*Cookie consent Decline PopUp script*/
    jQuery(document).on('click','#ct-ultimate-gdpr-cookie-read-more',function() {
        jQuery('#ct-ultimate-gdpr-cookie-popup').addClass('hideCookie');
    });
/*Cookie consent Decline PopUp script*/
   
   jQuery(".header-search-link ").click(function() {
       jQuery( ".header-search-wrap.sub-menu" ).toggle();
   });
    
        jQuery( ".single-post .taxonomy.category" ).clone().prependTo( ".content-wrap" );
        jQuery( ".page-heading" ).clone().insertAfter( ".respDesignClass" );
        jQuery( ".btnBack" ).clone().insertAfter( "article.single-team" );        
        jQuery( ".single-team .post-team" ).clone().insertBefore( ".body-text" );

        jQuery(document).on('click', '#gform_next_button_5_3', function () {
             jQuery('.tabs .second').addClass(' current');
         });
         jQuery(document).on('click', '#gform_previous_button_5_9',function () {
             jQuery('.tabs .second').removeClass(' current');
         });         
         jQuery(document).on('click', '#gform_next_button_5_9', function () {
             jQuery('.tabs .third').addClass(' current');
         }); 
         jQuery(document).on('click', '#gform_previous_button_5',function () {
             jQuery('.tabs .third').removeClass(' current');
         });




function hookSearchClick() {
    var o = jQuery('.aux-search');
    var n = o.clone();
    o.remove();
    jQuery('.header-right').append(n)
    
    jQuery('.header-search-link').click(function () {
        jQuery(".header-search-wrap").toggleClass("searchAppear");
        jQuery(".header-search-wrap input").focus();
    })
}
setTimeout(hookSearchClick, 1000)

var SPB=SPB||{};

SPB.teamMemberAjax = {
    init:function(){jQuery(document).on("click",".team-member-ajax",function(e){if(SPB.var.isMobile||SPB.var.window.width()<1e3)return e;e.preventDefault(),SPB.var.body.addClass("sf-team-ajax-will-open"),SPB.var.body.addClass("sf-container-block sf-ajax-loading"),jQuery(".sf-container-overlay").animate({opacity:1},300);var a=jQuery(this).data("id");jQuery.post(ajaxurl,{action:"spb_team_member_ajax",post_id:a},function(e){var a=jQuery(e).filter("#postdata").html();SPB.var.body.append('<div class="sf-team-ajax-container"></div>'),jQuery(".sf-team-ajax-container").html(a),setTimeout(function(){jQuery(".sf-container-overlay").addClass("loading-done"),SPB.var.body.addClass("sf-team-ajax-open"),jQuery(".sf-container-overlay").on("click touchstart",SPB.teamMemberAjax.closeOverlay)},300)})}),jQuery(document).on("click",".team-ajax-close",function(e){e.preventDefault(),SPB.teamMemberAjax.closeOverlay()})},closeOverlay:function(){SPB.var.body.removeClass("sf-team-ajax-open"),jQuery(".sf-container-overlay").off("click touchstart").animate({opacity:0},5,function(){SPB.var.body.removeClass("sf-container-block"),SPB.var.body.removeClass("sf-team-ajax-will-open"),jQuery(".sf-team-ajax-container").remove(),jQuery(".sf-container-overlay").removeClass("loading-done")})}
}

SPB.teamMemberAjax.init();

jQuery(window).load(function(){
    if (window.location.hash){
	    var scrolltop_value;
	    var url = location.href.replace(/\/$/, "");
	    console.log(url.split("#")[1]);
	    if (url.split("#")[1] == 'headline5' && jQuery(window).width() > 1024){
	       // scrolltop_value = 265 + jQuery('#headline5').offset().top;
	       setTimeout(function(){ 
    	        jQuery('html, body').animate({
                  scrollTop: jQuery('#headline5').offset().top - 165
                }, 200);
            }, 1300);

	    }
	}
})
