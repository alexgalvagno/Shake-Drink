function Controller() {
    function searchProdotti() {
        var data = [];
        for (var i = 0, j = attivita.length; j > i; i++) data.push({
            id: i,
            title: "Title1"
        });
        var rows = [];
        _.each(data, function(item) {
            rows.push(Alloy.createController("rowProdotti", {
                id: item.id,
                title: item.title
            }).getView());
        });
        $.table.setData(rows);
        $.activityIndicator.hide();
        $.listaProdotti.remove($.activityIndicator);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.listaProdotti = Ti.UI.createWindow({
        id: "listaProdotti"
    });
    $.__views.listaProdotti && $.addTopLevelView($.__views.listaProdotti);
    $.__views.activityIndicator = Ti.UI.createActivityIndicator({
        id: "activityIndicator",
        message: "Loading ..."
    });
    $.__views.listaProdotti.add($.__views.activityIndicator);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.listaProdotti.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.activityIndicator.show();
    searchProdotti();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;