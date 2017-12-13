function canFold(field) {
    return field.getElementsByClassName('field').length > 0;
}

define({
    initUI: function(ui) {
        var checkBox = window.document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.name = 'foldableEmbeddedComponentsCheckbox';
        checkBox.addEventListener('click', function() {
            var fields = window.document.getElementsByClassName('field');
            for (var i = 0; i < fields.length; i++){
                var field = fields[i];
                if (!canFold(field)) continue;
                field.getElementsByTagName('label')[0].addEventListener('click', function() {
                    var foldArea = this.parentNode.getElementsByTagName('div')[0];
                    foldArea.style.display = foldArea.style.display == 'none' ? 'block' : 'none';
                })
            }
        });
        var label = window.document.createElement('label');
        label.htmlFor = 'foldableEmbeddedComponentsCheckbox';
        label.innerHTML = 'Enable embedded component folding';
        ui.getUIContainer().appendChild(checkBox);
        ui.getUIContainer().appendChild(label);
    }
});