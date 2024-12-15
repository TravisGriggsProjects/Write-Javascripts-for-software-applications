//Travis Griggs 14/05/2024 assignment Form Validation part 2//

//Pseudocode code for part 1 go to other websites//
//Define openURL method//
//Define valid choices in an array where each element corresponds to a valid url//
//Define choice as the user's selcted input through prompt method//
//While valid choice doesn't include choice alert user with an error message and re-prompt them such that they may enter a valid input (choice)//
//Define chosenURL as selcted URL (choice)//
//Open chosenURL in a new 800 x 800 pixel window.//

//---------------------------------------------------------------------------------------------------------------------------------------------------------
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
		if (choice == null) {
			return;
		}
		
		alert("Invalid choice! Please enter a number between 1 and 3")	
		choice = prompt("Invalid choice! Please choose a valid website: \n1. Google\n2. Learn\n3. TafeSA");
	}
	
	var chosenURL = urls[choice];
	var newWindow = window.open(chosenURL, "_blank", "width=800,height=800");
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------//

//Pseudocode code for part 2 form validation//


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

function validateForm() {
	var fullname = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value.trim();
    var postcode = document.getElementById("postcode").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var ccv = document.getElementById("ccv").value;
    var expiryMonth = document.getElementById("expiryMonth").value;
    var expiryYear = document.getElementById("expiryYear").value;
	
	// The following if statement verifies that the name, email, address, postcode, cardNumber, and ccv inputs are not null.
	if (fullname=='' || email=='' || address=='' || postcode=='' || cardNumber=='' || ccv=='') {
		alert("Please fill in all required fields.");
		return false;
    }
	
	// The following if statement verifies the inputted postcode contains 4 characters which are only numbers
    if (isNaN(postcode) || postcode.length !== 4) {
        alert("Please enter a valid postcode (4 digits).");
        return false;
    }	
	
	// The following if statement verifies the inputted email contains at least 8 characters + '@' + '.'
	if (email.length < 8 || !email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address i.e. contains at least 8 chracters, inclduing @ and . ");
        return false;
    }
	
	// The following if statement verifies the inputted cardNumber contains 16 characters which are only numbers
	if (isNaN(cardNumber) || cardNumber.length !== 16) {
        alert("Please enter a valid credit card number (16 digits).");
        return false;
    }
	
	// The following if statement verifies the ccv contains 3 characters which are only numbers	
	if (isNaN(ccv) ||ccv.length !== 3) {
        alert("Please enter a valid CCV (3 digits).");
        return false;
    }
	
	// currentYear + currentMonth varaibles to record current year/month using the Date() method
	// currentMonth is increased by 1 as getMonth() uses a 0-base index
	var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth() + 1;
	
	// The following if statement verifies the expiryYear < current Year OR that the expiryYear == currentYear AND expiryMonth < currentMonth	
    if (expiryYear < currentYear || (expiryYear == currentYear && expiryMonth < currentMonth)) {
        alert("Your credit card has expired. Please enter a valid expiry date.");
        return false;
    }	
	
	// The following statement issues an alert stating 'Form submitted successfully!' when all preivious if-statements are verified	
	alert("Form submitted successfully!");
    return true;
}