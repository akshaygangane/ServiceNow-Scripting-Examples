//In this code we will know how to create a user in hte user table using background script


var usr = new GlideRecord(sys_user);
usr.initialize();

usr.setValue('user_name','AkshayG');
usr.setValue('first_name', 'Akshay');
usr.setValue('last_name','Gangne');
usr.setValue('email','akshaygangane8775@gmail.com');
usr.setValue('location','a30mdhyto0284792knied8494jkc');

usr.insert();