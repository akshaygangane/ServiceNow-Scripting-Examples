// This file gives an overview of g_form API

// GlideForm is an client side API which is used to make changes or modifications on the Form get values from the form.

//============================================================

// To show info messages or error messages on form use below API methods

g_form.addInfoMessage('The incident has been created');
//  The message will be shown on top of the form in blue color;

g_form.addErrorMessage('The vlaue of Impact is not selected');
// This will be shown on top of form in red color 

g_form.clearMessages();
// This is used to clear all the messages on the form

//===========================================================

// To show the Filed messages like messages below fields we use below API methods
g_form.showFieldMsg('Field','Message','Type');

// field is below which field you have to show message 
// and type is what type of message is it "error","info","warning"
g_form.showFieldMsg('u_caller','Please check active caller','info');
g_form.showFieldMsg('u_caller','Please check active caller','error');
g_form.showFieldMsg('u_caller','Please check active caller','warning');

// To hide field messages use below method
g_form.hideAllFieldMsgs();
//To hide a particular field message
g_form.hideFieldMsg('u_caller', true);

//==============================================================

//To make fields Mandatory, ReadOnly, Display

g_form.setMandatory('u_caller',true);
g_form.setReadOnly('u_caller',true);
g_form.setDisplay('u_caller',true);

// If you want to make fields non mandatory, Non-readonly or non-display

g_form.setMandatory('u_caller',false);
g_form.setReadOnly('u_caller',false);
g_form.setDisplay('u_caller',false);

//===================================================================
// To set values of a filed on a form

g_form.setValue('u_category','software');

// To Set reference field with display value

g_form.setValue('fieldName','value','displayValue');
//Example
g_form.setValue('caller_id',
'46d44a1b0a0a0b5700c77f9bf387afe3',
'John Doe');

// To Clear a field
g_form.setValue('short_description','');


//============================================
//To get a value from a field

g_from.getValue('Filed');

g_form.getValue('u_caller');
// This will give you sys ID of the Caller

// If you want the display value of the caller field 
g_form.getDisplayValue('u_caller');

//========================================================
//It will make the field visible
g_form.setVisible('u_configuration_item',true);

// To clear a field value
g_form.clearValue('u_caller');

