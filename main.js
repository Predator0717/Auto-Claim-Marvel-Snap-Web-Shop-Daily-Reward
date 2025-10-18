// ==UserScript==
// @name         Auto Claim Marvel Snap Web Shop Daily Reward
// @match        https://shop.marvelsnap.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function clickButton() {
        let btn = document.querySelector("#buy-button-dailyfree100credits");
        if (btn) {
            btn.click();
            console.log("✅ Credit received");
        } else {
            console.log("❌ button note found");
        }
    }

    // delay the click 3 seconds after loading the webpage
    window.addEventListener('load', () => {
        setTimeout(clickButton, 3000);
    });
})();
