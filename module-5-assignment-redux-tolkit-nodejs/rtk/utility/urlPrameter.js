const relatedVediosParameter = (tags) => {
  console.log("tags " + tags);
  let urlParameter = "";
  for (let i = 0; i < tags.length; i++) {
    if (i < tags.length - 1) {
      urlParameter += `tags_like=${tags[i]}&`;
    } else {
      urlParameter += `tags_like=${tags[i]}`;
    }
  }
  return urlParameter;
};

module.exports = relatedVediosParameter;
