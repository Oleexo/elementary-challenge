$(document).ready(function () {
    $("#try").click(function () {
        $("#failAnswer").css("display", "none")
        var value = $('#answer').val();
        if (!value) {
            return;
        }
        $.ajax({
            type: "POST",
            url: '/2be2ec2a-98fe-4791-902b-fde0f14a76d5',
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