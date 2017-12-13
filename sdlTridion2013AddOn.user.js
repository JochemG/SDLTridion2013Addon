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

    function tridionLoaded() {
        return window.document.getElementsByTagName('div').length > 1;
    }

    var intervalHandle = window.setInterval(function() {
        if (!tridionLoaded()) return;
        window.clearInterval(intervalHandle);
        //
        // RequireJS over here!
        //
        var gitBaseUrl = 'https://rawgit.com/JochemG/SDLTridion2013Addon/master/';
        var localBaseUrl = 'http://127.0.0.1:8000/';
        var baseUrl = localBaseUrl;
        function runRequireJs(GMRequire) {
            window.require = window.require || GMRequire;
            window.require.config({
                baseUrl: baseUrl
            });
            window.require(['main']);
        }

        if (!window.require) {
            var s = window.document.createElement('script');
            s.src = baseUrl + 'require.js';
            s.addEventListener('load', function() {
                runRequireJs(require);
            });
            window.document.head.appendChild(s);
        } else {
            runRequireJs(window.require);
        }
    }, 100);
})();