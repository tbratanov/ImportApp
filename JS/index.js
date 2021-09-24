Glue({layouts: "full"}).then(glue => {
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

const layoutName = "layoutToImport";

const appGrp1 = [{
    "title": "Test_Tab",
    "type": "window",
    "name": "Test_Tab",
    "hidden": false,
    "details": {
        "url": "about:blank",
        "mode": "tab",
        "title": "Test_Tab"
    },
    "customProperties": {
        "folder": "Import_Test"
    }
}];

const appGrp2 = [{
    "title": "Test_Flat",
    "type": "window",
    "name": "Test_Flat",
    "hidden": false,
    "details": {
        "url": "about:blank",
        "mode": "flat",
        "title": "Test_Flat"
    },
    "customProperties": {
        "folder": "Import_Test"
    }
},
{
    "title": "Test_HTML",
    "type": "window",
    "name": "Test_HTML",
    "hidden": false,
    "details": {
        "url": "about:blank",
        "mode": "html",
        "title": "Test_HTML"
    },
    "customProperties": {
        "folder": "Import_Test"
    }
}];

const globalLayout = [{
    "type": "Global",
    "name": layoutName,
    "metadata": {},
    "token": "S1ZXnxo7F",
    "context": {},
    "displays": [
      {
        "width": 1920,
        "top": 2,
        "workingAreaHeight": 1040,
        "height": 1080,
        "scale": 1,
        "displayName": "DISPLAY1",
        "id": 0,
        "workingAreaLeft": -1920,
        "name": 131073,
        "workingAreaTop": 2,
        "isPrimary": false,
        "left": -1920,
        "workingAreaWidth": 1920
      },
      {
        "width": 2560,
        "top": 0,
        "workingAreaHeight": 1400,
        "height": 1440,
        "scale": 1,
        "displayName": "DISPLAY2",
        "id": 1,
        "workingAreaLeft": 0,
        "name": 65592,
        "workingAreaTop": 0,
        "isPrimary": true,
        "left": 0,
        "workingAreaWidth": 2560
      }
    ],
    "version": 2,
    "components": [
      {
        "application": "Test_Tab",
        "type": "window",
        "componentType": "application",
        "state": {
          "isCollapsed": false,
          "createArgs": {
            "parentInstanceId": "3228_0"
          },
          "tabIndex": -1,
          "windowState": "Normal",
          "allowChannels": false,
          "mode": "tab",
          "tabGroupId": "pSVyeycQFT",
          "channelId": "",
          "restoreSettings": {
            "groupId": "3228_g_4_21F8026A",
            "groupZOrder": 1,
            "groupDisplayId": 65592
          },
          "restoreState": "Normal",
          "bounds": {
            "left": 1094,
            "top": 304,
            "width": 400,
            "height": 400,
            "right": 1494,
            "bottom": 704
          },
          "isSticky": true,
          "parentInstanceId": "3228_0",
          "instanceId": "3228_12"
        }
      },
      {
        "application": "Test_Flat",
        "type": "window",
        "componentType": "application",
        "state": {
          "isCollapsed": false,
          "createArgs": {
            "parentInstanceId": "3228_0"
          },
          "windowState": "Normal",
          "allowChannels": false,
          "mode": "flat",
          "channelId": "",
          "restoreSettings": {
            "groupId": "3228_g_4_21F8026A",
            "groupZOrder": 1,
            "groupDisplayId": 65592
          },
          "restoreState": "Normal",
          "bounds": {
            "left": 1498,
            "top": 304,
            "width": 400,
            "height": 400,
            "right": 1898,
            "bottom": 704
          },
          "isSticky": true,
          "parentInstanceId": "3228_0",
          "instanceId": "3228_13"
        }
      },
      {
        "application": "Test_HTML",
        "type": "window",
        "componentType": "application",
        "state": {
          "isCollapsed": false,
          "createArgs": {
            "parentInstanceId": "3228_0"
          },
          "windowState": "Minimized",
          "allowChannels": false,
          "mode": "html",
          "channelId": "",
          "restoreSettings": {
            "groupId": "3228_g_6_5DEEAED1",
            "groupZOrder": 2,
            "groupDisplayId": 65592
          },
          "restoreState": "Maximized",
          "bounds": {
            "left": 1208,
            "top": 321,
            "width": 400,
            "height": 400,
            "right": 1608,
            "bottom": 721
          },
          "isSticky": true,
          "parentInstanceId": "3228_0",
          "instanceId": "3228_14"
        }
      }
    ]
}];

const swimlaneLayout = [{
        "version": 2,
        "type": "Swimlane",
        "name": layoutName,
        "token": "0F_a_Gajc",
        "components": [
          {
            "type": "swimlane",
            "state": {
              "canvas": {
                "lanes": [
                  {
                    "items": [
                      {
                        "lane": 0,
                        "positionInLane": 0,
                        "type": "tab",
                        "allowAdd": true,
                        "allowDrop": true,
                        "allowExtract": true,
                        "maximized": false,
                        "items": [
                          {
                            "lane": 0,
                            "positionInLane": 0,
                            "tabIndex": 0,
                            "selected": true,
                            "type": "window",
                            "tabTitle": "Test_Tab",
                            "tabGroup": "293f32f0-7f34-4f66-9fc7-150c8accda04",
                            "showTabCloseButton": true,
                            "maximized": false,
                            "isSticky": true,
                            "name": "Test_Tab",
                            "instanceId": "3228_19",
                            "disableTileMode": false,
                            "createArgs": {
                              "parentInstanceId": "3228_0"
                            }
                          }
                        ]
                      }
                    ],
                    "itemRatios": [
                      1
                    ],
                    "allowDrop": true,
                    "allowResize": true
                  },
                  {
                    "items": [
                      {
                        "lane": 1,
                        "positionInLane": 0,
                        "type": "tab",
                        "allowAdd": true,
                        "allowDrop": true,
                        "allowExtract": true,
                        "maximized": false,
                        "items": [
                          {
                            "lane": 1,
                            "positionInLane": 0,
                            "tabIndex": 0,
                            "selected": true,
                            "type": "window",
                            "tabTitle": "Test_Flat",
                            "tabGroup": "1c0137f9-c92f-4834-995f-b583ea4247a7",
                            "showTabCloseButton": true,
                            "maximized": false,
                            "isSticky": true,
                            "name": "Test_Flat",
                            "instanceId": "3228_20",
                            "disableTileMode": false,
                            "createArgs": {
                              "parentInstanceId": "3228_0"
                            }
                          }
                        ]
                      }
                    ],
                    "itemRatios": [
                      1
                    ],
                    "allowDrop": true,
                    "allowResize": true
                  },
                  {
                    "items": [
                      {
                        "lane": 2,
                        "positionInLane": 0,
                        "type": "tab",
                        "allowAdd": true,
                        "allowDrop": true,
                        "allowExtract": true,
                        "maximized": false,
                        "items": [
                          {
                            "lane": 2,
                            "positionInLane": 0,
                            "tabIndex": 0,
                            "selected": true,
                            "type": "window",
                            "tabTitle": "Test_HTML",
                            "tabGroup": "5a8f611b-2931-4276-9b0f-0f96121e9c46",
                            "showTabCloseButton": true,
                            "maximized": false,
                            "isSticky": true,
                            "name": "Test_HTML",
                            "instanceId": "3228_21",
                            "disableTileMode": false,
                            "createArgs": {
                              "parentInstanceId": "3228_0"
                            }
                          }
                        ]
                      }
                    ],
                    "itemRatios": [
                      1
                    ],
                    "allowDrop": true,
                    "allowResize": true
                  }
                ],
                "horizontal": false,
                "caption": "Untitled 1",
                "laneRatios": [
                  0.33333333333333337,
                  0.33333333333333337,
                  0.3333333333333332
                ],
                "selected": false,
                "frameId": "3228_cf_0",
                "canvasId": "3228_cv_12"
              },
              "context": {},
              "lastSaveTime": "2021-09-24T07:07:49.192Z"
            }
          }
        ],
        "context": {},
        "metadata": {}
}];

const workspaceLayout = [{
        "name": layoutName,
        "type": "Workspace",
        "token": "2nXv2uJMVe",
        "components": [
          {
            "type": "Workspace",
            "state": {
              "children": [
                {
                  "config": {
                    "allowDrop": true,
                    "allowSplitters": true,
                    "positionIndex": 0,
                    "frameId": "3228_sf_3",
                    "workspaceId": "4XiqRMwOEy",
                    "isPinned": false,
                    "minWidth": 40,
                    "maxWidth": 32767,
                    "minHeight": 100,
                    "maxHeight": 32767,
                    "widthInPx": 600,
                    "heightInPx": 570
                  },
                  "type": "column",
                  "children": [
                    {
                      "config": {
                        "allowDrop": true,
                        "allowSplitters": true,
                        "positionIndex": 0,
                        "frameId": "3228_sf_3",
                        "workspaceId": "4XiqRMwOEy",
                        "height": 50,
                        "isPinned": false,
                        "minWidth": 40,
                        "maxWidth": 32767,
                        "minHeight": 50,
                        "maxHeight": 32767,
                        "widthInPx": 600,
                        "heightInPx": 283
                      },
                      "type": "row",
                      "children": [
                        {
                          "config": {
                            "positionIndex": 0,
                            "frameId": "3228_sf_3",
                            "workspaceId": "4XiqRMwOEy",
                            "activeTabIndex": 0,
                            "width": 50,
                            "height": 50,
                            "allowDrop": true,
                            "allowDropHeader": true,
                            "allowDropLeft": true,
                            "allowDropRight": true,
                            "allowDropTop": true,
                            "allowDropBottom": true,
                            "allowExtract": true,
                            "showMaximizeButton": true,
                            "showEjectButton": true,
                            "showAddWindowButton": true,
                            "minWidth": 20,
                            "maxWidth": 32767,
                            "minHeight": 50,
                            "maxHeight": 32767,
                            "widthInPx": 298,
                            "heightInPx": 283
                          },
                          "type": "group",
                          "children": [
                            {
                              "type": "window",
                              "config": {
                                "isMaximized": false,
                                "isLoaded": true,
                                "isFocused": false,
                                "appName": "Test_Tab",
                                "frameId": "3228_sf_3",
                                "positionIndex": 0,
                                "workspaceId": "4XiqRMwOEy",
                                "title": "Test_Tab",
                                "isSticky": true,
                                "allowExtract": true,
                                "showCloseButton": true,
                                "minWidth": 20,
                                "maxWidth": 32767,
                                "minHeight": 20,
                                "maxHeight": 32767,
                                "isChild": false,
                                "parentInstanceId": "3228_0",
                                "instanceId": "3228_15",
                                "widthInPx": 298,
                                "heightInPx": 253,
                                "context": {}
                              }
                            }
                          ]
                        },
                        {
                          "config": {
                            "positionIndex": 1,
                            "frameId": "3228_sf_3",
                            "workspaceId": "4XiqRMwOEy",
                            "activeTabIndex": 0,
                            "width": 50,
                            "allowDrop": true,
                            "allowDropHeader": true,
                            "allowDropLeft": true,
                            "allowDropRight": true,
                            "allowDropTop": true,
                            "allowDropBottom": true,
                            "allowExtract": true,
                            "showMaximizeButton": true,
                            "showEjectButton": true,
                            "showAddWindowButton": true,
                            "minWidth": 20,
                            "maxWidth": 32767,
                            "minHeight": 50,
                            "maxHeight": 32767,
                            "widthInPx": 297,
                            "heightInPx": 283
                          },
                          "type": "group",
                          "children": [
                            {
                              "type": "window",
                              "config": {
                                "isMaximized": false,
                                "isLoaded": true,
                                "isFocused": false,
                                "appName": "Test_HTML",
                                "frameId": "3228_sf_3",
                                "positionIndex": 0,
                                "workspaceId": "4XiqRMwOEy",
                                "title": "Test_HTML",
                                "isSticky": true,
                                "allowExtract": true,
                                "showCloseButton": true,
                                "minWidth": 20,
                                "maxWidth": 32767,
                                "minHeight": 20,
                                "maxHeight": 32767,
                                "isChild": false,
                                "parentInstanceId": "3228_0",
                                "instanceId": "3228_17",
                                "widthInPx": 297,
                                "heightInPx": 253,
                                "context": {}
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "config": {
                        "positionIndex": 1,
                        "frameId": "3228_sf_3",
                        "workspaceId": "4XiqRMwOEy",
                        "activeTabIndex": 0,
                        "height": 50,
                        "allowDrop": true,
                        "allowDropHeader": true,
                        "allowDropLeft": true,
                        "allowDropRight": true,
                        "allowDropTop": true,
                        "allowDropBottom": true,
                        "allowExtract": true,
                        "showMaximizeButton": true,
                        "showEjectButton": true,
                        "showAddWindowButton": true,
                        "minWidth": 20,
                        "maxWidth": 32767,
                        "minHeight": 50,
                        "maxHeight": 32767,
                        "widthInPx": 600,
                        "heightInPx": 282
                      },
                      "type": "group",
                      "children": [
                        {
                          "type": "window",
                          "config": {
                            "isMaximized": false,
                            "isLoaded": true,
                            "isFocused": false,
                            "appName": "Test_Flat",
                            "frameId": "3228_sf_3",
                            "positionIndex": 0,
                            "workspaceId": "4XiqRMwOEy",
                            "title": "Test_Flat",
                            "isSticky": true,
                            "allowExtract": true,
                            "showCloseButton": true,
                            "minWidth": 20,
                            "maxWidth": 32767,
                            "minHeight": 20,
                            "maxHeight": 32767,
                            "isChild": false,
                            "parentInstanceId": "3228_0",
                            "instanceId": "3228_16",
                            "widthInPx": 600,
                            "heightInPx": 252,
                            "context": {}
                          }
                        }
                      ]
                    }
                  ]
                }
              ],
              "config": {
                "allowDrop": true,
                "allowDropLeft": true,
                "allowDropTop": true,
                "allowDropRight": true,
                "allowDropBottom": true,
                "allowExtract": true,
                "showCloseButton": true,
                "showSaveButton": true,
                "allowSplitters": true,
                "minWidth": 40,
                "maxWidth": 32767,
                "minHeight": 100,
                "maxHeight": 32767,
                "showAddWindowButtons": true,
                "showEjectButtons": true,
                "showWindowCloseButtons": true,
                "widthInPx": 600,
                "heightInPx": 570
              }
            }
          }
        ],
        "version": 2
}];

function getMode() {

    if(document.getElementById('Merge').checked == true){
        mode = "merge";
    } else if (document.getElementById('Replace').checked == true) {
        mode = "replace";
    } else {
        mode = undefined;
    }
    return mode;
};

function importApps(appGrp) {

    mode = getMode();

    if(mode===undefined) {
        window.alert("Mode is not selected, the method will default to mode: Replace!")
    };
    
    glue.appManager.inMemory.import(appGrp, mode)
    .then(()=> {
        window.alert("Application group is imported!")
    }).catch((err) => {
        console.warn(err)
    });
};

function removeApps(appName) {

    if(glue.appManager.application(appName) === undefined) {
        window.alert("Application with name: "+appName+" doesn't exist!")
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

    if(mode===undefined) {
        window.alert("Mode is not selected, the method will default to mode: Replace!")
    };

    glue.layouts.import(layout, mode)
    .then(() => {
        window.alert("Layout was imported: "+layout[0].name);
    })
    .catch((err) => {
        console.warn(err);
    });
}; 

function importApp1Func() {
    importApps(appGrp1);   
};

function importApp2Func() {
    importApps(appGrp2);
};

function removeAPP1Func() {
    removeApps(appGrp1[0].name);
};

function removeApp2Func() {
    removeApps(appGrp2[0].name);
    removeApps(appGrp2[1].name);
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

function ImportGlobalLayoutsFunc() {
    importLayout(globalLayout);
};

function importSwimlaneFunc() {
    importLayout(swimlaneLayout);
};

function importWorkspaceFunc() {
    importLayout(workspaceLayout);
};

function removeLayoutsFunc() {

    const layoutsToRemove = glue.layouts.list().filter((layout) => layout.name === layoutName);

    layoutsToRemove.forEach((layout) => {
        glue.layouts.remove(layout.type, layout.name)
        .catch((err) => {
            console.warn(err)
        });
    });

    window.alert("Layouts removed!");
};