class Highlight {
    init(selector, actions) {
        const elements = document.querySelectorAll(selector);

        elements.forEach((element) => {
            element.addEventListener("mouseenter", () => this.handleHover(element, actions));
            element.addEventListener("mouseleave", () => this.handleHover(element, actions));
        });

    }

    handleHover(element, actions){
        actions.forEach(action => {
            const elements = element.querySelectorAll(action.selector);

            elements.forEach(target => {
                action.classes.forEach(modifier => {
                    const selector = action.selector.substr(1);
                    const className = selector + modifier;

                    target.classList.toggle(className);
                });
            });
        });

    }
}

module.exports = Highlight;