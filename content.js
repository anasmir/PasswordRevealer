window.addEventListener('load', () => {
    setTimeout(
        togglePasswordField , 3000
    )
    
});
function togglePasswordField(){
    chrome.storage.sync.get(['enabled'], function(result){
        if(result.enabled){
            const passwordFields = document.querySelectorAll('input[type="password"]');
            console.log(passwordFields.length)
            passwordFields.forEach((field)=>{
                field.addEventListener('click', function(){
                    console.log(this.type)
                    field.type = field.type === 'password' ? 'text' : 'password';
                })
            })
        }
    })
}