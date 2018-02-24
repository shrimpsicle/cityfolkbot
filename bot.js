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
logger.info('@cityfolkbot!');
logger.info('Ready player three!');
logger.info('Author info: bit.ly/j-ame');

function list() {
    var quote = [
        "Good morning, Mayor!",
        "That present you gave to me... I'll treasure it forever and ever and never forget you!",
        "You're a good friend, Mayor. I hope we can stay friends forever!",
        "When you get right down to it, what we all need is a place to go. A place where we can escape the noise of our lives and just relax.",
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
        "I wonder why it only snows during the winter... This is the kind of thing that keeps me up at nighy!",
        "If you work hard, or have a pretty smile, you can live the dream life!",
        "Just remember that the absolutely most important part is to love yourself!",
        "Have the courage to go after what you want! You can't spend your whole life waiting for happiness.",
        "I might not seem like it, but I'm quite shy around new people, Mayor.",
        "Yeah, for certain. Just like you and I were destined to meet, this item was meant for you.",
        "I wonder what the fish think when they see me... They're probably like, 'That's so weird how he walks around on legs instead of swimming!'",
        "Your enemy is the old you! The new you will get a little bit faster every day until you're the best around!",
        "Maybe it's what's on the inside that counts, but being told you look good feels good!",
        "Even the peppiest of people feel blue sometimes. It's a sad fact of life.",
        "Sometimes, all it takes is a good friend to remind you of all the things you like about your life...",
        "Rainy days like this give me another excuse to stay inside with a book.",
        "Even if it's temporary, fleeting happiness is better than none!",
        "I mean, I like the rain when I'm sitting inside, 'cause it's all toasty and warm.",
        "You'll look back fondly on this year, eventually. Time heals all wounds, as crazy as it may seem.",
        "When yer in love, sometimes ya miss some simple cues. When I first took me wife out, I forgot shoes! I forgot shoes!",
        "I fell in love with a girl who changed me life. Made her me wife, and I'm still sweet on her.",
        "Know what? I thought of you the other day, and it filled me with warm, fuzzy feelings!",
        "I had a dream... It had been pouring rain for days. Then the two of us, side by side, both looked up at a rainbow. That's when I knew that I think rainbows are awesome.",
        "It's a new day!",
        "Don't mind me- I'll just be here lookin' at the stars until someone throws me out of the place.",
        "So, it's good to appreciate the times when you've got nowhere to be and nothing to do, Mayor.",
        "They say some people just can't get enough rainy days. Are you one of those people, Mayor?",
        "I think walking around in the rain is really cool. But I don't want to catch a cold! Do I look cool, or do I stay healthy? I can't decide, Mayor!",
        "This might seem out of the blue, but I want to tell you how much I look up to you.",
        "Promise me we'll be friends forever! Promise me!",
        "Yes! Mission accomplished! When I woke up this morning, I felt I had to give someone a super-nice present!",
        "If you don't mind, do you think you'd like to be friends?",
        "If I can encourage or cheer people up by being someone they always remember, that'd be great!",
        "Hey! Did you look up at the stars?!",
        "What's important is not just what you look like on the outisde, but what you look like on the inside!",
        "Isn't that nice? We're all just little clumps of stardust, walking around. So when I look up at the stars, I just wonder... what will they all become someday?",
        "The world spins 'round, but I be here to stay. And I gots dreams I'll follow some fine day.",
        "Mayor, do people ever call you a dreamer...?",
        "Who knows what the stars have in store for us?",
        "Aren't those little yellow birds cute? Just flying free, not a care in the world... I think we could all learn a thing or two from them, myself included.",
        "Mayor, have you done everything you can? Do your best and leave no regrets!",
        "Mayor! Just in the nick of time! I need someone to keep me company!",
        "Hello there, Mayor!",
        "Is there something I can help you with today?"];
        return quote[Math.floor(Math.random() * quote.length)];
    }

// tweeting 
function tweeting() {
    bot.post('statuses/update', {status: list()}, function (error, data, response) {
                if (error) {
                    logger.info('Tweeting failed.', data);
                }
                else {
                    logger.info('Tweeted!');
                }
            }
        )
    }

// timer
setInterval(function(error, data, response) {
    if (error) {
        logger.info('Tweeting/timing failed.', data);
    }
    else {tweeting()}},
1800000);
