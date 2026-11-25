
const themeButton = document.querySelector('#theme-toggle');

themeButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.dataset.theme;

    const newTheme = currentTheme === 'black'
        ? 'white'
        : 'black';

    document.documentElement.dataset.theme = newTheme;

    themeButton.innerHTML = newTheme === 'black'
        ? `<svg xmlns="http://www.w3.org/2000/svg"
               width="48" height="48"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round">
               <circle cx="12" cy="12" r="4"/>
               <path d="M12 2v2"/>
               <path d="M12 20v2"/>
               <path d="m4.93 4.93 1.41 1.41"/>
               <path d="m17.66 17.66 1.41 1.41"/>
               <path d="M2 12h2"/>
               <path d="M20 12h2"/>
               <path d="m6.34 17.66-1.41 1.41"/>
               <path d="m19.07 4.93-1.41 1.41"/>
           </svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg"
               width="48" height="48"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               stroke-width="2"
               stroke-linecap="round"
               stroke-linejoin="round">
               <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.463.402.807a6.5 6.5 0 0 0 8.268 8.268c.344-.215.829-.003.803.397"/>
           </svg>`;
});

const curiositiesButton = document.querySelector('#curiosities_toggle');
const curiositiesContent = document.querySelector('#curiosities_content');

curiositiesButton.addEventListener('click', () => {
    const isHidden = curiositiesContent.hidden;

    curiositiesContent.hidden = !isHidden;

    curiositiesButton.innerHTML = isHidden
        ? `ESCONDER CURIOSIDADES
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round">
                <path d="m5 12 7-7 7 7"/>
                <path d="M12 19V5"/>
            </svg>`
        : `VER CURIOSIDADES
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round">
                <path d="M12 5v14"/>
                <path d="m19 12-7 7-7-7"/>
            </svg>`;
});