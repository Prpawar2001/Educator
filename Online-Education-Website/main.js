// Functions -------------->

function myCourses(){
    $('.home .myCourses').toggleClass('active');
}


function addCourse(){
    var elmId = $(this).parent().children('.course-name').text();
    alert(elmId);
    $('.myCourses ul').append('<li>' + elmId +'</li>');
    $('.course .box-container .btn').prop('disabled',true);
    $('.course .box-container .btn').html('Owned');
}

// Screen
function loginScreen(){
    $('.login-form').toggleClass('active');
    $('.signup-form').removeClass('active');
    $('.forgot-pass').removeClass('active');
}

function signupScreen(){
    $('.signup-form').toggleClass('active');
    $('.login-form').removeClass('active');
    $('.forgot-pass').removeClass('active');
}

function forgotPass(){
    $('.forgot-pass').toggleClass('active');
    $('.signup-form').removeClass('active');
    $('.login-form').removeClass('active');
}

// Actions
function signUp(){
    $('header div .btn').toggleClass('logged');
    $('.signup-form').removeClass('active');
    $('.course .box-container .box .btn').toggleClass('addlist');
};

function loggedIn(){
    $('header div .btn').toggleClass('logged');
    $('.login-form').removeClass('active');
    $('.course .box-container .box .btn').toggleClass('addlist');
}

function logOut(){
    $('header div .btn').toggleClass('logged');
    $('.course .box-container .box .btn').toggleClass('addlist');
    $('.payment-new').removeClass('active');
}

// dropdown navigation bar---------------------------------------------

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop() > 100){
            $('header').addClass('header-active');
        }else 
        {
            $('header').removeClass('header-active');
        }
    

        // *********** scroll spy **************
        $('section').each(function(){
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 200;
            var top = $(window).scrollTop();
            if(top >= offset && top < height + offset){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find('[href="#' + id +'"]').addClass('active');
            }
        });
    });

    // ********** end ************************
 
    // Message sending

    $(document).ready (function () {  
        $('#msg-form').submit (function (e) {    
           var name = $('.name.con').val();  
           var email = $('.email.con').val();
           var number = $('.phoneNo.con').val();   
           var message = $('.message-box.con').val();   
           $(".error").remove();  
           if (name.length < 1){  
             $('.name.con').after('<span class="error">*This field is required</span>');  
           } 
            if (email.length < 1) {  
                $('.email.con').after('<span class="error">*This field is required</span>');  
            }else{  
                var regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
                var validEmail = regEx.test(email);  
                if (!validEmail) {  
                    $('.email.con').after('<span class="error">*Enter a valid email</span>');  
                }  
            } 
            if (number.length < 1) {  
                $('.phoneNo.con').after('<span class="error">*This field is required</span>');  
            }else if(number.length != 10){
                $('.phoneNo.con').after('<span class="error">*Invalid input</span>'); 
            }   
            if (message.length < 1) {  
                $('.message-box.con').after('<span class="error">*This field is required</span><br>');  
            }else{
                $('#msg-form input').val('');
                $('#msg-form textarea').val('');
                $('#submit').val('message');
                alert("Message sent Sucessfully !! Thank you for feedback !!");
            }
        });  

        // ************* Login ***************

        var user_email = "prpawar2001@gmail.com";
        var name = "Prathamesh Pawar";
        var user_password = "@Pawar2001";
        $(".login-form").submit(function(e){
            e.preventDefault();
            var email = $(".login-mail").val();
            var pass = $(".login-password").val();
            $(".error").remove(); 
            if(email == "" || pass == ""){
                $(".login-password").after('<span class="error"><br>*Please input all credentials.</span>')
            }else if(email == user_email && pass == user_password){
                $('.login-form input').val('');
                $(".login-form .btn").val('login now');
                loggedIn();
                $('header div h2').html(name);
                alert("Logged in Successfully !!");
            }else{
                $(".login-password").after('<span class="error"><br>*Invalid credentials.</span>')
            }
        });

        // ********************* forgot password ***************

        $(".forgot-pass").submit(function(e){
            e.preventDefault();
            var email = $(".forgot-mail").val();
            var pass = $(".forgot-password").val();
            user_password=pass;
            $(".error").remove(); 
            if(email != user_email){
                $(".forgot-mail").after('<span class="error"><br>*This mail is not registerd.</span>')
            }
            if(user_password.length < 8){
                $(".forgot-password").after('<span class="error"><br>*Please Enter atleast 8 characters/digits/symbols.</span>')
            }else{
                $('.forgot-pass').removeClass('active');
                $('.login-form').toggleClass('active');
                alert("Password Updated Sucessfully !!");
            }
        });

        // ************************ payment validation *******************

        $('.payment-new').submit(function(e){
            e.preventDefault();
            var f_Name = $('.payment-new .f_name').val();
            var l_Name = $('.payment-new .l_name').val();
            var mail = $('.payment-new .mail').val();
            var card = $('.payment-new .card_No').val();
            var cvv = $('.payment-new .cvc').val();
            var regCVV = /^[0-9]{3,3}$/;
            $(".error").remove(); 
            if(f_Name.length < 1){
                $('.payment-new .f_name').after('<span class="error">*This field is required</span>'); 
            }
            if(l_Name.length < 1){
                $('.payment-new .l_name').after('<span class="error">*This field is required</span>'); 
            }
            if (mail.length < 1) {  
                $('.payment-new .mail').after('<span class="error">*This field is required</span>');
            }
            if(card.length < 12 ){
                $('.payment-new .card_No').parent().after('<span class="error">*This field is required</span>');
            }
            if(cvv.length != 3 ){
                $('.payment-new .cvc').after('<span class="error">*This field is required</span>');
            }else if(cvv.length == 3 ){
                var validcvv = regCVV.test(cvv);  
                if (!validcvv) {  
                    $('.payment-new .cvc').after('<span class="error">*Enter a valid email</span>');  
                }else{
                    $('.payment-new .f_name').val('');
                    $('.payment-new .l_name').val('');
                    $('.payment-new .mail').val('');
                    $('.payment-new .card_No').val('');
                    $('.payment-new .cvc').val('');
                    $(".error").remove();
                    $('.payment-new').toggleClass('active');
                    var elment = $(this).children('.course-name').text();
                    $('.myCourses ul').append('<li><a href="'+ elment +'.html" target="_blank">' + elment +'</a></li>');
                    alert("Course purchased sucessfully !");
                }  
            }   
        });

        // ************************** Sign up ***************************
        
        $(".signup-form").submit(function(e){
            e.preventDefault();
            var u1_firstName = $('.signup-form .fName').val();
            var u1_lastName= $('.signup-form .lName').val();
            var u1_email= $('.signup-form .email').val();
            var u1_phoneNo= $('.signup-form .phoneNo').val();
            var u1_password= $('.signup-form .password').val();
            $(".error").remove(); 
            if(u1_firstName.length < 1){
                $(".signup-form .fName").after('<span class="error"><br>*Please input credentials.</span>')
            }
            if(u1_lastName.length < 1){
                $(".signup-form .lName").after('<span class="error"><br>*Please input credentials.</span>')
            }
            if (u1_email.length < 1) {  
                $('.signup-form .email').after('<span class="error"><br>*This field is required</span>');  
            }else if(u1_email.length > 1){  
                var regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;   
                var validEmail = regEx.test(u1_email);  
                if (!validEmail) {  
                    $('.signup-form .email').after('<span class="error"><br>*Enter a valid email</span>');  
                }  
            }
            if(u1_phoneNo.length < 1){
                $('.signup-form .phoneNo').after('<span class="error"><br>*This field is required</span>');  
            }else if(u1_phoneNo.length != 10){
                $(".signup-form .phoneNo").after('<span class="error"><br>*Please input credentials.</span>')
            }
            if(u1_password.length < 8){
                $(".signup-form .password").after('<span class="error"><br>*Please Enter atleast 8 characters/digits/symbols.</span>')
            }
            else{
                $('.signup-form input').val('');
                $(".signup-form .btn").val('Sign Up');
                signUp();
                $('header div h2').html(u1_firstName + " " + u1_lastName);
                alert("You have been signed up successfully !!");
            }
        });

    });

    // ********************* Login form / Sign up form visibility **************

    // login
    $('#login-btn').click(function(){
       loginScreen();
    });

    // click to login
    $('.to-login').click(function(){
        loginScreen();
     });

    // forgot password
    $('.forgot-pa').click(function(){
        forgotPass();
    })

    //  signup
     $('#sign-up-btn').click(function(){
        signupScreen();
     });

    //  click to signup
    $('.to-signup').click(function(){
        signupScreen();
    });

    // logout 
    $("#logout-btn").click(function(){
        logOut();
        $('header div h2').html("");
    }); 

    $('header div h2').click(function(){
        myCourses();
    });

    $('.home .myCourses i').click(function(){
        $('.home .myCourses').toggleClass('active');
    })

    $('.course .box-container .btn').click(function(){
        $('.payment-new').toggleClass('active');
        $('.home .myCourses').removeClass('active');
        var elmId = $(this).parent().parent().children('h3').html();
        var fees =  $(this).parent().parent().children('h2').html();
        $('.payment-new .course-name').html(elmId);
        $('.payment-new .course-amount').html(fees);

        $(this).prop('disabled',true);
        $(this).html('Owned');
    });
    
    // Certificate 

    $('#form').submit(function(e){
        e.preventDefault();
        var course = $(this).parent().parent().children('nav').children('div').children('.cName').children('li').children('h1').text();
        $('#found').html(course);
        $('.content div').toggleClass('active');
        window.scrollTo(0,0);
    });
