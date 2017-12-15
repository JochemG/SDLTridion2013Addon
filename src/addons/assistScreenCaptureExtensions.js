function enableAssistScreenCapture() {
    window.document.body.style.overflow = 'visible';
    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        var iframe = iframes[i];
        var height = getComputedStyle(iframe.contentDocument.body).height;
        iframe.style.height = height;
    }
}

define({
    initUI: function(ui) {
        var group = ui.createNewUIGroup('Screen capture assistance');
        var enableAssistScreenCaptureBtn = window.document.createElement('button');
        enableAssistScreenCaptureBtn.addEventListener('click', enableAssistScreenCapture);
        enableAssistScreenCaptureBtn.innerHTML = 'Assist screencapture extensions';
        group.appendChild(enableAssistScreenCaptureBtn);
    }
});