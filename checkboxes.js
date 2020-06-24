$(function () {
    $("#checkAll").click(function () {
        if ($("#checkAll").is(':checked')) {
            $("#div input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });
        } else {
            $("#div input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
    });

    $("#div input[type=checkbox]").change(function(){
      if ($("#div input[type=checkbox]:checked").length == $("#div input[type=checkbox]").length) {
        $('#checkAll').prop("checked", true);
      }else {
        $('#checkAll').prop("checked", false);
      }
    });
});
