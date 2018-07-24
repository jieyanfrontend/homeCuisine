let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
console.log(htmlWidth);

let htmlDom = document.getElementsByTagName('html')[0];
htmlDom.style.fontSize = htmlWidth / 10 + 'px';
