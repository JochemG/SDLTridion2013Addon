require([
    'src/ui',
    'src/addons/foldableEmbeddedComponents'],
    function(ui, foldableEmbeddedComponent) {
        ui.initUI();
        foldableEmbeddedComponent.initUI(ui);
    }
);