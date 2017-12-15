function toggleShow() {
    var ui = window.document.getElementById('myGmUI');
    var myGmUIGroupsContainer = window.document.getElementById('myGmUIGroupsContainer');
    var visibleValue = '16px';
    var hiddenValue = (-300 + 16) + 'px';

    ui.style.right = ui.style.right === visibleValue ? hiddenValue : visibleValue;
    myGmUIGroupsContainer.style.display = ui.style.right === visibleValue ? 'block' : 'none';
}

define({
    initUI: function() {
        var ui = document.createElement('div');
        ui.id = "myGmUI";
        ui.style.width = '300px';
        ui.style.height = '300px';
        ui.style.position = 'fixed';
        ui.style.bottom = '0';
        ui.style.right = '16px';
        document.body.appendChild(ui);

        var hideButton = document.createElement('div');
        hideButton.style.width = '30px';
        hideButton.style.height = '30px';
        hideButton.style.position = 'relative';
        hideButton.style.left = '-30px';
        hideButton.style.top = '30px';
        hideButton.style.backgroundColor = 'red';
        hideButton.style.fontSize = '25px';
        hideButton.style.fontWeight = 'bolder';
        hideButton.innerHTML = '>';
        hideButton.addEventListener('click', toggleShow);
        ui.appendChild(hideButton);

        var groupsContainer = document.createElement('div');
        groupsContainer.id = "myGmUIGroupsContainer";
        groupsContainer.style.width = '100%';
        groupsContainer.style.height = '100%';
        groupsContainer.style.position = 'relative';
        groupsContainer.style.backgroundColor = 'red';
        groupsContainer.style.boxSizing = 'border-box';
        groupsContainer.style.padding = '5px';
        ui.appendChild(groupsContainer);
    },
    createNewUIGroup: function(groupName) {
        var myGmUIGroupsContainer = window.document.getElementById('myGmUIGroupsContainer');
        var group = document.createElement('div');
        group.style.width = '98%';
        group.style.border = '1px solid black';
        group.style.margin = '10px 0';
        group.style.boxSizing = 'border-box';
        group.style.padding = '5px';
        myGmUIGroupsContainer.appendChild(group);

        return group;
    }
});