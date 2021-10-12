sap.ui.define([
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
  "sap/ui/hackaton/hackaton/controller/BaseController"
], function (MessageToast, JsonModel, BaseController) {
    "use strict";
    return BaseController.extend("sap.ui.hackaton.hackaton.controller.MainView", {

      screenModel: new JsonModel(),

      // ui5 lifecycle events
      onInit: function () {},
      onAfterRendering: function () {},
      onBeforeRendering: function () {},
      // ui5 lifecycle events end here
    });
});
