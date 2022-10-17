function closeForm() {
  $('.mem-team').removeClass('is-visible');
}

$(document).ready(function($) {
  
  /* Contact Form Interactions */
  $('#btnOpenForm').on('click', function(event) {
    event.preventDefault();

    $('.mem-team').addClass('is-visible');
  });
  
    //close popup when clicking x or off popup
  $('.mem-team').on('click', function(event) {
    if ($(event.target).is('.mem-team') || $(event.target).is('#btnCloseForm')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  
  });


  function closeForm() {
    $('.teamlead-form').removeClass('is-visible');
  }
  
  $(document).ready(function($) {
    
    /* Contact Form Interactions */
    $('#btnOpenFormLead').on('click', function(event) {
      event.preventDefault();
  
      $('.teamlead-form').addClass('is-visible');
    });
    
      //close popup when clicking x or off popup
    $('.teamlead-form').on('click', function(event) {
      if ($(event.target).is('.teamlead-form') || $(event.target).is('#btnCloseFormLead')) {
        event.preventDefault();
        $(this).removeClass('is-visible');
      }
    });
    
    });


    function closeForm() {
      $('.mem-team').removeClass('is-visible');
    }
    
    $(document).ready(function($) {
      
      /* Contact Form Interactions */
      $('#btnOpenForm1').on('click', function(event) {
        event.preventDefault();
    
        $('.mem-team1').addClass('is-visible');
      });
      
        //close popup when clicking x or off popup
      $('.mem-team1').on('click', function(event) {
        if ($(event.target).is('.mem-team1') || $(event.target).is('#btnCloseFormLead')) {
          event.preventDefault();
          $(this).removeClass('is-visible');
        }
      });
      
      });

$(document).ready(function(){
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
 
  closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    // call function
    changeBtn();
  });
 
  function changeBtn() {
    if(sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }

  
})
 
