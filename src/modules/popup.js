import { postComment, getComments } from './involvementAPI.js';

let numComments = 0;
const popup = (id) => {
  let i = 0;
  const body = document.querySelector('body');
  const popup = document.createElement('section');
  const content = document.createElement('div');
  const title = document.createElement('h1');
  const rating = document.createElement('div');
  const puntuation = document.createElement('h3');
  const image = document.createElement('img');
  const category = document.createElement('div');
  const description = document.createElement('div');
  const line = document.createElement('div');
  const revh2 = document.createElement('h2');
  const line2 = document.createElement('div');
  const commentUl = document.createElement('ul');
  const reviewForm = document.createElement('form');
  const formh2 = document.createElement('h2');
  const nameBox = document.createElement('input');
  const msgBox = document.createElement('textarea');
  const btnInput = document.createElement('button');
  const close = document.createElement('button');

  popup.className = 'popup';
  content.className = 'popup-content';
  title.className = 'popup-title';
  rating.className = 'popup-rating-div';
  puntuation.className = 'popup-punt';
  image.className = 'popup-img';
  category.className = 'popup-category';
  description.className = 'popup-description';
  line.className = 'popup-line';
  line2.className = 'popup-line';
  revh2.className = 'popup-subtilte';
  commentUl.className = 'popup-comment-list';
  reviewForm.className = 'popup-form';
  formh2.className = 'popup-subtilte';
  nameBox.className = 'popup-form-name';
  msgBox.className = 'popup-form-msg';
  btnInput.className = 'popup-submit';
  close.className = 'close-popup';

  puntuation.setAttribute('id', 'punt');
  formh2.setAttribute('id', 'popup-subtitle');
  nameBox.setAttribute('name', 'name');
  nameBox.setAttribute('placeholder', 'Name');
  nameBox.setAttribute('type', 'text');
  nameBox.setAttribute('maxlength', '30');
  msgBox.setAttribute('name', 'message');
  msgBox.setAttribute('placeholder', 'Comments');
  msgBox.setAttribute('type', 'text');
  msgBox.setAttribute('maxlength', '500');
  btnInput.setAttribute('type', 'submit');
  body.appendChild(popup);
  popup.appendChild(content);
  content.appendChild(title);
  content.appendChild(close);
  content.appendChild(rating);
  rating.appendChild(puntuation);
  content.appendChild(image);
  content.appendChild(category);
  content.appendChild(description);
  content.appendChild(line);
  content.appendChild(revh2);
  content.appendChild(commentUl);
  content.appendChild(line2);
  content.appendChild(reviewForm);
  reviewForm.appendChild(formh2);
  reviewForm.appendChild(nameBox);
  reviewForm.appendChild(msgBox);
  reviewForm.appendChild(btnInput);

  const popupData = async () => {
    const gameUrl = `https://api.tvmaze.com/shows/${id}`;
    const result = await fetch(gameUrl);
    const data = await result.json();

    document.querySelector('.popup-title').textContent = data.name;
    document.querySelector('.popup-punt').textContent = `⭐  ${data.rating.average}`;
    document.querySelector('.popup-img').src = data.image.original;
    document.querySelector('.popup-description').innerHTML = data.summary;
    document.querySelector('#popup-subtitle').textContent = 'Add review';
    document.querySelector('.popup-submit').textContent = 'submit';
    document.querySelector('.close-popup').textContent = 'X';

    data.genres.forEach((e) => {
      const genre = document.createElement('p');
      genre.className = 'popup-cat-des';
      genre.setAttribute('id', `p${i}`);
      document.querySelector('.popup-category').appendChild(genre);
      document.getElementById(`p${i}`).textContent = e;
      i += 1;
    });
  };
  popupData();

  const updateComments = async (id) => {
    let comments = await getComments(id);
    comments = Array.isArray(comments) ? comments : [];
    if (comments) {
      comments.forEach((comment) => {
        commentUl.innerHTML += `
          <li class="comment-item">
            <h4 class="user">${comment.username}</h4>
            <span class="date">${comment.creation_date}</span>
            <p class="user-comment">${comment.comment}</p>
          </li>`;
      });
      numComments = comments.length;
      document.querySelector('.popup-subtilte').textContent = `Reviews (${numComments})`;
    }
  };
  updateComments(id);

  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    postComment(id, nameBox.value, msgBox.value);
    updateComments(id);
    nameBox.value = '';
    msgBox.value = '';
  });

  close.addEventListener('click', (e) => {
    e.preventDefault();
    popup.remove();
  });
};

export default popup;