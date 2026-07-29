document.addEventListener("DOMContentLoaded", function () {
  const blogList = document.getElementById("blog-list");

  fetch("data/posts.json")
    .then(response => response.json())
    .then(posts => {
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));
      posts.forEach((post , index) => {
        const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
        const postElement = document.createElement("div");
        postElement.classList.add("post-card");
        postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p class="post-meta">${formattedDate} — ${post.category}</p>
          <p>${post.summary}</p>
          ${index === 0 ? '<span class="badge">Latest Post</span>' : ''}
          <button class ="btn">Read More</button>
        `;
        blogList.appendChild(postElement);
      });
    })
    .catch(error => console.error("Error loading posts:", error));
});