const linkResolver = function(doc) {
  // Pretty URLs for known types
  if (doc.type === "blog_post") return "/blog/" + doc.uid;
  if (doc.type === "basic_page") return "/basic_page/" + doc.uid;
  if (doc.type === "page") return "/page/" + doc.uid;
  if (doc.type === "blog_landing_page") return "/blog";
  if (doc.type === "landing_page") return "/";
  // Fallback for other types, in case new custom types get created
  console.log(doc);
  return "/doc/" + doc.id;
};

export default linkResolver;
