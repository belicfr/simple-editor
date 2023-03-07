const { contextBridge } = require("electron");

// APIs /////////////////////////////////////////

const PROPS_API = {
    software: {
        name: "Simple Editor",
        author: "belicfr",
    },
};

const ENGINE_API = {
    dynamicBracketsRegex: /{{([?])?([a-zA-Z0-9_.]+)}}/,

    translateDynamicBrackets: html => {
        let dynamicBrackets,
            stopResearch;

        do {
            dynamicBrackets = ENGINE_API.dynamicBracketsRegex.exec(html);

            console.log(dynamicBrackets);

            stopResearch = dynamicBrackets === null;
            
            if (!stopResearch) {
                html = html.replaceAll(dynamicBrackets[0], "TEST_DEBUG");
            }
        } while (!stopResearch);

        return html;
    },
};

// EXPOSING /////////////////////////////////////

contextBridge.exposeInMainWorld("props", PROPS_API);
contextBridge.exposeInMainWorld("engine", ENGINE_API);