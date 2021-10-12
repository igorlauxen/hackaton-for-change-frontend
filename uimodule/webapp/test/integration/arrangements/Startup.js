sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("sap.ui.hackaton.hackaton.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "sap.ui.hackaton.hackaton",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
