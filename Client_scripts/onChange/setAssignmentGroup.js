// Here we have a requirement that if a user select a Configuration item then support group associated
// with that CI should be populated as a assignment group in the form. 

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (newValue === '') {
     g_form.clearValue('u_assignment_group');
       return;
    }
 
    // This if condition is there so that if no value is there in configuration 
    // item then the assignment group value will also be cleared.
    
    var confi = g_form.getReference('u_configuration_item', getItemDetails);
 
    function getItemDetails (confi){
 
     g_form.setValue('u_assignment_group', confi.support_group);
 
    }
 


 }