export function codeGenerator():string{
    const alphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
        "s", "t", "u", "v", "w", "x", "y", "z"
    ]
    const specialCharacters = [
        "|", "/", "?", "!", "@", "#", "%", "&", "*", "(", ")", "-", "=", "+", "{", "}", "[", "]",
        ";", "<", ">", "1", "2", "3", "4", "5", "6", "7", "8", "9"
    ]
    const data = Date.now()

    const sort1 = alphabet[Math.floor(Math.random() * (alphabet.length + 1))];
    const sort2 = alphabet[Math.floor(Math.random() * (alphabet.length + 1))];
    const sort3 = specialCharacters[Math.floor(Math.random() * (specialCharacters.length + 1))];
    const sort4 = specialCharacters[Math.floor(Math.random() * (specialCharacters.length + 1))];
    const sort5 = specialCharacters[Math.floor(Math.random() * (specialCharacters.length + 1))];

    const code = `${sort3}${sort1}${data}${sort2}${sort4}${sort5}${sort1}`
    return code
}
