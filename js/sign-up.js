//signup.js 
// add your JavaScript code to this file

$(function(){
    var stateSelect = $('.us-states');
    var option;
    var i;
    var state;

    for (i = 0; i < usStates.length; ++i) {
    	state = usStates[i];
    	option = $(document.createElement('option'));
    	option.attr('value', state.abbreviation);
    	option.html(state.name);
        stateSelect.append(option);
    }

    $('.signup-form').submit(function(){
	    //code to execute when the sign-up form is submitted
	    //this is the raw DOM form element
	    //wrap it in a jQuery object so we can use jQuery methods on it
	    var signupForm = $(this);
	    var addr1Input = signupForm.find('input[name="addr-1"]');
    	var addr1Value = addr1Input.val();
    	if (addr1Value.length > 0) {
    		var zipInput = signupForm.find('input[name="zip"]');
    		var zipValue = zipInput.val();
    		if (zipValue.length == 0) {
    			alert('Please provide a zip code!');
    			return false;
    		}
    		else {
    			return true;
    		}
    	}
	});

	$('.cancel-signup').click(function(){
    //code to run when user clicks "No Thanks!" button
        $('.cancel-signup-modal').modal();
	});

    $('.btn-abandon').click(function(){
        window.location = 'http://www.google.com';
    });
});