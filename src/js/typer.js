class Typed {
    sleep(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    type(elements) {
        let index = 0;

        let nextItem = index => {
            const { selector, text, time } = elements[index];
            const letters = text.split("");

            const element = document.querySelector(selector);

            this.loopThroughLetters(element, letters, time).then(_ => {
                index++;

                if (index < elements.length) {
                    nextItem(index)
                }
            });
        };

        nextItem(index)
    }

    loopThroughLetters(element, letters, time) {
        return new Promise(resolve => {
            let index = 0;

            const nextItem = (index) => {
                this.sleep(time).then(_ => {
                    element.innerHTML += letters[index];

                    index++;

                    if (index < letters.length) {
                        nextItem(index);
                    } else {
                        resolve();
                    }
                })
            };

            nextItem(index);
        });


    }
}

module.exports = Typed;