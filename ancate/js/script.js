$(function(){

    $("input").on('change', function() {

        var question_id = $(this).val();

        if(this.checked == true){
            $.post('ajax_count.php', {question_id:question_id},
                function(data)
                {
                    return false;
                }
           );
        }
    });

});
