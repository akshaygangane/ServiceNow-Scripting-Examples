// How script will show how to read user details from the user table


var gUser = new GlideRecord(sys_user);
gUser.query();

while(gUser.next()){
    gs.print(
        gUser.getValue('first_name') + '||' +
        gUser.getaValue('last_name')
    );
}





