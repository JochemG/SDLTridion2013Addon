require([
        'src/ui',
        'src/addons/foldableEmbeddedComponents',
        'src/addons/assistScreenCaptureExtensions'],
    function(ui, foldableEmbeddedComponent, assistScreenCaptureExtensions) {
        ui.initUI();
        foldableEmbeddedComponent.initUI(ui);
        assistScreenCaptureExtensions.initUI(ui);
    }
);