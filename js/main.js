/*
* NAVIGATION
*/
'use strict';

/*
* SWIPEBOX
*/
$(document).ready(function() {
    /* Basic Gallery */
    $('.swipebox').swipebox();
    /* Video */
    $('.swipebox-video').swipebox();
});

/*
* DROPDOWN
*/
$(document).on('change', '.div-toggle', function() {
    var target = $(this).data('target');
    var show = $("option:selected", this).data('show');
    $(target).children().addClass('hide');
    $(show).removeClass('hide');
});
$(document).ready(function() {
    $('.div-toggle').trigger('change');
});

// /*
// * SHOP
// */
// var App = (function() {

//     //=== Private Variables ===//
//     var gallery = $('#js-gallery');

//     //=== Gallery Object ===//
//     var Gallery = {
//         zoom: function(imgContainer, img) {
//             var containerHeight = imgContainer.outerHeight(),
//                 src = img.attr('src');
//         },
//         switch: function(trigger, imgContainer) {
//             var src = trigger.attr('href'),
//                 thumbs = trigger.siblings(),
//                 img = trigger.parent().prev().children();

//             // Add active class to thumb
//             trigger.addClass('is-active');

//             // Remove active class from thumbs
//             thumbs.each(function() {
//                 if ($(this).hasClass('is-active')) {
//                     $(this).removeClass('is-active');
//                 }
//             });

//             // Reset container if in zoom state
//             if (gallery.hasClass('is-zoomed')) {
//                 gallery.removeClass('is-zoomed');
//                 imgContainer.css("height", "auto");
//             }

//             // Switch image source
//             img.attr('src', src);
//         }
//     };

//     //=== Public Methods ===//
//     function init() {

//         // Listen for clicks on anchors within gallery
//         gallery.delegate('a', 'click', function(event) {
//             var trigger = $(this);
//             var triggerData = trigger.data("gallery");

//             if (triggerData === 'zoom') {
//                 var imgContainer = trigger.parent(),
//                     img = trigger.siblings();
//                 Gallery.zoom(imgContainer, img);
//             } else if (triggerData === 'thumb') {
//                 var imgContainer = trigger.parent().siblings();
//                 Gallery.switch(trigger, imgContainer);
//             } else {
//                 return;
//             }

//             event.preventDefault();
//         });

//     }

//     //=== Make Methods Public ===//
//     return {
//         init: init
//     };

// })();

// App.init();


/*
* AVATAR CHANGE
*/
$(document).ready(function() {
    $('#btnClick').on('click', function() {
        if ($('#1').css('display') != 'none') {
            $('#2').html($('#static').html()).show().siblings('div').hide();
        } else if ($('#2').css('display') != 'none') {
            $('#1').show().siblings('div').hide();
        }
    });
});

/*
* FAQ
*/
$(document).ready(function(){
    $(".open").click(function() {
        var container = $(this).parents(".topic");
        var answer = container.find(".body-text-secondary");
        var trigger = container.find(".faq-t");

        answer.slideToggle(200);

        if (trigger.hasClass("faq-o")) {
            trigger.removeClass("faq-o");
        } else {
            trigger.addClass("faq-o");
        }

        if (container.hasClass("expanded")) {
            container.removeClass("expanded");
        } else {
            container.addClass("expanded");
        }
    })
});

/*
* MODAL
*/
$(document).ready(function() {
    $('.trigger-modal').click(function() {
        $('.modal-wrapper').toggleClass('open');
        // $('main').toggleClass('blur');
        return false;
    });
});

/*
* CARD STACK
*/
document.addEventListener('DOMContentLoaded', function () {

    var stack;

    stack = window.swing.Stack();

    [].forEach.call(document.querySelectorAll('.stack li'), function (targetElement) {
        stack.createCard(targetElement);

        targetElement.classList.add('in-deck');
    });

    stack.on('throwout', function (e) {
        console.log(e.target.innerText || e.target.textContent, 'has been thrown out of the stack to the', e.throwDirection, 'direction.');

        e.target.classList.remove('in-deck');
    });

    stack.on('throwin', function (e) {
        console.log(e.target.innerText || e.target.textContent, 'has been thrown into the stack from the', e.throwDirection, 'direction.');

        e.target.classList.add('in-deck');
    });

    stack.on('throwout', function (e) {
        e.target.querySelector('img');
    });

    stack.on('throwin', function (e) {
        e.target.querySelector('img');
    });
});