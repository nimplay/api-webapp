const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = '69OY6E73yjavl4eR3trH';

const postLike = async (itemID) => {
  const response = await fetch(`${url}${appID}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemID }),
  });
  const post = await response.text();
  return post;
};

const getLikes = async () => {
  const response = await fetch(`${url}${appID}/likes`);
  const likes = await response.json();
  return likes;
};

const postComment = async (_id, _name, _comment) => {
  const response = await fetch(`${url}${appID}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: _id,
      username: _name,
      comment: _comment,
    }),
  });
  const post = await response.text();
  return post;
};

const getComments = async (_id) => {
  const response = await fetch(`${url}${appID}/comments?item_id=${_id}`);
  const comments = await response.json();
  return comments;
};

export {
  postLike,
  getLikes,
  postComment,
  getComments,
};
