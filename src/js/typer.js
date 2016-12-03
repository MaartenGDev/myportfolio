class Typed {
    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    type(elements) {
        let index = 0;


        let nextItem = (index) => {
            const {selector, text, time} = elements[index];
            const letters = text.split("");

            const element = document.querySelector(selector);

            this.loopThroughLetters(element, letters, time).then(() => {
                index++;

                if(index < elements.length){
                    nextItem(index)
                }
            });
        };

        nextItem(index)

    }

    loopThroughLetters(element, letters, time) {
        return new Promise(res => {
            let index = 0;

            const nextItem = (index) => {
                this.sleep(time).then(() => {
                    element.innerHTML += letters[index];

                    index++;

                    if(index < letters.length){
                        nextItem(index);
                    }else{
                        res();
                    }
                })
            };

            nextItem(index);
        });


    }
}

module.exports = Typed;