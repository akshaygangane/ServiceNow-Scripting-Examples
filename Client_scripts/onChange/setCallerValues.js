function onChange(control, oldValue, newValue,isLoading,isTemplate){

  if(isLoading || newValue==''){
    return;
  }

  var call = g_form.getReference('u_caller', setCallerValues);


  function setCallerValues(call){

    g_form.setValue('u_email',call.email);
    g_form.setValue('u_location',call.location);
    g_form.setValue('u_department',call.department);

  }



}