Package.describe({
  name: 'nudger:malihu-scrollbar',
  summary: "A wrapper for Malihu Custom Scrollbar. Highly customizable custom scrollbar jQuery plugin",
  version: "3.0.9",
  git: "https://github.com/MaazAli/Meteor-Malihu-Custom-Scrollbar.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1.0.3');
  api.use('jquery');

  // JS

  api.addFiles('jquery.mCustomScrollbar.js', 'client');

  // CSS

  api.addFiles('jquery.mCustomScrollbar.css', 'client');

});
