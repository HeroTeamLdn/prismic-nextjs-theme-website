const linkResolver = function(doc) {
  // Pretty URLs for known types
  if (doc.type === "blog_post") return "/hub/" + doc.uid;
  if (doc.type === "page") return "/page/" + doc.uid;
  if (doc.type === "demo") return "/demo";
  // Fallback for other types, in case new custom types get created
  return "/doc/" + doc.id;
};

export default linkResolver;
