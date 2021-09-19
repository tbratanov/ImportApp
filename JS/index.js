Glue().then(glue => {
    window.glue = glue;
    handleGlueReady();
}).catch(console.error)

function handleGlueReady() {
    console.log(`glue version:`,glue.version);
};

document.addEventListener('DOMContentLoaded', (event) => {
    handleDOMReady();
});

function handleDOMReady() {

};