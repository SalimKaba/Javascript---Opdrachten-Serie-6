
// Create a array containing "Html", "CSS", "Java", "PHP"
var CreationArrayLanguages = function () {
    return languages = ["Html", "CSS", "Java", "PHP"];
}

// Create a array containing the numbers from 0 to 5
var CreateArrayNumbers = function () {
    var numbers = [];

    for (var i = 0; i < 6; i++) {
      numbers.push(i);
    }
    return numbers
    }

// Replace the third element of the array with "Javascript"
var languages = ["Html","CSS","Java","PHP"];
var ReplacementElement = function (languages) {
  for (var i = 0; i < languages.length; i++) {
    if (i == 2) {
        languages[2] = "Javascript";
    }
  }
    return languages
}

      /* enkel   languages[2] = "Javascript"; is ok  */

// Add "Ruby" and "Python" at the end of the array
var languages = ['Html', 'CSS', 'Javascript', 'PHP'];
var AddElementLanguages = function (languages) {
    languages.push("Ruby", "Python");
    return languages
}

// Add "-2" and "-1" at the beginning of the table numbers
var numbers = [0,1,2,3,4,5];
var AddElementNumbers = function (numbers) {
     numbers.unshift(-2, -1);
     return numbers
}

// Delete the first element of the languages array
var languages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
var DeletingFirstElement = function (languages) {
    languages.shift();
    return languages
}

// Delete the last element of the languages array
var languages = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
var DeleteLastElement = function (languages) {
  languages.pop();
  return languages
}

// Make the "social_networks_chain" chain into a "social_networks" array
var social_networks_chain = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
var ArrayStringConversion = function (social_networks_chain) {
    var social_networks = social_networks_chain.split(",");
    return social_networks
}

// Make the "languages" array into a "languages_chaine" string. Separate languages with a comma
var languages = ['CSS', 'Javascript', 'PHP', 'Ruby'];
var ChainArrayConversion = function (languages) {
    return languages.toString();
}

// Sort the "social_networks" array
var social_networks = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
var SortingArray = function (social_networks) {
  return social_networks.sort();

}

// Bonus: Reverse the "languages" array
var languages = ['CSS','Javascript','PHP','Ruby'];
var ReverseArray = function (languages){
  return languages.reverse();

}
