$('#modalWindow').hide();
$('#modalWindow form').hide();
$('#warning').hide();

$("submitForm").on("click", function(event){
    event.preventDefault();
});

$(".toggleModal").on('click', function(){
    $("#modalWindow").slideToggle(750);
    $("#modalWindow form").fadeToggle(350);
    
})

$('.submitUser').on('click', function(){
    if (($('#input1').val().trim().length > 0) && ($('#input2').val().trim().length > 0)) {
        $("#modalWindow form").fadeOut(450).trigger("closed");
        $("#modalWindow").slideUp(750);
       
    } else {
        if ($('#warning').is(":hidden")) {
            $('#warning').show();
        }
    }
})
$(document).on("closed", function(){
        $('#warning').hide();
        $('#input1').val("");
        $('#input2').val("");
})

 