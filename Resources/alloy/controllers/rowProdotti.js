function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowProdotti = Ti.UI.createTableViewRow({
        height: "200dp",
        id: "rowProdotti"
    });
    $.__views.rowProdotti && $.addTopLevelView($.__views.rowProdotti);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId1"
    });
    $.__views.rowProdotti.add($.__views.__alloyId1);
    $.__views.sx = Ti.UI.createView({
        width: "95%",
        id: "sx",
        layout: "vertical"
    });
    $.__views.__alloyId1.add($.__views.sx);
    $.__views.desc = Ti.UI.createView({
        height: "150dp",
        backgroundColor: "#999999",
        id: "desc"
    });
    $.__views.sx.add($.__views.desc);
    $.__views.title = Ti.UI.createLabel({
        height: Titanium.UI.FILL,
        font: {
            fontSize: "18dp"
        },
        color: "#666666",
        left: "10dp",
        top: "0",
        id: "title"
    });
    $.__views.desc.add($.__views.title);
    $.__views.info = Ti.UI.createView({
        height: "50dp",
        backgroundColor: "#333333",
        id: "info"
    });
    $.__views.sx.add($.__views.info);
    $.__views.rx = Ti.UI.createView({
        id: "rx"
    });
    $.__views.__alloyId1.add($.__views.rx);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.id = args.id;
    $.row.title = args.title;
    $.title.text = args.title;
    0 != args.id && ($.row.hasChild = true);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;