// This script is used to make resolution code and resoultion notes mandatory when the state of the field is resolved.

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (newValue === '') {
     g_form.setMandatory('u_resolution_code',false);
     g_form.setMandatory('u_resolution_notes',false);
       return;
    }
    
    if(newValue=='resolved'){
     g_form.setMandatory('u_resolution_code',true);
     g_form.setMandatory('u_resolution_notes',true);
    }else{
     g_form.setMandatory('u_resolution_code',false);
     g_form.setMandatory('u_resolution_notes',false);
    }
 
    //Type appropriate comment here, and begin script below
    
 }