const toggleSwitch = document.getElementById("toggle-switch");

chrome.storage.sync.get(['enabled'], function(result){
    toggleSwitch.checked = result.enabled;
})

toggleSwitch.addEventListener('change', function(){
    chrome.storage.sync.set({enabled: toggleSwitch.checked})
})
