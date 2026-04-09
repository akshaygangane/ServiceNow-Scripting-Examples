var gr = new GlideRecord('sys_user');
gr.addQuery('first_name', 'Akshay');
gr.query();


if(gr.next()){
    gr.setValue('u_email','akshay@gmail.com');
    gr.update();
}