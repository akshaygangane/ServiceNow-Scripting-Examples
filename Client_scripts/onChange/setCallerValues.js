function onChange(control, oldValue, newValue,isLoading,isTemplate){

  if(isLoading || newValue==''){
    return;
  }

  // If this above if condition is removed the script can run in both cases which are onLoad and onChange.

  /*In this example we have have a table named shipping case table, so while creating or updating any record on this table when a caller is changed the respective values of that caller like email, department and location should
  appear on the form */

  var call = g_form.getReference('u_caller', setCallerValues);


  function setCallerValues(call){

    g_form.setValue('u_email',call.email);
    g_form.setValue('u_location',call.location);
    g_form.setValue('u_department',call.department);

  }

}