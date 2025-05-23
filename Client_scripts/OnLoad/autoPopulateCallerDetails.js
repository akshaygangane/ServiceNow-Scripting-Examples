// Here we have a requirement that, on a incident form we have to create email, location and department fields,
// and when the form loads the current logged in user details should be autopopulated in these fields


function onLoad(){

    g_form.setValue('u_caller',g_user.userID);   // g_user.userID will provide the full name of the current logged in user

    var call = g_form.getReference('u_caller', getCallerDetails);

    function getCallerDetails(call){

        g_form.setValue('u_email',call.email);
        g_form.setValue('u_location',call.location);
        g_form.setValue('u_department',call.department);

    }
    
}