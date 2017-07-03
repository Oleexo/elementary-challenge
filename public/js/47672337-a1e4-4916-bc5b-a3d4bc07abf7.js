$(document).ready(function () {
    $("#try").click(function () {
        $("#failAnswer").css("display", "none")
        var value = $('#answer').val();
        if (!value) {
            return;
        }
        $.ajax({
            type: "POST",
            url: '/45be5cbf-e947-41be-8d9f-e59f4790ea5a',
            data: JSON.stringify({
                answer: value
            }),
            contentType:"application/json; charset=utf-8",
            success: function (data) {
                if (data == false) {
                    $("#failAnswer").css("display", "")
                } else {
                    window.location.href = "/" + data + ".html";
                }
            }
        });
    });
});