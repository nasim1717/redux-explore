export const tag = (blogTags) => {
  let tags = [];
  for (let i = 0; i < blogTags.length; i++) {
    if (i < blogTags.length - 1) tags.push(<span>#{`${blogTags[i]}`},</span>);
    else {
      tags.push(<span>#{`${blogTags[i]}`}</span>);
    }
  }
  return tags;
};
