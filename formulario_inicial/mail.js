$(document).ready(function() {
    $('#contact-form').on('submit', function(e) { //Don't foget to change the id form
        $.ajax({
            url: 'mail.php', //===PHP file name====
            data: $(this).serialize(),
            type: 'POST',
            success: function(data) {
                console.log(data);
                //Success Message == 'Title', 'Message body', Last one leave as it is
                swal("¡Success!", "Mensaje enviado!", "success");
            },
            error: function(data) {
                //Error Message == 'Title', 'Message body', Last one leave as it is
                swal("Oops...", "Algo ha ido mal :(", "error");
            }
        });
        e.preventDefault(); //This is to Avoid Page Refresh and Fire the Event "Click"
    });
});