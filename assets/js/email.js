emailjs.init({
    publicKey: 'exp_yG9ECWk-pOB_0',
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name_value = document.getElementById('name').value.trim(); 
    var message_value = document.getElementById('message').value;
    var reply_to_value = document.getElementById('email').value.trim();

    if (name_value == null || name_value == ""
        || message_value == null || message_value == ""
        || reply_to_value == null || reply_to_value == ""
    )
    {
        Swal.fire({
            title: 'Error!',
            text: 'Failed to send message.',
            icon: 'error',
        });
    }

    var templateOption = {
        name: name_value,
        message: message_value,
        reply_to: reply_to_value,
    }


    emailjs.send('service_52p9u68', 'template_0sifgau', templateOption) // Replace with your Service ID and Template ID
        .then(function(response) {
            Swal.fire({
                title: 'Success!',
                text: 'Message sent successfully.',
                icon: 'success',
            });
        }, function(error) {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to send message.',
                icon: 'error',
            });
        });
});