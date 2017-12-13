// ==UserScript==
// @name         SDL Tridion 2013 AddOn
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Extra functionality that Tridion doesn't offer out of the box.
// @author       Jochem Geussens
// @include      http://*tridion*
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
    var gitBaseUrl = 'https://rawgit.com/JochemG/SDLTridion2013Addon/master/';
    var localBaseUrl = 'http://127.0.0.1:8000/';
    var baseUrl = localBaseUrl;
    function runRequireJs() {
        require.config({
            baseUrl: baseUrl
        });
        require(['main']);
    }
    if (typeof window.requirejs === 'undefined') {
        var s = window.document.createElement('script');
        s.src = baseUrl + 'require.js';
        s.addEventListener('load', function() {
            runRequireJs();
        });
        window.document.body.appendChild(s);
    } else {
        runRequireJs();
    }
})();