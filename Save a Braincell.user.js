// ==UserScript==
// @name         Save a Braincell
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hide youtube comments with a click of a button
// @author       Alec Weber
// @match        https://www.youtube.com/*
// @grant        GM_addStyle
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';
    
    function hideTheComments() {
        if ($('#save-braincell').html() == "Show Comments") {
            $('#watch-discussion').toggleClass('toggleComments');
        }
    }
    
    waitForKeyElements('#watch7-content', hideTheComments);
        
    
    
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Hide Comments");
    btn.appendChild(t);
    btn.setAttribute("id", "save-braincell");
    btn.setAttribute("class", "yt-uix-button");
    document.getElementById("yt-masthead-signin").appendChild(btn);
    
    $("<style>")
    .prop("type", "text/css")
    .html(`
    .toggleComments {
        display: none !important;
    }`)
    .appendTo("head");
    
    
    GM_addStyle(`#save-braincell { background-color: #e62117;
                                   color: white }`);
    
    
    $("#save-braincell").click(function() {
        //GM_addStyle("#watch-discussion { display: none !important; }");
        $("#watch-discussion").toggleClass("toggleComments");
        if ($('#save-braincell').html() == "Hide Comments") {
            $("#save-braincell").html("Show Comments");
        } else {
            $("#save-braincell").html("Hide Comments");
        }
    });

    //GM_addStyle("#watch-discussion { display: none !important; }");
})();