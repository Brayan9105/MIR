const reverse = str => {
    if(str.length <= 1) return str

    return str[str.length -1].concat(reverse(str.slice(0, str.length -1)))

    // [].concat(reverse(str.slice( 'hello' ))) = 'o'+'lleh''
        // [].concat(reverse(str.slice( 'hell' ))) = 'l'+'leh'
            // [].concat(reverse(str.slice( 'hel' ))) =  'l' + 'eh'
                // [].concat(reverse(str.slice( 'he' ))) =  'e' +'h'
                    // [].concat(reverse(str.slice( 'h' ))) = 'h'

}

console.log(reverse("hello word")); // "dlrow olleh"