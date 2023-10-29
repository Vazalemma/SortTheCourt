var id;
var ty;
var pb;
var pl;
var clickpop = false;
var choice = "";
var countdown = 5;
var people = 20;
var happiness = 50;
var money = 100;
var yesbonus = [0, 0, 0];
var nobonus = [0, 0, 0];
var waitbonus = [0, 0, 0];
var current = "";
var lifebar = document.createElement("div");
lifebar.id = "progress";
lifebar.innerHTML = "<div id='bar'></div>";
var popbar = document.createElement("div");
popbar.id = "popprogress";
popbar.innerHTML = "<div id='popbar'></div>";
var gameover = "<div id='gameover'>Game Over<br><button class='button-primary' id='reset' onclick='location.reload();'>Restart</button></div>";
setnewpic();
var fail = new Audio("snd/fail.wav");
fail.load();
var whoosh = new Audio("snd/whoosh.wav");
whoosh.load();
var blip = new Audio("snd/blip.wav");
blip.load();
var monmon = new Audio("snd/coin.wav");
monmon.load();
var lesshap = new Audio("snd/happydown.wav");
lesshap.load();
var moreppl = new Audio("snd/enter.wav");
moreppl.load();
var lessppl = new Audio("snd/death.wav");
lessppl.load();
var morehap = new Audio("snd/happyup.wav");
morehap.load();
music = new Audio("snd/kingdom.mp3"); 
music.addEventListener("ended", function() {
	this.currentTime = 0;
	this.play();
}, false);

function applyGameOver() {
	choice = "gameover";
	doc("dialogue").style.display = "none";
	clearInterval(id);
	doc("progress").style.width = "0px";
	fail.currentTime = 0;
	fail.play();
	setTimeout(function() { 
		document.body.innerHTML = gameover;
	}, 2000);
}

function show(element, animation) {
	if (doc(element).style.display == "none") {
		doc(element).style.display = "block";
		$("#" + element).removeClass().addClass(animation + " animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
			$(this).removeClass();
		});
	}
};

function animate(element, animation, changecolor) {
	if (changecolor) {
		if (animation == "bounce") doc(element).style.color = "limegreen";
		else doc(element).style.color = "red";
	}
	$("#" + element).removeClass().addClass(animation + " animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
		$(this).removeClass();
		doc(element).style.color = "black";
	});
};

function remove(div, element, animation) {
	if (doc(element).style.display != "none") {
		$("#" + element).removeClass().addClass(animation + " animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
			$(this).removeClass();
			doc(div).removeChild(doc(element));
		});
	}
};

function hide(element, animation) {
	if (element == "popup" && choice != "gameover") {
		doc("dialogue").style.display = "block";
		setnewpic();
	}
	if (doc(element).style.display != "none") {
		$("#" + element).removeClass().addClass(animation + " animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
			$(this).removeClass();
			doc(element).style.display = "none";
		});
	}
};

function invite() {
	src = doc("drag").src;
	solution("invite", src.includes("good"), src.split("/").pop().split(".")[0]);
}

function decline() {
	src = doc("drag").src;
	solution("decline", src.includes("bad"), src.split("/").pop().split(".")[0]);
}

function solution(div, result, pic) {
	if (!result) wrong(pic, 1);
	else right(pic, 1);
	if (successful()) setnewpic();
	else applyGameOver();
	update();
}

function successful() {
	return people > 0 && happiness > 0 && money > 0;
}

function setnewpic() {
	distraction();
	if (doc("distraction").style.display == "block") {
		doc("dialogue").style.display = "none";
		return;
	}
	if (!successful()) {
		if (choice != "gameover") applyGameOver();
		return;
	}
	clearInterval(id);
	var img = doc("drag");
	nextpic = randomPic();
	img.src = nextpic;
	doc("drags").appendChild(img);
	doc("drag").style.display = "none";
	show("drag", "bounceIn");
	doc("recruits").appendChild(lifebar);
	doc("text").innerHTML = chooseText(nextpic.split("/").pop().split(".")[0]);
	animate("dialogue", "rotateInUpLeft", false);
	shrink();
}

function randomPic() {
	while (true) {
		pic = pictures[Math.floor(Math.random() * pictures.length)];
		if (pic != current) {
			current = pic;
			return pic;
		}
	}
}

function shrink() {
	var width = 230;
	id = setInterval(frame, 10);
	function frame() {
		if (doc("bar") == null) {
			clearInterval(id);
			return;
		}
		if (doc("popup").style.display == "none") {
			if (width <= 0.2) {
				clearInterval(id);
				solution("", false, "undealt");
			} else {
				width -= 0.23;
				doc("bar").style.width = width + "px";
			}
		}
	}
}

function distraction() {
	if (countdown <= 0) {
		if (Math.random() < 0.2) {
			doc("distraction").style.display = "block";
			show("popup", "bounceInRight");
			whoosh.currentTime = 0;
			whoosh.play();
			createpopup(randomPic());
			countdown = 6;
		}
	}
	countdown -= 1;
}

function end() {
	document.body.innerHTML = gameover;
}

function wrong(pic, del) {
	switch (pic) {
		case "bad1": score(-2, -5, -7, del); break;
		case "bad2": score(-4, -7, -5, del); break;
		case "bad3": score(-2, -4, -6, del); break;
		case "bad4": score(-9, -19, -21, del); break;
		case "bad5": score(-6, -10, 14, del); break;
		case "bad6": score(-18, -20, 50, del); break;
		case "bad7": score(-6, -11, -16, del); break;
		case "good1": score(0, -2, -8, del); break;
		case "good2": score(0, -3, -12, del); break;
		case "good3": score(0, -1, -2, del); break;
		case "good4": score(0, -1, -1, del); break;
		case "good5": score(0, -2, -5, del); break;
		case "good6": score(0, -3, -4, del); break;
		case "good7": score(0, -2, -10, del); break;
		case "undealt": wrong(doc("drag").src.split("/").pop().split(".")[0], 2);
		default:  score(0, 0, 0, del); break;
	}
}

function right(pic, del) {
	switch (pic) {
		case "bad1": score(0, 1, 3, del); break;
		case "bad2": score(0, 1, 4, del); break;
		case "bad3": score(0, 1, 4, del); break;
		case "bad4": score(0, 3, 5, del); break;
		case "bad5": score(0, 2, 5, del); break;
		case "bad6": score(0, 2, 8, del); break;
		case "bad7": score(0, 3, 3, del); break;
		case "good1": score(2, 0, 0, del); break;
		case "good2": score(3, 0, 0, del); break;
		case "good3": score(1, 0, 0, del); break;
		case "good4": score(1, 0, 0, del); break;
		case "good5": score(2, 0, 0, del); break;
		case "good6": score(3, 0, 0, del); break;
		case "good7": score(2, 0, 0, del); break;
		default:  score(0, 0, 0, del); break;
	}
}

function score(ppl, hap, mon, del) {
	music.play();
	people += ppl;
	happiness += Math.round(hap / del);
	money += Math.round(mon / del);
	notify(ppl, Math.round(hap / del), Math.round(mon / del));
}

function notify(ppl, hap, mon) {
	if (people <= 0) animate("pplnum", "hinge", true);
	else if (ppl > 0) {
		animate("pplnum", "bounce", true);
		moreppl.currentTime = 0;
		moreppl.play();
	}
	else if (ppl < 0) {
		animate("pplnum", "shake", true);
		lessppl.currentTime = 0;
		lessppl.play();
	}
	if (happiness <= 0) animate("happynum", "hinge", true);
	else if (hap > 0) {
		animate("happynum", "bounce", true);
		morehap.currentTime = 0;
		morehap.play()
	}
	else if (hap < 0) {
		animate("happynum", "shake", true);
		lesshap.currentTime = 0;
		lesshap.play();
	}
	if (money <= 0) animate("moneynum", "hinge", true);
	else if (mon > 0) {
		animate("moneynum", "bounce", true);
		monmon.currentTime = 0;
		monmon.play();
	}
	else if (mon < 0) {
		animate("moneynum", "shake", true);
		monmon.currentTime = 0;
		monmon.play();
	}
}

function lower() {
	var popwidth = 100;
	pb = setInterval(popframe, 10);
	function popframe() {
		if (doc("popbar") == null) {
			clearInterval(pb);
			return;
		}
		if (doc("popup").style.display == "none") return;
		if (popwidth <= 0.1) {
			clearInterval(pb);
			wait();
		} else {
			popwidth -= 0.1;
			doc("popbar").style.width = popwidth + "%";
		}
	}
}

function createpopup(pic) {
	doc("requester").src = pic;
	doc("popup").appendChild(popbar);
	lower();
	picture = pic.split("/")[1].split(".")[0];
	switch (picture) {
		case "bad1": message(bad1); break;
		case "bad2": message(bad2); break;
		case "bad3": message(bad3); break;
		case "bad4": message(bad4); break;
		case "bad5": message(bad5); break;
		case "bad6": message(bad6); break;
		case "bad7": message(bad7); break;
		case "good1": message(good1); break;
		case "good2": message(good2); break;
		case "good3": message(good3); break;
		case "good4": message(good4); break;
		case "good5": message(good5); break;
		case "good6": message(good6); break;
		case "good7": message(good7); break;
	}
}

function message(list) {
	index = Math.floor(Math.random() * list.length);
	sublist = list[index];
	type(sublist[0]);
	yesbonus = [sublist[1], sublist[2], sublist[3], sublist[4]];
	nobonus = [sublist[5], sublist[6], sublist[7], sublist[8]];
	waitbonus = [sublist[9], sublist[10], sublist[11], sublist[12]];
}

function yes() {
	if (!clickpop) return;
	choice = "yes";
	clearInterval(pb);
	doc("popbar").style.width = 0;
	type(yesbonus[0]);
	doc("yes").style.display = "none";
	doc("no").style.display = "none";
	doc("ok").style.display = "inline-block";
	people += yesbonus[1];
	happiness += yesbonus[2];
	money += yesbonus[3];
}

function no() {
	if (!clickpop) return;
	choice = "no";
	clearInterval(pb);
	doc("popbar").style.width = 0;
	type(nobonus[0]);
	doc("yes").style.display = "none";
	doc("no").style.display = "none";
	doc("ok").style.display = "inline-block";
	people += nobonus[1];
	happiness += nobonus[2];
	money += nobonus[3];
}

function wait() {
	choice = "wait";
	type(waitbonus[0]);
	doc("yes").style.display = "none";
	doc("no").style.display = "none";
	doc("ok").style.display = "inline-block";
	people += waitbonus[1];
	happiness += waitbonus[2];
	money += waitbonus[3];
}

function ok() {
	if (!clickpop) return;
	doc("ok").style.display = "none";
	doc("distraction").style.display = "none";
	doc("yes").style.display = "inline-block";
	doc("no").style.display = "inline-block";
	hide("popup", "fadeOutDown");
	update();
	if (choice == "yes") notify(yesbonus[1], yesbonus[2], yesbonus[3]);
	else if (choice == "no") notify(nobonus[1], nobonus[2], nobonus[3]);
	else notify(waitbonus[1], waitbonus[2], waitbonus[3]);
}

function update() {
	doc("pplnum").innerHTML = people;
	doc("happynum").innerHTML = happiness;
	doc("moneynum").innerHTML = money;
	if (!successful()) {
		clearInterval(id);
		doc("bar").style.width = 0;
		if (doc("drag") != null) doc("drag").src = "";
		applyGameOver();
	}
}

function type(msg) {
	clickpop = false;
	doc("reqbody").innerHTML = "";
	i = 0;
	s = 0;
	ty = setInterval(type, 12);
	function type() {
		doc("reqbody").innerHTML = doc("reqbody").innerHTML + msg.charAt(i);
		i += 1;
		s = (s + 1) % 6;
		if (s == 0) {
			blip.currentTime = 0;
			blip.play();
		}
		if (i >= msg.length) {
			clearInterval(ty);
			clickpop = true;
			return;
		}
	}
}

function chooseText(person) {
	switch(person) {
		case "bad1": return dialogue(dbad1);
		case "bad2": return dialogue(dbad2);
		case "bad3": return dialogue(dbad3);
		case "bad4": return dialogue(dbad4);
		case "bad5": return dialogue(dbad5);
		case "bad6": return dialogue(dbad6);
		case "bad7": return dialogue(dbad7);
		case "good1": return dialogue(dgood1);
		case "good2": return dialogue(dgood2);
		case "good3": return dialogue(dgood3);
		case "good4": return dialogue(dgood4);
		case "good5": return dialogue(dgood5);
		case "good6": return dialogue(dgood6);
		case "good7": return dialogue(dgood7);
	}
}

function dialogue(list) {
	return list[Math.floor(Math.random() * list.length)];
}

function doc(element) {
	return document.getElementById(element);
}