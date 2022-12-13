for(j = 0; j < document.getElementsByClassName("form-check-input").length ; j++){
    document.getElementsByClassName('form-check-input')[j].style.accentColor = 'var(--rb-primary-theme-500)' 
}
function addStyle() {
  const sheet = new CSSStyleSheet();
  sheet.insertRule(`formio a {
    color : var(--rb-primary-theme-500) !important;
  }`);
  document.adoptedStyleSheets = [sheet];
}
addStyle()
