(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['lightbox.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing, alias4="function";

  return "<h2>"
    + alias1(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</h2>\n<p class=\"info\">"
    + alias1(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"position","hash":{},"data":data}) : helper)))
    + " <span>//</span> "
    + alias1(((helper = (helper = helpers.stay_period || (depth0 != null ? depth0.stay_period : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"stay_period","hash":{},"data":data}) : helper)))
    + "</p>\n<p class=\"desc\">"
    + alias1(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n<div class=\"job__details\">\n    "
    + ((stack1 = ((helper = (helper = helpers.copy || (depth0 != null ? depth0.copy : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"copy","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    <div class=\"job__skills\">\n        <span>the skills &amp; the tech</span>\n        <ul>\n"
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.skills : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n</div>";
},"useData":true});
})();