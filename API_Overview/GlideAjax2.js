// We have seen how we can use GlideAjax 

// Scenario:- WHen we select configuration item the support group of the configuration item should be 
//selected as assignment group on the form

// Script Include: -
// ================

// I will not mention the full code which is already available in script include code window
// I will just mention the method that is important


getCiValues: function(){
  
    var ga = new GlideRecord('cmdb_ci');
    ga.addQuery('sys_id',this.getParameter('sysparm_ci'));
    ga.query();


    var ci ='';
    if(ga.next()){
        ci = ga.getValue('support_group');
    }
     return ci;

}

// This script include will get value of the support group of the selected configuration item on the form
// and return it 


// onCHange Client sript: -
// ======================


if(isLoading || newValue == ''){
    g_form.clearValue('u_assignment_group');
    return;
}

var gra = new GlideAjax('shippingCaseUtils');
gra.addParam('sysparm_name','getCiValues');
gra.addParam('sysparm_ci',g_form.getValue('u_configuration_item'));
gra.getXMLAnswer(getCiDetails);

function getCiDetails(cis){
    g_from.setValue('u_assignment_group', cis);
}

