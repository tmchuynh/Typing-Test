let timer_text = document.querySelector(".curr_time");
let accuracy_text = document.querySelector(".curr_accuracy");
let error_text = document.querySelector(".curr_errors");
let cpm_text = document.querySelector(".curr_cpm");
let wpm_text = document.querySelector(".curr_wpm");
let quote_text = document.querySelector(".quote");
let input_area = document.querySelector(".input_area");
let restart_btn = document.querySelector(".restart_btn");
let cpm_group = document.querySelector(".cpm");
let wpm_group = document.querySelector(".wpm");
let error_group = document.querySelector(".errors");
let accuracy_group = document.querySelector(".accuracy");

let TIME_LIMIT = 60;
let timeLeft = TIME_LIMIT;
let timeElapsed = 0;
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let characterTyped = 0;
let current_quote = "";
let quoteNo = 0;
let timer = null;

let quotes_array = [
    "Don't be indifferent about any random idea that occurs to you, because each and every idea is for a particular purpose. it may not be beneficial to you, but can be what others are craving for",
    "Think of life as a giant, fat cat you're in charge of. Sometimes you can control it, but other times, it's going to do what it wants and you have to roll with it. And sometimes you can do everything - everything you're s'posed to do- and it'll still shred all the things you hold dear... The only thing you can really do with life is rub its belly and prepare for the worst.",
    "We are face to face with our destiny and we must meet it with high and resolute courage. For us is the life of action, of strenuous performance of duty; let us live in the harness, striving mightily; let us rather run the risk of wearing out than rusting out.",
    "A king does not abide within his tent while his men bleed and die upon the field. A king does not dine while his men go hungry, nor sleep when they stand at watch upon the wall. A king does not command his men's loyalty through fear nor purchase it with gold; he earns their love by the sweat of his own back and the pains he endures for their sake. That which comprises the harshest burden, a king lifts first and sets down last. A king does not require service of those he leads but provides it to them...A king does not expend his substance to enslave men, but by his conduct and example makes them free.",
    "But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place.",
    "Are you paralyzed with fear? That’s a good sign. Fear is good. Like self-doubt, fear is an indicator. Fear tells us what we have to do. Remember one rule of thumb: the more scared we are of a work or calling, the more sure we can be that we have to do it.",
    "Flirtation doesn't have to go somewhere; it certainly doesn't need to end up in bed. I like to think of it as a little friendlier than a handshake, a little less intimate than a kiss. It's a way of saying hi, you look great, have a wonderful day. A tasteful flirtation, played out people who understand the rules, leave everyone feeling good and can perk up the bluest mood.",
    "Some fail to bear in mind that everyone is sentenced to death. Death is a treacherous virus that strikes randomly. The only truth is that nobody is going to make it out alive. We are all living on probation and our expiry date is indefinite. ( “Living on probation” )",
    "This is the other secret that real artists know and wannabe writers don’t. When we sit down each day and do our work, power concentrates around us. The Muse takes note of our dedication. She approves. We have earned favor in her sight. When we sit down and work, we become like a magnetized rod that attracts iron filings. Ideas come. Insights accrete.",
    "The artist committing himself to his calling has volunteered for hell, whether he knows it or not. He will be dining for the duration on a diet of isolation, rejection, self-doubt, despair, ridicule, contempt, and humiliation.",
    "I believe in love at first sight. Fate, the universe, all of it. But not how you’re thinking. I don’t mean it in the 'our souls were split and you’re my other half forever and ever' sort of way. I just think you’re mean to meet some people. I think the universe nudges them into your path. Even on random Monday afternoons in July. Even at the post office",
    "Shit, money, and the World, the three American truths, powering the American mobility, claimed the Slothrops, clasped them for good to the country's fate. But they did not prosper... about all they did was persist",
    "If you take some words at random and put them together, it becomes gibberish, and everyone who knows the meaning of words knows it as such. But if you take unrelated moving images and string them together, there will always be some people who will hold that the resultant strip of celluloid aims at some profundity.",
    "We fear discovering that we are more than we think we are. More than our parents/children/teachers think we are. We fear that we actually possess the talent that our still, small voice tells us. That we actually have the guts, the perseverance, the capacity. We fear that we truly can steer our ship, plant our flag, reach our Promised Land. We fear this because, if it’s true, then we become estranged from all we know. We pass through a membrane. We become monsters and monstrous.",
    "Resistance is experienced as fear; the degree of fear equates to the strength of Resistance. Therefore the more fear we feel about a specific enterprise, the more certain we can be that that enterprise is important to us and to the growth of our soul. That's why we feel so much Resistance. If it meant nothing to us, there'd be no Resistance."
];

function updateQuote() {
    quote_text.textContent = null;
    current_quote = quotes_array[quoteNo];

    // separate each character and make an element
    // out of each of them to individually style them
    current_quote.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        quote_text.appendChild(charSpan)
    })

    // roll over to the first quote
    if (quoteNo < quotes_array.length - 1)
        quoteNo++;
    else
        quoteNo = 0;
}