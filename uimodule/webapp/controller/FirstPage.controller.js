sap.ui.define([
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
  "sap/ui/hackaton/hackaton/controller/BaseController"
], function (MessageToast, JsonModel, BaseController) {
    "use strict";

    const textValue = "Type something here =)";

    return BaseController.extend("sap.ui.hackaton.hackaton.controller.FirstPage", {

      screenModel: new JsonModel(),

      // ui5 lifecycle events
      onInit: function () {},
      onAfterRendering: function () {
        // bind model to screen
        this.getView().setModel(this.screenModel, "screenModel");
        this.screenModel.setProperty("/bindSample", textValue);
      },
      onBeforeRendering: function () {},
      // ui5 lifecycle events end here

      // sample of text formatting
      formatText: function (value) {
        return `This is what is being typed: ${value}`;
      },

      sampleLiveChangeEvent: function (event) {
        var value = event.getParameter("value");
        MessageToast.show(`Value that has been typed was ${value}`);
      },

      samplePressEvent: function () {
        MessageToast.show("I have been pressed!");
      },

      toNext: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("SecondPage");
      }
    });
});
