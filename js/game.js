// Create the CONST Variables for the game with all the elements of the unordered list of each column (Nouns, Verbs, Adjectives, Second Nouns and Settings)
// This is a simple <ul> with the <li> elements. The first is the title, the last is the button. Just the middle ones are the options (1 to 7)
const FIRST_NOUNS = document.querySelector('#firstNouns');
const VERBS = document.querySelector('#verbs');
const ADJECTIVES = document.querySelector('#adjectives');
const SECOND_NOUNS = document.querySelector('#secondNouns');
const SETTINGS = document.querySelector('#settings');

// Create the CONST Variables with the button action (to attach the EventListener) for the game of each column (Nouns, Verbs, Adjectives, Second Nouns and Settings)
const SELECT_FIRST_NOUNS = document.querySelector('#selectFirstNoun');
const SELECT_VERBS = document.querySelector('#selectVerb');
const SELECT_ADJECTIVES = document.querySelector('#selectAdjective');
const SELECT_SECOND_NOUNS = document.querySelector('#selectSecondNoun');
const SELECT_SETTINGS = document.querySelector('#selectSetting');

// Create the CONST Variable of the buttons to attach the EventListener with the Playback and the Surprise button
const ACTION_PLAYBACK = document.querySelector('#actionPlayback');
const ACTION_SURPRISE = document.querySelector('#actionSurprise');

// Create the CONST Variable of the Story to print the resulting story
const STORY = document.querySelector('#story');

// Initialize all the variables for the game (for each option)
// The first option is always the default option and is the first one in the list (the index 0 is the Title of the column and is omitted)
let firstNouns = 1;
let verbs = 1;
let adjectives = 1;
let secondNouns = 1;
let settings = 1;

// Create an Array with all the options for each column (Nouns, Verbs, Adjectives, Second Nouns and Settings)
let firstNounList = [
    'The Turkey',
    'Mom',
    'Dad',
    'The Dog',
    'My Teacher',
    'The Elephant',
    'The Cat',
];

let verbList = [
    'sat on',
    'ate',
    'dance with',
    'saw',
    'doesn\'t like',
    'kissed',
    'play',
];

let adjectiveList = [
    'a funny',
    'a scary',
    'a goofy',
    'a slimy',
    'a barking',
    'a fat',
    'a big',
];

let secondNounList = [
    'goat',
    'monkey',
    'fish',
    'cow',
    'frog',
    'bug',
    'worm',
];

let settingList = [
    'on the moon',
    'on the chair',
    'in my spaghetti',
    'in the soup',
    'on the grass',
    'in my shoes',
    'in the floor',
];

// This is a EventListener for the button to select the first option of the Nouns column
SELECT_FIRST_NOUNS.addEventListener('click', function (ev) {
    // This is a loop to remove the background color of all the options of the Nouns column
    for (let i = 0; i < FIRST_NOUNS.children.length; i++) {
        FIRST_NOUNS.children.item(i).classList.remove('bg-slate-400');
    }
    // If the firstNouns is equal to the length which is 8) minus 1 means that is the actual last option, so I reassign the value to 0
    if (firstNouns === FIRST_NOUNS.children.length - 1) {
        firstNouns = 0;
    }

    // Increment the firstNouns variable (if is zero becomes to 1 and so on)
    firstNouns++;
    // Add the background color to the selected option
    FIRST_NOUNS.children.item(firstNouns).classList.add('bg-slate-400');
});

// This is a EventListener for the button to select the first option of the Verbs column
SELECT_VERBS.addEventListener('click', function (ev) {
    // This is a loop to remove the background color of all the options of the Verbs column
    for (let i = 0; i < VERBS.children.length; i++) {
        VERBS.children.item(i).classList.remove('bg-slate-400');
    }

    // If the verbs is equal to the length which is 8) minus 1 means that is the actual last option, so I reassign the value to 0
    if (verbs === VERBS.children.length - 1) {
        verbs = 0;
    }

    // Increment the verbs variable (if is zero becomes to 1 and so on)
    verbs++;
    // Add the background color to the selected option
    VERBS.children.item(verbs).classList.add('bg-slate-400');
});

// This is a EventListener for the button to select the first option of the Adjectives column
SELECT_ADJECTIVES.addEventListener('click', function (ev) {
    // This is a loop to remove the background color of all the options of the Adjectives column
    for (let i = 0; i < ADJECTIVES.children.length; i++) {
        ADJECTIVES.children.item(i).classList.remove('bg-slate-400');
    }

    // If the adjectives is equal to the length which is 8) minus 1 means that is the actual last option, so I reassign the value to 0
    if (adjectives === ADJECTIVES.children.length - 1) {
        adjectives = 0;
    }

    // Increment the adjectives variable (if is zero becomes to 1 and so on)
    adjectives++;
    // Add the background color to the selected option
    ADJECTIVES.children.item(adjectives).classList.add('bg-slate-400');
});

// This is a EventListener for the button to select the first option of the Second Nouns column
SELECT_SECOND_NOUNS.addEventListener('click', function (ev) {
    // This is a loop to remove the background color of all the options of the Second Nouns column
    for (let i = 0; i < SECOND_NOUNS.children.length; i++) {
        SECOND_NOUNS.children.item(i).classList.remove('bg-slate-400');
    }

    // If the secondNouns is equal to the length which is 8) minus 1 means that is the actual last option, so I reassign the value to 0
    if (secondNouns === SECOND_NOUNS.children.length - 1) {
        secondNouns = 0;
    }

    // Increment the secondNouns variable (if is zero becomes to 1 and so on)
    secondNouns++;
    // Add the background color to the selected option
    SECOND_NOUNS.children.item(secondNouns).classList.add('bg-slate-400');
});

// This is a EventListener for the button to select the first option of the Settings column
SELECT_SETTINGS.addEventListener('click', function (ev) {
    // This is a loop to remove the background color of all the options of the Settings column
    for (let i = 0; i < SETTINGS.children.length; i++) {
        SETTINGS.children.item(i).classList.remove('bg-slate-400');
    }

    // If the settings is equal to the length which is 8) minus 1 means that is the actual last option, so I reassign the value to 0
    if (settings === SETTINGS.children.length - 1) {
        settings = 0;
    }

    // Increment the settings variable (if is zero becomes to 1 and so on)
    settings++;
    // Add the background color to the selected option
    SETTINGS.children.item(settings).classList.add('bg-slate-400');
});

// This is a EventListener for the button to generate a random story
ACTION_SURPRISE.addEventListener('click', function (ev) {
    // This is a function to generate a random number between a range of numbers (1 to 7) and assign it to the variables
    firstNouns = getRandomArbitrary(1, 7);
    verbs = getRandomArbitrary(1, 7);
    adjectives = getRandomArbitrary(1, 7);
    secondNouns = getRandomArbitrary(1, 7);
    settings = getRandomArbitrary(1, 7);

    // This is a loop to remove the background color of all the options of the Nouns column
    for (let i = 0; i < FIRST_NOUNS.children.length; i++) {
        FIRST_NOUNS.children.item(i).classList.remove('bg-slate-400');
    }

    // This is a loop to remove the background color of all the options of the Verbs column
    for (let i = 0; i < VERBS.children.length; i++) {
        VERBS.children.item(i).classList.remove('bg-slate-400');
    }

    // This is a loop to remove the background color of all the options of the Adjectives column
    for (let i = 0; i < ADJECTIVES.children.length; i++) {
        ADJECTIVES.children.item(i).classList.remove('bg-slate-400');
    }

    // This is a loop to remove the background color of all the options of the Second Nouns column
    for (let i = 0; i < SECOND_NOUNS.children.length; i++) {
        SECOND_NOUNS.children.item(i).classList.remove('bg-slate-400');
    }

    // This is a loop to remove the background color of all the options of the Settings column
    for (let i = 0; i < SETTINGS.children.length; i++) {
        SETTINGS.children.item(i).classList.remove('bg-slate-400');
    }

    // Add the background color to the selected option (the random number generated)
    FIRST_NOUNS.children.item(firstNouns).classList.add('bg-slate-400');
    VERBS.children.item(verbs).classList.add('bg-slate-400');
    ADJECTIVES.children.item(adjectives).classList.add('bg-slate-400');
    SECOND_NOUNS.children.item(secondNouns).classList.add('bg-slate-400');
    SETTINGS.children.item(settings).classList.add('bg-slate-400');
});

// This is a EventListener for the button to generate the sentence
ACTION_PLAYBACK.addEventListener('click', function (ev) {
    // This assign the text of the selected option to the variables of each option
    let firstNoun = firstNounList[firstNouns-1];
    let verb = verbList[verbs -1];
    let adjective = adjectiveList[adjectives -1];
    let secondNoun = secondNounList[secondNouns -1];
    let setting = settingList[settings -1];

    // This is a variable to use the SpeechSynthesis API
    let synth = speechSynthesis;

    // This is a variable to concatenate the variables to generate the sentence
    let final_text = firstNoun + ' ' + verb + ' ' + adjective + ' ' + secondNoun + ' ' + setting + '.';

    // This is a variable to assign the sentence to the HTML element
    STORY.innerHTML = final_text;

    // This is to assign the text to speech resulting of the concatenation of the variables
    let utterance = new SpeechSynthesisUtterance(final_text);
    // This is to speak the sentence generated (The compatibility can be checked in https://caniuse.com/#feat=speech-synthesis)
    synth.speak(utterance);
});


// This is a function to generate a random number between a range of numbers (1 to 7) and assign it to the variables
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}