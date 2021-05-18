$(document).ready(function () {
    //輸入重量顯示價格
    $('.input1').on('keyup', function () {
        //限定輸入數字+箭頭會亮
        var value = $('.input1').val();
        if (value != "") {
            $('.bookin_submit button,.arrRight').css("opacity", "1");
        } else {
            $('.bookin_submit button,.arrRight').css("opacity", "0.7");
        };

        //輸入內容金額範圍
        if (value > 0 && value < 100) {
            $('.price h3').html('$1M');
        } else if (value >= 101 && value <= 150) {
            $('.price h3').html('$2M');
        } else if (value >= 151 && value <= 200) {
            $('.price h3').html('$3M');
        } else if (value >= 201 && value <= 250) {
            $('.price h3').html('$3.5M');
        }else if(value>250){
            $('.custom_field .alert').css('display','block');
            $('.bookin_submit button,.arrRight').css("opacity", "0.7");
        }
        else {
            $('.price h3').html('--');
        }

    });
    //monthpicker
    var d = new Date();
    $('#ym').monthpicker({
        pattern: 'yyyy-mm',
        selectedYear: d.getFullYear(),
        startYear: 2021,
        finalYear: 2100, monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemper', 'October', 'November', 'December']
    }).attr('readonly', 'readonly');
    // month/year format



});