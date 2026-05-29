const PROJECTS = [
    {
        name: 'mio',
        desc: 'advanced Minecraft client',
        url:  'https://mioclient.me/',
    },
    {
        name: 'cat-format',
        desc: 'java formatting library',
        url:  'https://github.com/cattyngmd/CatFormat',
    },
    {
        name: 'micro-kits',
        desc: 'lightweight kit plugin',
        url:  'https://github.com/pvpfish/MicroKits',
    },
    {
        name: 'oyvey-ported',
        desc: 'Minecraft client base',
        url:  'https://github.com/mioclient/oyvey-ported',
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('projects-list');

    PROJECTS.forEach(project => {
        const item = document.createElement('div');
        item.className = 'reveal-item';

        item.innerHTML = `
            <a href="${project.url}" target="_blank">
                <div class="reveal-name">
                    ${project.name}
                    <span class="reveal-sep">·</span>
                    <span class="reveal-desc">${project.desc}</span>
                </div>
            </a>
        `;

        list.appendChild(item);
    });
});