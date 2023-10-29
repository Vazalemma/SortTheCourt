var pictures = ["img/good1.png", "img/good2.png", "img/good3.png", "img/bad6.png",
	"img/good4.png", "img/good5.png", "img/good6.png", "img/good7.png", "img/bad7.png",
	"img/bad1.png", "img/bad2.png", "img/bad3.png", "img/bad4.png", "img/bad5.png"];
var bad1 = [
	["Excuse me, I've broken my coffin, and I can't afford a new one. Could you please lend me 40 coins to cover the expenses?",
	"Thanks! I owe you for this one!", 5, 5, -40,
	"Aww... Guess I'll be sleeping with the bats then.", 0, -2, 0,
	"I guess I arrived too late, you're already asleep... I guess I'll nab a little bit, since I won't be noticed.", 0, -2, -10],
	["Hello! My lack of vitamin D has brought me to your town. Could I borrow a person to fill my needs?",
	"Thanks! Here's a tip, I'll be on my way now.", -1, -4, 20,
	"No? Well guess what, I don't care wat you say, I will do it anyway.", -1, -4, 0,
	"Hello, braindead mortal? Do you even words? I'll double my needs! You better show some respect next time!", -2, -8, 0]
]
var bad2 = [
	["Hello, I've come to your town to offer some defense. I totally won't kill your people or steal your money or anything.",
	"Hah! You've made some mistakes in your life, bud!", -4, -10, -30,
	"Hmph. You're trying to play smart, huh? Well then, be that way.", 0, 3, 0,
	"While you were sleeping, I've snuck in and already finished my deeds.", -4, -10, -30],
	["Yo, I had a sick raid on another town, and I gots lotsa loot. Wanna trade weapons for money?",
	"Sick! I'm gonna be soooooo rich! Woooo--", 0, 10, -40,
	"Hmph. Well, your call. You don't know what you're missing!", 0, 0, 0,
	"Ignoring me, are we? Guess you'll need a punishment to wake you up.", -4, -10, -30]
]
var bad3 = [
	["Greetings. Looks like there's a curse casted on your town. Would you like for me to lift it for you?",
	"Good choice. I will now proceed to remove the curse.", 0, 4, -10,
	"Your call. Don't come crying to me if you see some people die.", -4, -8, -15,
	"Do you need me to cast a spell to wake you up? Alright, sure.", 0, -10, -10],
	["Greetings. Looks like your people have fallen sick. I've got a magical cure that can heal any disease. Would you like some?",
	"I love your concern for your people. The cure is yours.", 2, 5, -10,
	"Is that so? Seems like you're missing any concern for your people.", -2, -5, 0,
	"You seem to have fallen asleep. I guess I'll be taking my leave now.", -2, -5, 0]
]
var bad4 = [
	["Glob blop galap doblap gob blobberblop golobobberblop dogob?",
	"Globblobap galobop golap!", -12, -20, -30,
	"Glap... Globbaglop...", 0, 12, 0,
	"Globber globber? Globa blop!", -6, -10, -15],
	["Garrbgubl gubblurblrp garblrp borplorblalt babropt blobgolarblabrot?",
	"Grupperglop gublop galop! Galorrrp!", -12, -20, -30,
	"Glrrpap? Grruptoblarp...", 0, 12, 0,
	"Brrobul grep? Grreptulblurp blurp galurp!", -6, -10, -15]
]
var bad5 = [
	["Hello, mortal. I've got a deal for you. Would you like to trade money for people? Pay 120 gold for 30 people?",
	"Great choices. Here's your people. Now pay up, buddo.", 30, 15, -120,
	"Too expensive? Too few people? Oh well. We'll meet again.", 0, 0, 0,
	"Huh. Guess I'll leave then.", 0, 0, 0],
	["Hello, mortal. I've got a deal for you. Would you like to trade people for money? Pay 30 people for 120 gold?",
	"Great choices. Here's your gold. Now please excuse me.", -30, 0, 120,
	"Too many people? Too little gold? Oh well. We'll meet again.", 0, 0, 0,
	"Huh. Guess I'll leave then.", 0, 0, 0]
]
var bad6 = [
	["Greetings. You. Give people. Me. Give money. Good deals. Much money. You go?",
	"People. Yes. Hungry. Me get filled. You get money.", -50, -20, 300,
	"No people? Pay debt. You pay. Me go.", 0, 20, -100,
	"You quiet. Me fussy. Me angry. You pay. No money give.", -50, -20, 0]
]
var bad7 = [
	["Hey. I've got a bone to pick with you. Your townfolk disrespected me. Pay me, or I will bring wrath back to you.",
	"Good. At least one person respects me.", 0, 8, -30,
	"In that case, you will get to see your town burn.", -10, -12, 0,
	"Am I nothing to you? Now you will pay extra.", -15, -19, 0],
	["Hey. I could tell you a skeleton joke, but I wouldn't have the guts for it.",
	"Hah. You like puns too. Hahah. Thanks.", 1, 3, 10,
	"What? You don't like puns? Well screw you too.", 0, -3, 0,
	"...Get it? I have no guts? ...Because I'm a skeleton? ... Not impressed? Hmph. Brinbird mortals.", 0, -5, 0]
]
var good1 = [
	["Hello. The townsfolk want to thank you for your great work. Do you accept their gold?",
	"Enjoy your gold, mister!", 0, 0, 30,
	"You leave the gold for the people? That's very thoughtful of you!", 0, 20, 0,
	"...I'll just leave the gold here. You can make the decision later.", 0, 0, 30],
	["Hello. The townsfolk are having a party, but they're lacking a bit in donations. Donate 30 coins?",
	"Thanks! The townsfolk will surely be happy.", 5, 20, -30,
	"I guess I'll send them back to work then.", 0, -10, 0,
	"...I assume that's a 'No' then? Oh well.", 0, -10, 0]
]
var good2 = [
	["Good day! I'm working on a new science project, and I need some gold to get it started. If it works, we may be become rich! Will you take the chance?",
	"Unfortunately, the scienece machine failed. I'm sorry to report, sir.", 0, 0, -50,
	"Guess we'll have to skip on science then for now. Maybe another time...", 0, -5, 0,
	"I guess that's a no-go? Oh well. Maybe another day...", 0, -5, 0],
	["Good day! I'm working on a new science project, and I need some gold to get it started. If it works, we may be become rich! Will you take the chance?",
	"Great success! The macine worked! Here's your gold, good sir.", 0, 0, 250,
	"Guess we'll have to skip on science then for now. Maybe another time...", 0, -5, 0,
	"I guess that's a no-go? Oh well. Maybe another day...", 0, -5, 0],
	["Good day! I'm working on a new science project, and I need some gold to get it started. If it works, we may be become rich! Will you take the chance?",
	"The science machine didn't quite work as expected. We didn't get money, but we got candy, so all the citizens are happy!", 0, 60, -50,
	"Guess we'll have to skip on science then for now. Maybe another time...", 0, -5, 0,
	"I guess that's a no-go? Oh well. Maybe another day...", 0, -5, 0]
]
var good3 = [
	["Hello, mister! Could I have 5 coins to buy a chocolate bar?",
	"Thanks! You're the best!", 0, 3, -5,
	"Aww, I really wanted some chocolate too...", 0, -2, 0,
	"...Is my request really that dumb? I'm sorry...", 0, -2, 0],
	["Mister! Mister! There's a scary ghost knocking on the city gate door! Should we let it inside?",
	"Okay... I'm not sure about this decision, but I trust you...", 0, -12, 0,
	"Okay... I will ignore it. hopefully it will leave.", 0, 4, 0,
	"...Hello? Did the ghost take over your boy? Eek!", 0, -4, 0]
]
var good4 = [
	["Hello, young man. If you wouldn't mind, may I borrow 5 coins to buy our weekly newspaper?",
	"Thanks you so very much. I can finally read the newspaper the townsfolk keep praising.", 0, 3, -5,
	"Oh... I guess my request is a bit too simple. I'm sorry for bothering.", 0, -2, 0,
	"Is my existence really that weak that I don't get noticed? ", -1, -3, 0]
]
var good5 = [
	["Bonjour monsieur, I have un request. We're having un party in le mansion, and we're expecting you, monsieur. Will you join?",
	"Fantastique! Ze table is ready for you, monsieur. Follow moi.", 0, 8, 0,
	"That's unfortunate. Well, I'll leave you to it.", 0, -4, 0,
	"Looks like you're busy. Pardon moi.", 0, -5, 0]
]
var good6 = [
	["Greetings! I'm the lord of magic! Would you like me to take a chance and use my magic to potentionally change the state of this town? For 60 coins?",
	"Great fortune! 30 people have joined your town!", 30, 0, -60,
	"You're too afraid of anything bad? Yeah, I suppose it would be scary to take that responsibility.", 0, 0, 0,
	"Not up to the chance? Well, I guess hat's understandable...", 0, -2, 0],
	["Greetings! I'm the lord of magic! Would you like me to take a chance and use my magic to potentionally change the state of this town? For 60 coins?",
	"Great misfortune! 30 people were brutally murdered!", -30, 0, -60,
	"You're too afraid of anything bad? Yeah, I suppose it would be scary to take that responsibility.", 0, 0, 0,
	"Not up to the chance? Well, I guess hat's understandable...", 0, -2, 0],
	["Greetings! I'm the lord of magic! Would you like me to take a chance and use my magic to potentionally change the state of this town? For 60 coins?",
	"Great fortune! The town has been filled with flowers!", 0, 50, -60,
	"You're too afraid of anything bad? Yeah, I suppose it would be scary to take that responsibility.", 0, 0, 0,
	"Not up to the chance? Well, I guess hat's understandable...", 0, -2, 0],
	["Greetings! I'm the lord of magic! Would you like me to take a chance and use my magic to potentionally change the state of this town? For 60 coins?",
	"Great misfortune! The town got filled with cocroaches!", 0, -40, -60,
	"You're too afraid of anything bad? Yeah, I suppose it would be scary to take that responsibility.", 0, 0, 0,
	"Not up to the chance? Well, I guess hat's understandable...", 0, -2, 0],
	["Greetings! I'm the lord of magic! Would you like me to take a chance and use my magic to potentionally change the state of this town? For 60 coins?",
	"Great fortune! We've gained lots of riches!", 0, 0, 260,
	"You're too afraid of anything bad? Yeah, I suppose it would be scary to take that responsibility.", 0, 0, 0,
	"Not up to the chance? Well, I guess hat's understandable...", 0, -2, 0],
	["Greetings! I'm the lord of magic! Would you like me to take a chance and use my magic to potentionally change the state of this town? For 60 coins?",
	"Great misfortune! We've lost some gold!", 0, 0, -180,
	"You're too afraid of anything bad? Yeah, I suppose it would be scary to take that responsibility.", 0, 0, 0,
	"Not up to the chance? Well, I guess hat's understandable...", 0, -2, 0]
]
var good7 = [
	["Hello! A neighboring town wishes to join our forces! Will you let them join?",
	"Fantastic! I shall notify the town right away!", 40, 60, 240,
	"So you like challenges? Very well. Continue on.", 0, 0, 0,
	"You're giving me the silent treatment, eh? Well, I shall return that right back.", 0, -2, 0]
]
var dbad1 = [
	"I'm here for my daily blood collection. Please let me inside.",
	"I've come to claim grounds for my future coffin museum. I would like to claim my entry.",
	"Me and my bat friends have got a dinner served tonight at your kingdom.",
	"I was kicked out from another town, could I please eat your townsfolk instead?"
]
var dbad2 = [
	"Hey. I've got some booty to scooter outta this kingdom. Lemme at 'em.",
	"I've got a sword, and it's thirsty for blood. Could I use your town to fulfill my sword's desires?",
	"Hey buddo, I got a new knackin' sword and I ain't got a place to test it out. Could I lend your town a bit?",
	"Hey there, I believe your people have stolen some gold from me. May I assert my payback?"
]
var dbad3 = [
	"Hello, I've got some new potions to test out. Could I use you town as my testing grounds?",
	"Hello, I am the witchy witch of the Stitchy Critch, and I am here to take over your town.",
	"Greetings. Looks like I've totally lost my hat and I totally think it's in your town. May I enter?",
	"Tonight is the full moon, your town must give us a sacrifice."
]
var dbad4 = [
	"Glorp glop golap galoopolap golorporup galop?",
	"Blop Dalop bop dalop, dobop bobollorp golorp.",
	"Glop golrorblarble blorble golbrle, blarbleblop goblarbleblop!"
]
var dbad5 = [
	"I am the god of the underground, I've come to bring fate to some of your citizens.",
	"Looks like some of your people haven't met the requirements. I am here to claim their souls.",
	"I am Satan's highest servant, I am here to carry out his request. Let me pass.",
	"Hey buddy, I've come to offer you a bit of gold for some souls. You deal?"
]
var dbad6 = [
	"Hello. You. Let in. Me. Give money. Deal?",
	"Greetings. I am Chest. Me give gold. Me eat people. You give people?",
	"Mortal. I am Chest. I am hungry. I need people. I give many gold. You let in?",
	"Chest here. Chest hungry. Chest always hungry. Chest has money. Give people?"
]
var dbad7 = [
	"I've got a couple of bones to pick with your cityfolk. Let me in, immediately.",
	"I've ran out of graveyard space at home. I've come to make more space in your town.",
	"I was kicked out of my graveyard. May I claim your kingdom as my graveyard instead?",
	"I am scary skeleton. I strike you with fear. If you don't let in, I eat you."
]
var dgood1 = [
	"Hello. I heard you have a nice town. May I join your townsfolk?",
	"Hello. I was recommended to join your kingdom. May I enter?",
	"Hello. My parents moved into your town recently, so I thought about moving in as well. Is it ok?",
	"Hello. Your kingdom looks really cool, and I really want to enter. May I do so?"
]
var dgood2 = [
	"Greeting, I am the greatest scientist the world has ever seen! May I bring success to your town?",
	"Hello there, looks like your town is in need of some more SCIENCE! May I join your city's lab?",
	"I see you've got a great kingdom, but you seem to lack some science power! Let me help you with that.",
	"Accoring to my scientific research, doing science in your town would lead me to best succces."
]
var dgood3 = [
	"Hey mister, could I join your town please?",
	"Hello mister, I've been living in a village, but your town looks safe. Can I live here instead?",
	"Hey mister, I am a big boy now, and I decided to move towns all by myself! Can I come here?",
	"Hello. I was abandoned by my parents and I have nowhere to live. Could you let me live here, mister?"
]
var dgood4 = [
	"Greetings, young man. My previous town was very rough with me, but I heard your town is nice.",
	"Young man, my husband just recently died, and I couldn't afford to live in my town anymore.",
	"Hello, young man, I've come to visit my daughter who lives in this town. May I enter?",
	"Pardon, young man, I think I forgot my important amulet in your town last time. Mind if I enter?"
]
var dgood5 = [
	"Bonjour, monsieur, I heard you're in need of butlers. I bring the greatest quality of services.",
	"Bonjour, monsieur. I heard your hotels lack service providers. I've come to fulfill that job.",
	"Bonjour, monsieur kingdom owner. May I proclaim ebtry to zis wonderful kingdom of yours?.",
	"Bonjour, madamoiselle... Ah, pardon, I meant monsieur. May I bring you some fantastique service?",
	"Bonjour. I've heard you've got un French restaurante. Zey feel like home to moi. May I enter?"
]
var dgood6 = [
	"Hahaa, I've found the town! Yours is the one! This town will be my home!",
	"Hello there, owner of the kingdom! My magic brings riches and wonders! Will you let me pass?",
	"Hello there, creator of a kingdom! I've heard you lack some riches and people, I can help you with that.",
	"What's that I see? A kingdom in need of help? Now that's a job for a mage!"
]
var dgood7 = [
	"Hello. I've got all the money and women you could ever need. May you let me enter?",
	"Greetings. My riches will accelerate the growth of your kingdom triplefold! You can't turn me down.",
	"I heard you lack horses, but I've got camels! With my camels, we will make town great!",
	"Your town is filthy. But I've got carpets! My carpets will hide all the filth! Temporarily, of course."
]