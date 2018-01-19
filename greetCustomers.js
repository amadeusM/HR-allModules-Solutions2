var customerData = {
  Joe: {
    visits: 1
  },
  Carol: {
    visits: 2
  },
  Howard: {
    visits: 3
  },
  Carrie: {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var existingCustomers = Object.keys(customerData);
  var greeting = '';
	
  // your code here
  if(existingCustomers.includes(firstName)) {
    var visits = customerData[firstName].visits;
    if(visits === 1) {
      greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    } else if(visits > 1) {
      greeting = `Welcome back, ${firstName}! So glad to see you again!`;
    }
  } else {
    greeting = 'Welcome! Is this your first time?';
  }
  return greeting;
}

