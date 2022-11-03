document.addEventListener('DOMContentLoaded', (e) => {

    $('.square').on('click', function(event){
        $(this).css('background-color', 'red').animate({'width': '10','height': '10' });
        $(this).css('background-color', 'red').animate({'width': '200','height': '200' });
    });

    $('.sent__check').on('click', function(event){
        let send = $('.validate__input').val();
        if(send.length > 5 && send.length < 10){
            $('.check').text('Validate');
        }
        else
        {
            $('.check').text('Not Validate');
        }
    });

});