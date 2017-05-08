  $(document).ready(function(){

    $("div .outputdata").hide();
    
    $("#button").click(function(){
        
        $("div .inputdata").hide();
        $("div .outputdata").show();

    document.getElementById("out_legend").innerHTML="Thanks for Submitting the Form...";


    var formvalue=$("form").serializeArray();

    var first_name=formvalue[0].value;
    var last_name=" "+formvalue[1].value;
    var name=first_name + last_name;

    var parentage=formvalue[2].value;
    var email=formvalue[3].value;
    var contact=formvalue[4].value;
    var gender=formvalue[5].value;
    var address=formvalue[6].value;
    var city=formvalue[7].value;
    var state=formvalue[8].value;
    var pincode=formvalue[9].value;

       //$("form").html("<b>"+Name: +"</b>"+ name + "<br>" +"<b>Parentage:</b> " + parentage + "<br>" +"Email Address: "+ email + "<br>"+"Contact Number: " + contact + "<br>" + "Gender: " + gender + "<br>" +"Address: " + address + "<br>" +"City: " + city + "<br>" +"State: " + state + "<br>" +"Pin Code: " + pincode + "<br>");

       
    document.getElementById('out_name').value = name;   
    document.getElementById('out_parentage').value = parentage;
    document.getElementById('out_email').value = email;  
    document.getElementById('out_contact').value = contact;   
    document.getElementById('out_gender').value = gender;
    document.getElementById('out_address').value = address;  
    document.getElementById('out_city').value = city;   
    document.getElementById('out_state').value = state;
    document.getElementById('out_pincode').value = pincode; 

   
   //alert("Thaks for submitting the form...");

 
    console.log(formvalue[0].name+":"+formvalue[0].value);
    console.log(formvalue[1].name+":"+formvalue[1].value);
    console.log(formvalue[2].name+":"+formvalue[2].value);
    console.log(formvalue[3].name+":"+formvalue[3].value);
    console.log(formvalue[4].name+":"+formvalue[4].value);
    console.log(formvalue[5].name+":"+formvalue[5].value);
    console.log(formvalue[6].name+":"+formvalue[6].value);
    console.log(formvalue[7].name+":"+formvalue[7].value);
    console.log(formvalue[8].name+":"+formvalue[8].value);
    console.log(formvalue[9].name+":"+formvalue[9].value);
       

    return false;

    });


    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Please provide your first name'
                    }
                }
            },
             last_name: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please provide your last name'
                    }
                }
            },
            parentage: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please provide your parentage'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please provide your email address'
                    },
                    emailAddress: {
                        message: 'Please provide a valid email address in proper format'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please provide your phone number'
                    },
                    phone: {
                        country: 'IN',
                        message: 'Please provide a vaild phone number'
                    }
                }
            },
            address: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please provide your street address'
                    }
                }
            },
            city: {
                validators: {
                     stringLength: {
                        min: 4,
                    },
                    notEmpty: {
                        message: 'Please provide your city'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'Please select your state'
                    }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Please provide your zip code'
                    },
                    stringLength: {
                        min: 6,
                        max: 6,
                    }
                }
            },
            comment: {
                validators: {
                      stringLength: {
                        min: 10,
                        max: 200,
                        message:'Please enter at least 10 characters and no more than 200'
                    },
                    notEmpty: {
                        message: 'Please provide a description of your project'
                    }
                    }
                }
            }
        })

    .on('success.form.bv', function(e) {


            $('#success_message').slideDown({ display: "show" }, "slow"); // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data

//           $.post($form.attr('action'), $form.serialize(), function(result) {
//         console.log(result);}, 'json');
        


        });  

});
