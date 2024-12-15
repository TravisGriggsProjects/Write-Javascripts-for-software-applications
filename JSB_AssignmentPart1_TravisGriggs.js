//Travis Griggs 13/05/2024 assignment Form Validation//

//Pseudocode code//
//Define openURL method//
//Define valid choices in an array where each element corresponds to a valid url//
//Define choice as the user's selcted input through prompt method//
//While valid choice doesn't include choice alert user with an error message and re-prompt them such that they may enter a valid input (choice)//
//Define chosenURL as selcted URL (choice)//
//Open chosenURL in a new 800 x 800 pixel window.//

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

		else {
			alert("Invalid choice! Please enter a number between 1 and 3")	
			choice = prompt("Invalid choice! Please choose a valid website: \n1. Google\n2. Learn\n3. TafeSA");
		}		
	}
	
	var chosenURL = urls[choice];
	var newWindow = window.open(chosenURL, "_blank", "width=800,height=800");
}