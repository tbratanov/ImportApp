Glue({ layouts: "full" }).then(glue => {
    window.glue = glue;

    handleGlueReady();
}).catch(console.error)

function handleGlueReady() {
    console.log(`glue version:`, glue.version);
};

document.addEventListener('DOMContentLoaded', (event) => {
    handleDOMReady();
});

function handleDOMReady() {

    const importApp1 = document.getElementById("importApp1");
    importApp1.addEventListener("click", importApp1Func);

    const importApp2 = document.getElementById("importApp2");
    importApp2.addEventListener("click", importApp2Func);

    const removeAPP1 = document.getElementById("removeAPP1");
    removeAPP1.addEventListener("click", removeAPP1Func);

    const removeApp2 = document.getElementById("removeApp2");
    removeApp2.addEventListener("click", removeApp2Func);

    const clearMemmory = document.getElementById("clearMemmory");
    clearMemmory.addEventListener("click", clearMemmoryFunc);

    const importWorkspace = document.getElementById("importWorkspace");
    importWorkspace.addEventListener("click", importWorkspaceFunc);

    const importSwimlane = document.getElementById("importSwimlane");
    importSwimlane.addEventListener("click", importSwimlaneFunc);

    const ImportGlobalLayouts = document.getElementById("ImportGlobalLayouts");
    ImportGlobalLayouts.addEventListener("click", ImportGlobalLayoutsFunc);

    const removeLayouts = document.getElementById("removeLayouts");
    removeLayouts.addEventListener("click", removeLayoutsFunc);

};

let mode;

async function fetchAppGroup1() {

    const url = './definitions/apps/firstAppGroup.json'

    let response = await fetch(url);

    if (!response.ok) {
        throw new Error("error reading file" + response.status);
    };

    return response.json();
};

async function fetchAppGroup2() {

    const url = './definitions/apps/secondAppGroup.json'

    let response = await fetch(url);

    if (!response.ok) {
        throw new Error("error reading file" + response.status);
    };

    return response.json();
};

async function fetchLayoutsConfigs() {

    const url = './definitions/layouts/layouts.json'

    let response = await fetch(url);

    if (!response.ok) {
        throw new Error("error reading file" + response.status);
    };

    return response.json();
}

function getMode() {

    if (document.getElementById('Merge').checked == true) {
        mode = "merge";
    } else if (document.getElementById('Replace').checked == true) {
        mode = "replace";
    } else {
        mode = undefined;
    }
    return mode;
};

async function getGlobalLayouts() {
    
    let layouts = await fetchLayoutsConfigs();

    let globalLayouts;

    if(Array.isArray(layouts)) {
        globalLayouts = layouts.filter(filter => filter.type === "Global")
    } else {
        if(layouts.type === "Global") {
            globalLayouts = layouts;
        }
    };

    return globalLayouts;

};

async function getWorkspaceLayouts() {
    
    let layouts = await fetchLayoutsConfigs();

    let workspaceLayouts;

    if(Array.isArray(layouts)) {
        workspaceLayouts = layouts.filter(filter => filter.type === "Workspace")
    } else {
        if(layouts.type === "Workspace") {
            workspaceLayouts = layouts;
        }
    };

    return workspaceLayouts;
    
};

async function getCanvasLayouts() {
    
    let layouts = await fetchLayoutsConfigs();

    let canvasLayouts;

    if(Array.isArray(layouts)) {
        canvasLayouts = layouts.filter(filter => filter.type === "Swimlane")
    } else {
        if(layouts.type === "Swimlane") {
            canvasLayouts = layouts;
        }
    };

    return canvasLayouts;
    
};

function importApps(appGrp) {

    mode = getMode();

    let toImport;

    if(Array.isArray(appGrp)) {
        toImport = appGrp;
    } else {
        toImport = [appGrp];
    }

    if (mode === undefined) {
        window.alert("Mode is not selected, the method will default to mode: Replace!")
    };

    glue.appManager.inMemory.import(toImport, mode)
        .then(() => {
            window.alert("Application group is imported!")
        }).catch((err) => {
            console.warn(err)
        });
};

function removeApps(appName) {

    if (glue.appManager.application(appName) === undefined) {
        window.alert("Application with name: " + appName + " doesn't exist!")
    } else {
        glue.appManager.inMemory.remove(appName)
            .then(() => {
                window.alert("Removed!");
            })
            .catch((err) => {
                console.warn(err)
            });
    }

};

function importLayout(layout) {

    mode = getMode();

    if(layout === undefined) {
        window.alert("No such layout type found!")
    } else if (mode === undefined) {
        window.alert("Mode is not selected, the method will default to mode: Replace!")
    }


    let toImport;

    if(Array.isArray(layout)) {
        toImport = layout;
    } else {
        toImport = [layout];
    }

    glue.layouts.import(toImport, mode)
        .then(() => {
            window.alert("Import Successful");
        })
        .catch((err) => {
            console.warn(err);
        });
};

async function importApp1Func() {
    let appGroup1 = await fetchAppGroup1();
    importApps(appGroup1);
};

async function importApp2Func() {
    let appGroup2 = await fetchAppGroup2();
    importApps(appGroup2);
};

async function removeAPP1Func() {
    let appGroup1 = await fetchAppGroup1();

    if(Array.isArray(appGroup1)) {
        appGroup1.forEach((appToRemove) => {
            removeApps(appToRemove.name)
        })
    } else {
        removeApps(appGroup1.name)
    };
};

async function removeApp2Func() {
    let appGroup2 = await fetchAppGroup2();

    if(Array.isArray(appGroup2)) {
        appGroup2.forEach((appToRemove) => {
            removeApps(appToRemove.name)
        })
    } else {
        removeApps(appGroup2.name)
    };
};

function clearMemmoryFunc() {
    glue.appManager.inMemory.clear()
        .then(() => {
            window.alert("Memory cleared!");
        })
        .catch((err) => {
            console.warn(err);
        });
};

async function ImportGlobalLayoutsFunc() {
    let globalLayouts = await getGlobalLayouts();    
    importLayout(globalLayouts);
};

async function importSwimlaneFunc() {
    let canvasLayouts = await getCanvasLayouts();
    importLayout(canvasLayouts)
};

async function importWorkspaceFunc() {
    let workspaceLayouts = await getWorkspaceLayouts();
    importLayout(workspaceLayouts);
};

async function removeLayoutsFunc() {

    let layoutsToRemove = await fetchLayoutsConfigs();

    if(Array.isArray(layoutsToRemove)) {
        layoutsToRemove.forEach((layout) => {
            glue.layouts.get(layout.name, layout.type)
            .then(() => {
                return glue.layouts.remove(layout.type, layout.name);
            })
            .catch((err) => {
                console.warn(err)
            });
        });
    } else {
        glue.layouts.get(layoutsToRemove.name, layoutsToRemove.type)
        .then(() => {
            return glue.layouts.remove(layoutsToRemove.type, layoutsToRemove.name);
        })
        .catch((err) => {
            console.warn(err)
        });
    };



    window.alert("Layouts removed!");
};