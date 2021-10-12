sap.ui.define([
  "sap/m/MessageToast",
  "sap/ui/core/routing/History",
  "sap/ui/model/json/JSONModel",
  "sap/ui/hackaton/hackaton/controller/BaseController"
], function (MessageToast, History, JsonModel, BaseController) {
    "use strict";

    return BaseController.extend("sap.ui.hackaton.hackaton.controller.SecondPage", {

      // ui5 lifecycle events
      onInit: function () {
        this.getView().setModel(new JsonModel(), "secondPageModel");
        this.getView().getModel("secondPageModel").setProperty("/imgPath", "../resources/img/hello_developers.png");
      },
      onAfterRendering: function () {},
      onBeforeRendering: function () {},
      // ui5 lifecycle events end here

      pressMeSecondPage: function () {
        MessageToast.show("You are in second page!");
      },

      onNavBack: function () {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("FirstPage", true);
        }
      }
    });
});
