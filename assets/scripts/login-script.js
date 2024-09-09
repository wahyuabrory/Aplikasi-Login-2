/** @module Login-Script */
/** 
 * Creates a variable `loginFormElement` for the form display.
 * @constant {HTMLElement}
 */
const loginFormElement = document.querySelector('#loginForm');

/** 
 * Creates a variable `inputEmailElement` for the email input field.
 * @constant {HTMLElement}
 */
const inputEmailElement = document.querySelector('#inputEmail');

/** 
 * Creates a variable `inputPasswordElement` for the password input field.
 * @constant {HTMLElement}
 */
const inputPasswordElement = document.querySelector('#inputPassword');

/** 
 * Creates a variable `expectedEmail` to store the temporary email information.
 * @constant {string}
 */
const expectedEmail = 'admin@dicoding.com';

/** 
 * Creates a variable `expectedPassword` to store the temporary password information.
 * @constant {string}
 */
const expectedPassword = 'superpassword';

/* Comment: Adds a click action to the button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();
  
  /** 
   * Creates a variable `email` to store the email value obtained when the button is pressed.
   * @constant {string}
   */
  const email = inputEmailElement.value;
  
  /** 
   * Creates a variable `password` to store the password value obtained when the button is pressed.
   * @constant {string}
   */
  const password = inputPasswordElement.value;
 
  /* Comment: Checks if the email and password values match the stored values. */
  if (email == expectedEmail && password == expectedPassword) {
 
    /* Comment: If they match, the program will navigate to the home page. */
    goToHome();
 
  } else {
 
    /* Comment: If they do not match, it will display a message indicating incorrect input. */
    showPopUp();
 
  }
});
