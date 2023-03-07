document.addEventListener("DOMContentLoaded", () => {

    const HTML = document.documentElement.outerHTML;

    document.documentElement.outerHTML = engine.translateDynamicBrackets(HTML);

});