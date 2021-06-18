/*global QUnit*/

sap.ui.define([
	"logali/invoices_test/controller/View_test.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View_test Controller");

	QUnit.test("I should test the View_test controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
