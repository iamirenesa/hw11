// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = function(userLength, array){
    let quantity = array.length;
    let userKey = '';
    for (let i = 0; i < userLength; i++) {
        let index = Math.floor(Math.random() * quantity);
        userKey = userKey + array[index];
    }
    return userKey;
}

const key = generateKey(16, characters);
console.log(key);