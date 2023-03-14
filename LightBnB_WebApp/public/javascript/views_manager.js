$(() => {

  const $main = $('#main-content');

  window.views_manager = {};

  window.views_manager.show = function(item) {
    $newPropertyForm.detach();
    $propertyListings.detach();
    $searchPropertyForm.detach();
    $logInForm.detach();
    $signUpForm.detach();
    $resForm.detach();

    switch (item) {
    case 'listings':
      $propertyListings.appendTo($main);
      break;
    case 'newProperty':
      $newPropertyForm.appendTo($main);
      break;
    case 'searchProperty':
      $searchPropertyForm.appendTo($main);
      break;
    case 'logIn':
      $logInForm.appendTo($main);
      break;
    case 'signUp':
      $signUpForm.appendTo($main);
      break;

      //test
    case 'res':
      $resForm.appendTo($main);
      console.log("arguments[1]:", arguments[1]);
      $('#property_id').attr('value',arguments[1]);
      break;
        
        
    case 'error': {
      const $error = $(`<p>${arguments[1]}</p>`);
      $error.appendTo('body');
      setTimeout(() => {
        $error.remove();
        views_manager.show('listings');
      }, 2000);
        
      break;
    }
    }
  };
  
});