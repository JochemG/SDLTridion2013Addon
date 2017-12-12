"use strict";
class AddOn {
    constructor() {
        this.onLoadCallback = null;
    }
    addOnLoadEventListener(onLoadCallback) {
        this.onLoadCallback = onLoadCallback;
    }
    onLoad() {
        this.onLoadCallback && this.onLoadCallback();
    }
};
exports.AddOn = AddOn;
