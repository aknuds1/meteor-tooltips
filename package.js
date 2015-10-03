Package.describe({
  name: 'aknudsen:tooltips',
  summary: 'Reactive tooltips.',
  version: '0.5.2',
  git: 'https://github.com/aknuds1/meteor-tooltips.git'
});

Package.on_use(function(api) {
  api.versionsFrom('1.0.4');
  api.use('coffeescript reactive-var jquery templating tracker'.split(' '), 'client');

  api.add_files('tooltips.html tooltips.coffee'.split(' '), 'client');
  api.export('Tooltips', 'client');
});
