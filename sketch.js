// console.log('Script chargé!');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('posts-container');
    posts.forEach(post => { 
      const div = document.createElement('div');
      div.classList.add("posts-container");

      const title = document.createElement('h3');
      title.classList.add("post-title");
      title.textContent = post.title;
      
      const paragraph = document.createElement('p');
      paragraph.classList.add("post.body")
      paragraph.textContent = post.body;
      
      paragraph.classList.add('overflow-y-scroll'); // Ajout de la classe overflow-x-scroll
      
      div.appendChild(title); // Ajout du titre au div
      div.appendChild(paragraph);
      
      container.appendChild(div);
    });
  });
 