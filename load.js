function load(file_name) {
  console.clear();

  var head = document.getElementsByTagName('head')[0];
  while(head.firstChild){
    head.removeChild(head.firstChild);
  }

  var script = document.createElement("script");

  script.type = "text/javascript";

  script.src = file_name;

  head.appendChild(script);

  return 'loaded script ' + file_name;
};