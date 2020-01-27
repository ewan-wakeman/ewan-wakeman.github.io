var sel_theme
var sel_img

if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
  console.log('🎉 Dark mode is supported');
}

if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  sel_theme = 'dark';
  sel_img = '_dark';
} else {
  sel_theme = 'light';
  sel_img = '';
}

switch_theme = function(){
  if(sel_theme === 'light'){
    sel_theme = 'dark';
    sel_img = '_dark';
  } else {
    sel_theme = 'light';
    sel_img = '';
  }
  $('#css_theme')
    .attr('href', 'css/' + sel_theme + '.css')
  $('#twitter_icon')
    .attr('src', '../assets/icons/twitter' + sel_img + '.svg')
  $('#github_icon')
    .attr('src', '../assets/icons/github' + sel_img + '.svg')
  $('#theme_icon')
    .attr('src', '../assets/icons/theme_tog' + sel_img + '.svg')
}

console.log('Current theme used = ' + sel_theme)
