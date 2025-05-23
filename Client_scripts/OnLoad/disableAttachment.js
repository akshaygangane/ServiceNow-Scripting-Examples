//If the incident form is new hide the attachment icon 

function onLoad(){

    if(g_form.isNewRecord()){
        g_form.disableAttachments();
    }
    else{
        g_form.enableAttachments();
    }
}