$(document).ready(function() {
    
    var init = false;
    var current = moment().format('LLLL');  // Friday, January 28, 2022 10:55 AM

    // Display current date and time
    var currentMoment = $('#currentDay');
    currentMoment.text(current)

    var cal = new Date(); // init date and time
    var currentHour = cal.getHours(); // returns 0-23 on a 24 hour clock

    for (var i = 1; i < 9; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past');
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add('present');
        } else if (i > currentHour) {
            document.getElementById(i.toString()).classList.add('future');
        }
    }

    // Local Storage Feature

    {
        $('.saveBtn').click(function () {
            var hour1 = document.getElementById('1').value;
			localStorage.setItem('text1', hour1);
			var hour2 = document.getElementById('2').value;
			localStorage.setItem('text2', hour2);
			var hour3 = document.getElementById('3').value;
			localStorage.setItem('text3', hour3);
			var hour4 = document.getElementById('4').value;
			localStorage.setItem('text4', hour4);
			var hour5 = document.getElementById('5').value;
			localStorage.setItem('text5', hour5);
			var hour6 = document.getElementById('6').value;
			localStorage.setItem('text6', hour6);
			var hour7 = document.getElementById('7').value;
			localStorage.setItem('text7', hour7);
			var hour8 = document.getElementById('8').value;
			localStorage.setItem('text8', hour8);
			var hour9 = document.getElementById('9').value;
			localStorage.setItem('text', hour9);

        });
     }

     // Display saved tasks
     var saved1 = localStorage.getItem('text1');
     document.getElementById('1').value = saved1;
     var saved2 = localStorage.getItem('text2');
     document.getElementById('2').value = saved2;
     var saved3 = localStorage.getItem('text3');
     document.getElementById('3').value = saved3;
     var saved4 = localStorage.getItem('text4');
     document.getElementById('4').value = saved4;
     var saved5 = localStorage.getItem('text5');
     document.getElementById('5').value = saved5;
     var saved6= localStorage.getItem('text6');
     document.getElementById('6').value = saved6;
     var saved7 = localStorage.getItem('text7');
     document.getElementById('7').value = saved7;
     var saved8 = localStorage.getItem('text8');
     document.getElementById('8').value = saved8;
     var saved9 = localStorage.getItem('text9');
     document.getElementById('9').value = saved9;
});