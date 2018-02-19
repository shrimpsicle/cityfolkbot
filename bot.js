var bot = require('twit');
var logger = require('winston');
var config = require('./config.js');
var bot = new bot(config);

//log settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

logger.info('Connected');
logger.info('Logged in as: ');
logger.info('@cityfolkbot !');
logger.info('Ready player three!');

var quote = ["Good morning, Mayor!",
        "That present you gave to me... I'll treasure it forever and ever and never forget you!",
        "You're a good friend, Mayor. I hope we can stay friends forever!",
        "When you get right down to it, what we all need is a placr to go. A place where we can escape the noise of our lives and just relax.",
        "Don't cry about dreams that don't come true today. Sometimes ya needs ta try another way!",
        "Being yourself is ALWAYS in style.",
        "Well, it's sure lucky we ran into each other. You know, we're probably destined to be good friends!",
        "The moon is gorgeous tonight. I wish I could put a few drops of its light in a jar for later.",
        "Sometimes, all it takes is a good friend to remind you of all the things you like about your life...",
        "Don't be too hard on yourself! Everyone needs to get some rest once in a while, Mayor.",
        "Oh, this ain't good-bye. I will see you again. That's how it goes whene'er yer my friend.",
        "And remember that bad times... are just times that are bad.",
        "Remember, things are never as bad as they seem. Honestly! Good luck and all that!",
        "A fresh, new start and a whole world of possible encounters await. I mean... How sweet is that?!",
        "I don't like seeing you hurt, even if it's just pretend...",
        "Otters are adorable. Maaan, you can't dispute that. Don't even try.",
        "Tee hee... I'm totally a little secret agent and stuff, bro!",
        "I wonder why it only snows during the winter... This is the kind of thing that keeps me up at nighy!",
        "If you work hard, or have a pretty smile, you can live the dream life!",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ];

var list = quote[Math.floor(Math.random() * quote.length)]

//tweeting
function tweeting() {
    bot.post('statuses/update', {status: (list)}, function (error, data, response) {
                if (error) {
                    console.log('Initialization failed.', data);
                }
                else {
                    console.log('Initialized!');
                }
                logger.info('Tweeted!');
            }
        )
    }

setInterval(function(error, data, response) {
    if (error) {
        console.log('Tweeting/timing failed.', data);
    }
    else {tweeting()}
}, 10000);