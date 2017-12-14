function canFold(field) {
    return field.getElementsByClassName('field').length > 0;
}

function getFoldableElements() {
    var fields = window.document.getElementsByClassName('field');
    var foldableFields = [];
    for (var i = 0; i < fields.length; i++){
        var field = fields[i];
        if (!canFold(field)) continue;
        foldableFields.push(field);
    }
    return foldableFields;
}

function enableFoldingClickActionForField() {
    var foldArea = this.parentNode.getElementsByTagName('div')[0];
    foldArea.style.display = foldArea.style.display == 'none' ? 'block' : 'none';
}

function enableFoldingClickAction() {
    var foldableFields = getFoldableElements();
    for (var i = 0; i < foldableFields.length; i++){
        var field = foldableFields[i];
        var foldLabel = field.getElementsByTagName('label')[0];
        foldLabel.removeEventListener('click', enableFoldingClickActionForField);
        foldLabel.addEventListener('click', enableFoldingClickActionForField);
    }
}

function foldAll() {
    var foldableFields = getFoldableElements();
    for (var i = 0; i < foldableFields.length; i++){
        var field = foldableFields[i];
        var foldArea = field.getElementsByTagName('div')[0];
        foldArea.style.display = 'none';
    }
}

function unfoldAll() {
    var foldableFields = getFoldableElements();
    for (var i = 0; i < foldableFields.length; i++){
        var field = foldableFields[i];
        var foldArea = field.getElementsByTagName('div')[0];
        foldArea.style.display = 'block';
    }
}

define({
    initUI: function(ui) {
        var enableFolding = window.document.createElement('button');
        enableFolding.addEventListener('click', enableFoldingClickAction);
        enableFolding.innerHTML = 'Enable embedded component folding';
        ui.getUIContainer().appendChild(enableFolding);

        var foldAllBtn = window.document.createElement('button');
        foldAllBtn.addEventListener('click', foldAll);
        foldAllBtn.innerHTML = 'Fold all';
        ui.getUIContainer().appendChild(foldAllBtn);

        var unfoldAllBtn = window.document.createElement('button');
        unfoldAllBtn.addEventListener('click', unfoldAll);
        unfoldAllBtn.innerHTML = 'Unfold all';
        ui.getUIContainer().appendChild(unfoldAllBtn);
    }
});