let wishes = [
    `I hope you treat yourself to something special on your birthday – you deserve it!`,
    `Have a most wonderful, happy, and fantastical birthday!`,
    `Wishing you all the happiness and joy for your birthday! And for all other days too!`,
    `Another year, another birthday. I hope this one is as amazing as you are!`,
    `Have a wonderful birthday.`,
    `I hope you have a wonderful birthday, and may you have many more to come!`,
    `May your birthday become a memory you'll cherish forever. Happy birthday!`,
    `I hope you have a most wonderful and relaxing birthday.`,
    `console.log("Happy Birthday!!");`,
    `echo "Happy Birthday fellow Geek!";`,
];

function getRandomWish() {
    return wishes[Math.floor(Math.random() * wishes.length)];
}

module.exports = { getRandomWish };