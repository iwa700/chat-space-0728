$(function(){
    function buildHTML(message){
      if ( message.image ) {
        let html =
        `<div class="messege" data-message-id=${message.id}>
          <div class="messege_box">
           <div class="message__upper-info">
            <p class="message__upper-info__talker">
                ${message.user_name}
            </p>
              <p class="message__upper-info__date">
                ${message.created_at}
              </p>
            </div>
            <p class="message__text">
            </p>
              <p class="Message__content">
                ${message.content}
              </p>
              <img class="Message__image" src="${message.image}">
            </div>
          </div>`
        return html;
      } else {
        let html =
        `<div class="messege" data-message-id=${message.id}>
          <div class="messege_box">
            <div class="message__upper-info">
              <p class="message__upper-info__talker">
                ${message.user_name}
              </p>
              <p class="message__upper-info__date">
                ${message.created_at}
              </p>
            </div>
            <p class="message__text">
            </p>
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>`
        return html;
      };
    }
  
    $('.Form').on('submit', function(e){
      e.preventDefault();
      let formData = new FormData(this);
      let url = $(this).attr('action');
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data){
        let html = buildHTML(data);
        $('.messeges').append(html); 
        $('.messeges').animate({ scrollTop: $('.messeges')[0].scrollHeight});     
        $('form')[0].reset();
        $('.Form__inputContent').val('');
        $('.Form__submit').prop('disabled', false);
      })
      .fail(function(){
        alert('error');
        $('.Form__submit').prop('disabled', false);
      });
    });
    
  });