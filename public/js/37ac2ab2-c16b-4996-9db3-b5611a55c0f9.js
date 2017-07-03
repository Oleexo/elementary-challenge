$(document).ready(function () {
    $("#try").click(function () {
        $("#failAnswer").css("display", "none")
        var value = $('#answer').val();
        if (!value) {
            return;
        }
        $.ajax({
            type: "POST",
            url: '/78b6d5d3-80e9-4630-bc35-60ce18d157c1',
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