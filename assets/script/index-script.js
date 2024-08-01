// ------------------------------------------------------
// for: characters remaining counter.

const inputEntryElement = document.getElementById('inputEntry');

// note: event listening must be caught.

// if the constant is not null, execute this 'background' code.
if(inputEntryElement){

    // EVENT LISTENER for constant 'inputElement'
    inputEntryElement.addEventListener("input", function() {

        // declare elementId getter for input and text.
        const charRemainTextElement = document.getElementById('char-remain');

        // transfers/sets/passes value of input.
        const inputValue = inputEntryElement.value;

        // gets the length of the string in question, then subtract to 100.
        // e.g. if input length is 10, it will return 90.
        const charRemaining = 100 - inputValue.length;

        // update the text content of charRemainTextElement
        charRemainTextElement.textContent = charRemaining > 0 ? charRemaining : 0;
    });
};

// ------------------------------------------------------

const submitBtn = document.getElementById('submitbtn');
const resultDisplay = document.getElementById('result');

// variable for validation later.
var previousEntry = 'When';

// note: event listening must be caught.
if(submitBtn){
    submitBtn.addEventListener("click", function() {
        const startDate = new Date(); // Current D&T
        const endDate = new Date(2099, 11, 31); // Cap date: December 31, 2099

        /*
        Here's how it works:

            startDate.getTime() gets the timestamp (in milliseconds) of the startDate.

            endDate.getTime() gets the timestamp (in milliseconds) of the endDate.

            Math.random() generates a random number between 0 and 1.

            The random number is then multiplied by the difference between the endDate and startDate timestamps.

            The result is added to the startDate timestamp, effectively generating a random timestamp between the startDate and endDate.
        */
    
        const randomTimestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());

        const randomDate = new Date(randomTimestamp);
    
        const month = randomDate.getMonth() + 1;
        const day = randomDate.getDate();
        const year = randomDate.getFullYear();

        var theResult = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;

        // after generating random date, passes this to the variable checking.
        varCheck(theResult);
    });
    
};

// ------------------------------------------------------
// feature: validation / checking

// oke dodong brint oke na ang code wag kang oa

// ------------------------------------------------------
// feature: validation / checking

// ------------------------------------------------------
// feature: validation / checking

function varCheck(output) {
    var currentEntry = inputEntryElement.value;
  
    // Declare an array for random statement outputs
    const statements = [
      `It will, in ${output}`,
      `The answer is clear: ${output}`,
      `The future holds: ${output}`,
      `Your calendar calls for ${output}`,
      `The prophecy foretells: ${output}`,
      `The universe says ${output}`,
      `The answer is revealed: ${output}`,
      `The future is set: ${output}`,
    ];
  
    // Check if the current entry is the same as the previous one
    if (currentEntry === previousEntry) {
      resultDisplay.textContent = "Try a different question...";
      
    } else if (currentEntry.trim().toUpperCase().startsWith('WHEN') && currentEntry.trim().endsWith('?')) {
        // Check if the current entry is a question starting with "when" and ending with a question
        
        const randomIndex = Math.floor(Math.random() * statements.length);
        const randomStatement = statements[randomIndex];
    
        // Add a class to trigger the slide-down animation
        resultDisplay.classList.add("slide-down");
    
        // Update the result display with the random statement
        resultDisplay.innerHTML = `<i>${randomStatement}</i>`;
    
        // Set a timeout to remove the slide-down class after the animation is complete
        setTimeout(() => {
            resultDisplay.classList.remove("slide-down");
        }, 1000); // adjust the timeout to match your animation duration
    
        // Set a cooldown period before allowing the next click
        submitBtn.disabled = true;
        setTimeout(() => {
            submitBtn.disabled = false;
        }, 1000); // 1-second cooldown
    
        previousEntry = currentEntry; // Update previousEntry ONLY when the query is new
  
    } else {
      // Add a class to trigger the shake animation
      resultDisplay.classList.add("shake");
  
      resultDisplay.textContent = "Please ask a question.";
  
      // Set a timeout to remove the shake class after the animation is complete
      setTimeout(() => {
        resultDisplay.classList.remove("shake");
      }, 500); // adjust the timeout to match your animation duration
    }
}