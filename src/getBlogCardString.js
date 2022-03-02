module.exports = function (post) {
  // if the url or slug of the post has a trailing '/'
  // we remove it
  let href = post.fields.slug ? `/blog${post.fields.slug}` : post.fields.url;
  if (href.endsWith("/")) {
    href = href.substring(0, href.length - 1);
  }

  try {
    const renderedPost = `
      <a href="${href}" class="blog-card">
        <img
          src="${"/covers/" + post.frontmatter.cover}"
          alt="Blog cover"
          class="blog-card__image"
        />
        <p class="blog-card__date">${post.frontmatter.date}</p>
        <p class="blog-card__title">${post.frontmatter.title}</p>
        <p class="blog-card__excerpt">${post.frontmatter.description || post.excerpt}</p>
      </a>
    `

    return renderedPost
  } catch (err) {
    return ""
  }
}