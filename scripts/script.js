console.log('script.js has been sourced in.')

// [ name, favoriteAnimal ]
var people = [
    {
        name: 'Canin', 
        favoriteAnimal: 'Uniflitten'
    } ,
    {   
        name: 'Charly', 
        favoriteAnimal:  'Angler Fish'
    } ,
    {
        name:  'Bobby', 
        favoriteAnimal:  'Liger'
    } ,
    {   name:  'Luke', 
        favoriteAnimal:  'Killer Whale'
    }
];

console.log(people);

// {person}'s favorite animal is the {favoriteAnimal}
// Log for Canin:  Canin's favorite animal is the Uniflitten 
for (var i = 0; i < people.length; i++) {
    var person = people[i]; // ['Canin', 'Uniflitten']
    console.log(person[0] + '\'s favorite animal is the ' + person[1]);
}