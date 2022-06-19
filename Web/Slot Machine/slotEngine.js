function start_reel_spin(a, b) {
        var c = Date.now()
          , d = $("#reel" + a);
        d.css({
            top: -(Math.random() * 720* 2)
        });
        var e = parseInt(d.css("top"), 10)
          , f = function() {
            d.css({
                top: e
            }),
            e += Date.now() < c + b ? 100 : 100,
            e > 0 && (e = 2 * - 720)
        }
          , g = window.setInterval(f, 20);
        d.data("spinTimer", g)
    }
    function stop_reel_spin(a,b) {
        var c = $("#reel" + a)
          , d = c.data("spinTimer");
        if (window.clearInterval(d),
        c.data("spinTimer", null),
        b != null) {
            var e = 720 / 6
              , f = -720 - (b - 1) * e + 86;
            c.css({
                top: f - 720
            }).animate({
                top: f + 200
            }, 200, "linear", function() {
                c.animate({
                    top: f
                }, 200, "easeOutElastic")
            });
        }
    }
	$(document).ready(function(){
		var price = +($("#credits").text());
	$("#up").click(function() {
           var bet = +($("#bets").text()) + 1;
           $("#bets").text(bet);
        });
	$("#down").click(function() {
           var bet = +($("#bets").text()) - 1;
           $("#bets").text(bet);
        });
	$("#spinButton").click(function() {
		if ($("#spinButton").hasClass("disabled"))
            return !1;
        $("#comment").text("");
		   $("#spinButton").addClass("disabled");
           var bet = +($("#bets").text());
           start_reel_spin(1, 0);
           start_reel_spin(2, 1000);
           start_reel_spin(3, 1000);
           var a = 500;

           var rand1 = Math.round(Math.random()*5);
           var rand2 = Math.round(Math.random()*5);
           var rand3 = Math.round(Math.random()*5);
            window.setTimeout(function() {
                stop_reel_spin(1,rand1)
            }, a);
            a += 1000;
            window.setTimeout(function() {
                stop_reel_spin(2,rand2)
            }, a);
            a += 1000;
            window.setTimeout(function() {
                stop_reel_spin(3,rand3)
            }, a);
            a += 1000;
            window.setTimeout(function() {
              if(rand1 === rand2 && rand2 === rand3){
                $("#comment").text("Good Job!! You win Triple!!");
                $("#spinButton").removeClass("disabled");
                price = price + (bet*3);
              }else if(rand1 === rand2 || rand2 === rand3){
                $("#comment").text("Nice!! You win Double!!");
                $("#spinButton").removeClass("disabled");
                price = price + (bet*2);
              }else{
                $("#comment").text("Better luck next time");
                $("#spinButton").removeClass("disabled");
                price = price - bet;
              }
              $("#credits").text(price);
            }, a);
            a += 1000;
            window.setTimeout(function() {
              if(price >= 1000000000){
                  var xhttp = new XMLHttpRequest();
                  xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                      alert("Congrats!! Here is the flag: "+ this.responseText);
                    }
                  };
                  xhttp.open("POST", "secret.php", true);
                  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                  xhttp.send("price="+price);
              }
            }, a);

        });
	});
