// Cargar contenido del encabezado
fetch('/content/home.md')
  .then(res => res.text())
  .then(text => {
    const frontMatter = text.match(/---([\s\S]*?)---/)[1];
    const data = Object.fromEntries(frontMatter.trim().split('\n').map(line => {
      const [key, ...rest] = line.split(':');
      return [key.trim(), rest.join(':').trim()];
    }));

    document.getElementById('home-title').textContent = data.title;
    document.getElementById('home-subtitle').textContent = data.subtitle;
    document.getElementById('header-image').src = data.header_image;
  });

// Cargar contenido de los proyectos
fetch('/content/projects.md')
  .then(res => res.text())
  .then(text => {
    const frontMatter = text.match(/---([\s\S]*?)---/)[1];
    const data = Object.fromEntries(frontMatter.trim().split('\n').map(line => {
      const [key, ...rest] = line.split(':');
      return [key.trim(), rest.join(':').trim()];
    }));

    document.getElementById('project-1-img').src = data.project_1_image;
    document.getElementById('project-1-title').textContent = data.project_1_title;

    document.getElementById('project-2-img').src = data.project_2_image;
    document.getElementById('project-2-title').textContent = data.project_2_title;

    document.getElementById('project-3-img').src = data.project_3_image;
    document.getElementById('project-3-title').textContent = data.project_3_title;
  });
