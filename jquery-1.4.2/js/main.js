$(document).ready(function() {
    $("#region").click(function() {
        if ($(this).val() != -1) {
            enableFormButton();
        } else {
            disableFormButton();
        }
    });

    $("#region").change(function() {
        if ($(this).val() != -1) {
            enableFormButton();
        } else {
            disableFormButton();
        }
    });
});

function disableFormButton() {
    $("#submit-btn").attr("disabled", true);    
} 

function enableFormButton() {
    $("#submit-btn").removeAttr("disabled");
}