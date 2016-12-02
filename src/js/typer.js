class Typed{
    type(text, time, selector){
        const element = document.querySelector(selector);
        const letters = text.split("");
        let position = 0;

        const interval = setInterval(() => {
            if(position < letters.length){
                console.log(letters[position]);
                element.innerHTML += letters[position];
            }else{
                clearInterval(interval);
            }

            position++;
        }, time);
    }
}

module.exports = Typed;