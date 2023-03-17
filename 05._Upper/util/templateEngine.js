import fs from 'fs';
import getJoke from "./jokes/joke.js"

function renderPage(page, config={}) {
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
                    .replace("$TAB_TITLE", config.tabTitle || "Upper")
                    .replace("$CSS_LINK", config.cssLink || "");
    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
                    .replace("$FOOTER_YEAR", `© / ${new Date().getFullYear()}`);

    return navbar + page + footer;
}

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

async function readJokePage() {
    const path = "./public/pages/jokes/jokes.html";
    const jokePage = readPage(path);
    const joke = await getJoke();

    const constructedPage = renderPage(jokes, {
        tabtitle: "Upper | Jokes",
        cssLink: `<link rel="stylesheet" href="/pages/jokes/jokes.css">`
        });

        return constructedPage;
    };

export default {
    renderPage,
    readPage
}