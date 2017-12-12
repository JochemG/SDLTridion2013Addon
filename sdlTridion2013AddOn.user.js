// ==UserScript==
// @name         SDL Tridion 2013 AddOn
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*tridion*
// @grant        none
// @run-at document-end
// ==/UserScript==
(function() {
    'use strict';
    if (window.top != window.self) {
        return;
    }


    //
    // RequireJS over here!
    //
    function runRequireJs() {
        require.config({
            baseUrl: 'https://rawgit.com/JochemG/SDLTridion2013Addon/master/'
        });
        require(['main']);
    }
    if (typeof window.requirejs === 'undefined') {
        var s = window.document.createElement('script');
        s.src = 'https://rawgit.com/JochemG/SDLTridion2013Addon/master/require.js';
        s.addEventListener('load', function() {
            runRequireJs();
        });
        window.document.body.appendChild(s);
    } else {
        runRequireJs();
    }
})();