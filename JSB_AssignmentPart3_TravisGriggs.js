//Travis Griggs 16/05/2024 assignment Form Validation part 3//

////---------------------------------------------------------------------------------------------------------------------------------------------------------//

//Go to other websites button//
function openURL() 
	{
	//The following code defines validChoices as any item listed in the array (i.e. 1,2,3) where these items correspond to the urls defined below.
	var validChoices = ["1", "2", "3"]; 
	var urls = {
		"1": "https://google.com",
		"2": "https://learn.tafesa.edu.au/",
		"3": "https://tafesa.edu.au/"
	};

	var choice = prompt("Choose a website: \n1. Google\n2. Learn\n3. TafeSA");

	//The followung while loop checks if the user's choice is not in agreement with the above validChoices in the array.
	//If this is the case then an alert message is displayed to the user informing them of the invalid choice, and they are prompted again to enter a valid choice.
	while (!validChoices.includes(choice)) 
	{
		alert("Invalid choice! Please enter a number between 1 and 3")	
		choice = prompt("Invalid choice! Please choose a valid website: \n1. Google\n2. Learn\n3. TafeSA");
	}
	
	var chosenURL = urls[choice];
	var newWindow = window.open(chosenURL, "_blank", "width=800,height=800");
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------//
//Pseudocode code for form validation//


// Define ValidateForm() method.
	// Define variables: name, email, address, postcode, ccNumber, ccv, expiryMonth, expiryYear
		// If any of the required fields (name, email, address, postcode, ccNumber, or ccv) are empty:
		// Output an error message
		// Return false
		
		// If postcode is not exactly 4 characters long OR is not numeric:
		// Output an error message
		// Return false
		
		// If email length is less than 8 characters OR email does not contain '@' OR '.':
		// Output an error message
		// Return false		

		// If cardNumber is not exactly 16 characters long OR is not numeric:
		// Output an error message
		// Return false
		
		// If ccv is not exactly 3 characters long OR is not numeric:
		// Output an error message
		// Return false
		
		// Define variables: currentYear and currentMonth
		// If expiryYear is less than the current year OR (expiryYear is the current year AND expiryMonth is less than the current month):
		// Output an error message
		// Return false		
		
		// Output a success message
		// Return true
		
//form validation/submit button//

function validateForm() {
	var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var postcode = document.getElementById("postcode").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var ccv = document.getElementById("ccv").value;
    var expiryMonth = document.getElementById("expiryMonth").value;
    var expiryYear = document.getElementById("expiryYear").value;
	
	// If statement to output error message on html page and style input colour to red if fullname is null
	if (fullname.trim()==="")
	{		
		fullnameError.style.color="red"
		fullnameError.innerHTML = "Name required";
		document.getElementById("fullname").focus();
		return false;		
	} 
	
	fullnameError.innerHTML = "";
	document.getElementById("address").focus();	
	
	// If statement to output error message on html page and style input colour to red if address is null
	if (address.trim()=="")
	{		
		addressError.style.color="red"
		addressError.innerHTML = "Address required";					
		return false;		
	} 			
	
	addressError.innerHTML = "";
	document.getElementById("postcode").focus();	
	
	// If statement to output error message on html page and style input colour to red if postcode is null	
	if (postcode=="")
	{		
		postcodeError.style.color="red"
		postcodeError.innerHTML = "Postcode required";							
		return false;	
	}   
	
	//If statement to verify postcode is a number and its length is 4 characters. 
	//If this is not the case the if statement outputs an error message on html page and styles the input colour to red
	else if (isNaN(postcode) || postcode.length !== 4) {
        postcodeError.style.color="red"
		postcodeError.innerHTML = "Please enter a valid postcode (4 digits).";	
		return false;		
    }	
	
	postcodeError.innerHTML = "";
	document.getElementById("email").focus();		     
	
	// If statement to output error message on html page and style input colour to red if email is null	
	if (email=="")
	{		
		emailError.style.color="red"
		emailError.innerHTML = "Email required";		
		return false;		
	}	
	
	//If statement to verify email length is greater than or equal to 8, and contains at least one '@' and at least one '.' 
	//If this is not the case the if statement outputs an error message on html page and styles the input colour to red
	else if (email.length < 8 || !email.indexOf("@")== -1 || !email.indexOf(".")== -1) {
        emailError.style.color="red"
		emailError.innerHTML = "Please enter a valid email address i.e. contains at least 8 chracters, inclduing @ and .";		
		return false;			
	}
	
	emailError.innerHTML = "";
	document.getElementById("cardNumber").focus();	
	
	// If statement to output error message on html page and style input colour to red if cardnumber is null	
	if (cardNumber=="")
	{		
		cardNumberError.style.color="red"
		cardNumberError.innerHTML = "Card Number required";	
		return false;	
	}   
	
	//If statement to verify cardnumber is a number and its length is 16 characters. 
	//If this is not the case the if statement outputs an error message on html page and styles the input colour to red
	else if (isNaN(cardNumber) || cardNumber.length !== 16) {
        cardNumberError.style.color="red"
		cardNumberError.innerHTML = "Please enter a valid credit card number (16 digits).";		
		return false;		
    }	
	
	cardNumberError.innerHTML = "";
	document.getElementById("ccv").focus();		     
	
	// If statement to output error message on html page and style input colour to red if ccv is null	
	if (ccv=="")
	{		
		ccvError.style.color="red"
		ccvError.innerHTML = "CVV required";		
		return false;	
	}   
	
	//If statement to verify ccv is a number and its length is 3 characters. 
	//If this is not the case the if statement outputs an error message on html page and styles the input colour to red
	else if (isNaN(ccv) ||ccv.length !== 3) {
        ccvError.style.color="red"
		ccvError.innerHTML = "Please enter a valid CCV";		
		return false;		
    }
	
	ccvError.innerHTML = "";
	document.getElementById("ccv").blur();	

	// currentYear + currentMonth varaibles to record current year/month using the Date() method
	// currentMonth is increased by 1 as getMonth() uses a 0-base index
	var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth() + 1;
	
	// The following if statement verifies the expiryYear < current Year OR that the expiryYear == currentYear AND expiryMonth < currentMonth
    if (expiryYear < currentYear || (expiryYear == currentYear && expiryMonth < currentMonth)) {       
		expiryError.style.color="red"
		expiryError.innerHTML = "Your credit card has expired. Please enter a valid expiry date.";		
		return false;
    }		
		
	expiryError.innerHTML = "";
	
	// The following statement issues an alert stating 'Form submitted successfully!' when all preivious if-statements are verified	
	alert("Form submitted successfully!");
    return true;	
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------//

//Background styling//
 
function changeBgd(textField)
{
	textField.style.background = "lightblue";
}

function resetBgd(textField)
{
	textField.style.background="lightgrey";
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------//

//Help Button//

function openHelp() 
	{
	window.open("JSB_AssignmentPart3_Help_TravisGriggs.html", "_blank", "width=500,height=500");	
	}