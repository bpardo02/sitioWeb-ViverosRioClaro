fetch('content/index.md')
  .then(response => response.text())
  .then(markdown => {
    const getValue = (label) => {
      const match = markdown.match(new RegExp(label + ':\s*(.+)'));
      return match ? match[1].trim() : '';
    };

    document.getElementById("titulo").innerText = getValue("titulo");
    document.getElementById("texto1").innerText = getValue("texto1");
    document.getElementById("texto2").innerText = getValue("texto2");
    document.getElementById("hero").src = getValue("imagen_hero");
    document.getElementById("logo").src = getValue("imagen_logo");
  });