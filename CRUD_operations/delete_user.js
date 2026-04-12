

var gr = new GlideRecord('sys_user');
gr.addQuery('first_name', 'Akshay');
gr.query();


if(gr.next()){
    gr.deleteRecord();
}

// The first user with name Akshay will get deleted.