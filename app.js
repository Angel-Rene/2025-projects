const prompt = require('prompt-sync')();
console.log('What do you wish to be called?\n')
const username = prompt('Sign here & sell your soul: ');
console.log(`\nMany warm greetings to you, ${username}! The road ahead looks hard won to travel.`);
console.log('\nChoose your faction!\n');

let choices = `
    |NETRUNNER| Masters of the digital world.\n
    |ROGUE| Merceneries for hire.\n
    |CORPORATE SPY| The deal makers behind the curtians.\n
    |NOMAD| Roaming scavengers.\n
    |MAGE| Weave spells and potions in the streets.\n
  `;

console.log(choices);
const choice = prompt('Your choice: ');

switch(choice) {
    case 'Netrunner', 'netrunner':
        console.log("\nYou've chosen to be a Netrunner. \nDigital realms bend to your will, but beware the dangers lurking in the code.\n");
        break;
    case 'Rogue', 'rogue':
        console.log("\nYou've chosen to be a Rogue. \nSteel, neon, and blood — the city pays you to stay in the shadows.\n");
        break;
    case 'Mage', 'mage':
        console.log("\nYou've chosen to be a Mage. \nThe magic of the old world clashes with the tech of the new. You are the bridge between the two.\n");
        break;
    case 'Nomad', 'nomad':
        console.log("\nYou've chose to be a Nomad. \nThe wastelands are your home, but the city calls with its neon lights and promises.\n");
        break;
    case 'Corporate Spy', 'Spy', 'corporate spy', 'spy':
        console.log("\nYou've chosen The Corporate Spy. \nYou move in shadows, paid in secrets, manipulating the power players of the world.\n");
        break;
    default:
        console.log("\nERROR 404: Access denied. \nThe neon lights flicker in aticipation and The Darkness is closing in on you.\n");
        break;
};
console.log("This is part of an going project. Stay alive and stay tuned for more coming soon...")