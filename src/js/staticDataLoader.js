const projects = [
    {
        image: 'assets/images/prod/project__joblist.png',
        title: 'JobList',
        tags: ['PHP', 'Material Design', 'Laravel', 'Landing Page'],
        url: 'https://github.com/MaartenGDev/JobList',
    },
    {
        image: 'assets/images/prod/project__tripsearch.png',
        title: 'TripSearch',
        tags: ['ElasticSearch', 'GuzzleHttp', 'Composer', 'PHP'],
        url: 'https://github.com/MaartenGDev/TripSearch',
    },
    {
        image: 'assets/images/prod/project__cars.png',
        title: 'Cars',
        tags: ['PHP', 'Symfony', 'Material Design', 'UX'],
        url: '#projects',
    },
    {
        image: 'assets/images/prod/project__cachedrivers.png',
        title: 'CacheDrivers',
        tags: ['PHPUnit', 'Travis CI', 'Package', 'Code Coverage'],
        url: 'https://github.com/MaartenGDev/CacheDrivers',
    },
    {
        image: 'assets/images/prod/project__planner.png',
        title: 'Planner',
        tags: ['ReactJS', 'SPA', 'Laravel', 'REST API'],
        url: 'https://github.com/MaartenGDev/planner',
    },
    {
        image: 'assets/images/prod/project__devblog.png',
        title: 'devBlog',
        tags: ['Laravel', 'Blog', 'CRUD'],
        url: 'https://github.com/MaartenGDev/devBlog',
    }
];

const accountLinks = [
    {
        url: 'https://github.com/maartenGDev',
        cssClass: 'social-icon--github',
        icon: 'fa-github',
        newTab: true
    },
    {
        url: 'https://www.linkedin.com/in/maarten-grootoonk-098556131',
        cssClass: 'social-icon--linkedin social-icon--left',
        icon: 'fa-linkedin',
        newTab: true
    },
    {
        url: 'http://stackoverflow.com/users/6310593/maartendev',
        cssClass: 'social-icon--stackoverflow social-icon--right',
        icon: 'fa-stack-overflow',
        newTab: true
    },
    {
        url: 'mailto:hello@maartendev.me',
        cssClass: 'social-icon--mail',
        icon: 'fa-envelope',
        newTab: false
    },

];

const projectTemplate = (project) => `
            <section class="project">
                <img class="project__image project__image--preview" src="${project.image}">
                <section class="project__overlay project__overlay--smooth">
                    <h3 class="project__title">${project.title}</h3>
                    <section class="project__chip-list">
                        ${project.tags.map(x => `<section class="chip project__chip project__chip--hidden">${x}</section>`).join('')}
                    </section>
                </section>
                <section class="project__view project__view--hidden">
                    <a target="_blank" href="${project.title}" class="project__link">Bekijk op GitHub</a>
                </section>
            </section>
`;

const socialIconTemplate = (account) => `
                <a href="${account.url}" class="social-icon" ${account.newTab && `target="_blank"`}>
                    <i class="${account.cssClass} fa ${account.icon}"></i>
                </a>
`;

const loadProjects = () => {
    const projectsSelector = document.querySelector('.l-projects');

   projectsSelector.innerHTML = projects.map(project => projectTemplate(project)).join('');

};

const loadSocialIcons = () => {
    const socialIconsSelector = document.querySelector('.profile__links');

    socialIconsSelector.innerHTML = accountLinks.map(account => socialIconTemplate(account)).join('');

};
export default {
    load(){
        loadProjects();
        loadSocialIcons();
    }
}





















