class Tabs {
    init(selector) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(element => {
            element.addEventListener("click", () => this.handleClick(elements, element))
        });
    }

    handleClick(elements, current) {
        const className = 'tabs__nav--active';

        elements.forEach(element => element.classList.remove(className))

        const tabId = current.getAttribute('data-target-tab')

        const tabItems = document.querySelectorAll('.tabs__item')
        const tabItem = document.querySelector('.tabs__item--' + tabId)

        tabItems.forEach(tabItem => tabItem.classList.add('tabs__item--hidden'))

        tabItem.classList.remove('tabs__item--hidden')

        current.classList.add(className)
    }

}

module.exports = Tabs;