//GlideAjax is a client side API which is used to execute server side script(ScriptInclude) in the client side.
// So first we need to write a server side code that is script include 
// Go to script Include write the name of the script include and make it GlideAjax Enabled
// Server side script is as follows.
// you will already have a template there when you select GildeAjax enabled
var shippingCaseUtils = Class.create();
shippingCaseUtils.prototype = Object.extendsObject(AbstractAjaxProcessor, {


    type: 'shippingCaseUtils'
});

// So this will be the template that you will get and you need to create a method in this that you need to 
// Call on the client side

// We are writing below code because we want to retrieve caller details like email,;ocationa dn department form the
//Server

//Script Include
//===============
var shippingCaseUtils = Class.create();
shippingCaseUtils.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getShippingCaseCallerDetails: function(){

        var gr = new GlideRecord('sys_user');
        // Go to the sys_user table 
        gr.addQuery('sys_id', this.getParameter('sysparm_caller'));
        //Query the record which is required that is selected on the current form this information we will get
        // from the client side onchange script there we have stored current User informasiton in sysparm_caller
        gr.query();
        // query the result

        var callStr = ''

        if(gr.next()){

            callStr = gr.getValue('email') + ';' + gr.getValue('location') + ';' + gr.getValue('department');
        }

        return callStr;
        // So at the end this method will return a string of email,location,department separated by ";"

    },

    type: 'shippingCaseUtils'
});


// Now we will write CLient side script where we will use GlideAjax

//onChange CLient Script:-
//======================

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
  if(newValue==''){
    g_form.clearValue('u_email');
    g_form.clearValue('u_location');
    g_form.clearValue('u_department');
  }

  var ga = new GlideAjax ('shippingCaseUtils');
  ga.addParameter('sysparm_name','getShippingCaseCallerDetails');
  ga.addParameter('sysparm_caller',g_form.getValue('u_caller'));
  ga.geXMLAnswer(getCallerDetails);

  function getCallerDetails(call){
    var caller = call.split(';');
    g_form.setValue('u_email' ,caller[0]);
    g_form.setValue('u_location', caller[1]);
    g_form.setValue('u_department', caller[2]);
  }

}

