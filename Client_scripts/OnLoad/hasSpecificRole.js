// Here, we have a requirement that if a logged in user has ITIL role then only state and resolution information should be visible

function onLoad(){

    if(g_user.hasRoleExactly('itil')){
        g_form.setDisplay('state',true);
        g_form.setSectionDisplay('resolution_inf',true);
    }
    else{
        g_form.setDisplay('state',false);
        g_form.setSectionDisplay('resolution_inf',false);
    }
}