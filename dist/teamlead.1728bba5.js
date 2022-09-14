function closeForm() {
    $(".form-popup-bg").removeClass("is-visible");
}
$(document).ready(function($1) {
    /* Contact Form Interactions */ $1("#btnOpenForm").on("click", function(event) {
        event.preventDefault();
        $1(".form-popup-bg").addClass("is-visible");
    });
    //close popup when clicking x or off popup
    $1(".form-popup-bg").on("click", function(event) {
        if ($1(event.target).is(".form-popup-bg") || $1(event.target).is("#btnCloseForm")) {
            event.preventDefault();
            $1(this).removeClass("is-visible");
        }
    });
});

//# sourceMappingURL=teamlead.1728bba5.js.map
