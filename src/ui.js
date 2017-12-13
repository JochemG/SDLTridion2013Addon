define({
    initUI: function() {
        var ui = document.createElement('div');
        ui.id = "myGmUI";
        ui.style.width = '300px';
        ui.style.height = '300px';
        ui.style.position = 'fixed';
        ui.style.bottom = '0';
        ui.style.right = '16px';
        ui.style.backgroundColor = 'red';
        document.body.appendChild(ui);
    },
    getUIContainer: function() {
        return window.document.getElementById('myGmUI');
    }
});