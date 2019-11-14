function validateName() {

  var name = document.getElementById('contact-name').value;

  if(name.length == 0) {

    producePrompt('Name is required', 'name-error' , 'red')
    return false;

  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

    producePrompt('First and last name, please.','name-error', 'red');
    return false;

  }

  producePrompt('Valid', 'name-error', 'green');
  return true;

}

function validatePhone() {

  var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0) {
      producePrompt('Phone number is required.', 'phone-error', 'red');
      return false;
    }

    if(phone.length != 10) {
      producePrompt('Include area code.', 'phone-error', 'red');
      return false;
    }