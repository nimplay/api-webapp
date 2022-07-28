/**
 * @jest-environment jsdom
 */

const countObj = (dataArray) => {
  const count = [];
  for (let i = 0; i < dataArray.length; i += 1) {
    count.push(dataArray[i]);
  }
  return count.length;
};

const elementsArr = [
  {
    id: 1,
    url: 'https://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot',
    name: 'Pilot',
    season: 1,
    number: 1,
    type: 'regular',
    airdate: '2013-06-24',
    airtime: '22:00',
    airstamp: '2013-06-25T02:00:00+00:00',
    runtime: 60,
    rating: { average: 7.7 },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg',
    },
    _links: { self: { href: 'https://api.tvmaze.com/episodes/1' } },

  },
  {
    id: 2,
    url: 'https://www.tvmaze.com/episodes/2/under-the-dome-1x02-the-fire',
    name: 'The Fire',
    season: 1,
    number: 2,
    type: 'regular',
    airdate: '2013-07-01',
    airtime: '22:00',
    airstamp: '2013-07-02T02:00:00+00:00',
    runtime: 60,
    rating: { average: 7.3 },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/1/4389.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4389.jpg',
    },
    _links: { self: { href: 'https://api.tvmaze.com/episodes/2' } },
  },
  {
    id: 3,
    url: 'https://www.tvmaze.com/episodes/3/under-the-dome-1x03-manhunt',
    name: 'Manhunt',
    season: 1,
    number: 3,
    type: 'regular',
    airdate: '2013-07-08',
    airtime: '22:00',
    airstamp: '2013-07-09T02:00:00+00:00',
    runtime: 60,
    rating: { average: 7.1 },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/1/4390.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4390.jpg',
    },
    _links: { self: { href: 'https://api.tvmaze.com/episodes/3' } },
  },
  {
    id: 4,
    url: 'https://www.tvmaze.com/episodes/4/under-the-dome-1x04-outbreak',
    name: 'Outbreak',
    season: 1,
    number: 4,
    type: 'regular',
    airdate: '2013-07-15',
    airtime: '22:00',
    airstamp: '2013-07-16T02:00:00+00:00',
    runtime: 60,
    rating: { average: 7.3 },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/1/4391.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4391.jpg',
    },
    _links: { self: { href: 'https://api.tvmaze.com/episodes/4' } },
  },
  {
    id: 5,
    url: 'https://www.tvmaze.com/episodes/5/under-the-dome-1x05-blue-on-blue',
    name: 'Blue on Blue',
    season: 1,
    number: 5,
    type: 'regular',
    airdate: '2013-07-22',
    airtime: '22:00',
    airstamp: '2013-07-23T02:00:00+00:00',
    runtime: 60,
    rating: { average: 7.3 },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/1/4392.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4392.jpg',
    },
    _links: { self: { href: 'https://api.tvmaze.com/episodes/5' } },
  },
  {
    id: 6,
    url: 'https://www.tvmaze.com/episodes/6/under-the-dome-1x06-the-endless-thirst',
    name: 'The Endless Thirst',
    season: 1,
    number: 6,
    type: 'regular',
    airdate: '2013-07-29',
    airtime: '22:00',
    airstamp: '2013-07-30T02:00:00+00:00',
    runtime: 60,
    rating: { average: 7 },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/1/4393.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4393.jpg',
    },
    _links: { self: { href: 'https://api.tvmaze.com/episodes/6' } },
  },
  {
    id: 7,
    url: 'https://www.tvmaze.com/episodes/7/under-the-dome-1x07-imperfect-circles',
    name: 'Imperfect Circles',
    season: 1,
    number: 7,
    type: 'regular',
    airdate: '2013-08-05',
    airtime: '22:00',
    airstamp: '2013-08-06T02:00:00+00:00',
    runtime: 60,
    rating: { average: 7.7 },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/1/4394.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4394.jpg',
    },
    _links: { self: { href: 'https://api.tvmaze.com/episodes/7' } },
  },
  {
    id: 8,
    url: 'https://www.tvmaze.com/episodes/8/under-the-dome-1x08-thicker-than-water',
    name: 'Thicker Than Water',
    season: 1,
    number: 8,
    type: 'regular',
    airdate: '2013-08-12',
    airtime: '22:00',
    airstamp: '2013-08-13T02:00:00+00:00',
    runtime: 60,
    rating: { average: 7.2 },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/1/4395.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4395.jpg',
    },
    _links: { self: { href: 'https://api.tvmaze.com/episodes/8' } },
  },
  {
    id: 9,
    url: 'https://www.tvmaze.com/episodes/9/under-the-dome-1x09-the-fourth-hand',
    name: 'The Fourth Hand',
    season: 1,
    number: 9,
    type: 'regular',
    airdate: '2013-08-19',
    airtime: '22:00',
    airstamp: '2013-08-20T02:00:00+00:00',
    runtime: 60,
    rating: { average: 7.3 },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/1/4396.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4396.jpg',
    },
    _links: { self: { href: 'https://api.tvmaze.com/episodes/9' } },
  },
  {
    id: 10,
    url: 'https://www.tvmaze.com/episodes/10/under-the-dome-1x10-let-the-games-begin',
    name: 'Let the Games Begin',
    season: 1,
    number: 10,
    type: 'regular',
    airdate: '2013-08-26',
    airtime: '22:00',
    airstamp: '2013-08-27T02:00:00+00:00',
    runtime: 60,
    rating: { average: 7.4 },
    image: {
      medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/1/4397.jpg',
      original: 'https://static.tvmaze.com/uploads/images/original_untouched/1/4397.jpg',
    },
    _links: { self: { href: 'https://api.tvmaze.com/episodes/10' } },
  },
];
const createElement = () => {
  document.body.innerHTML = '<h2>Number of Elements: </h2><main class="cards"></main>';
  const countResults = document.querySelector('h2');
  const cards = document.querySelector('.cards');
  const dataArray = elementsArr;
  let elementCount = 0;
  dataArray.forEach((el) => {
    const div = document.createElement('div');
    div.classList.add('cardItem');
    const divImg = document.createElement('div');
    divImg.classList.add('cardImg');
    divImg.style.backgroundImage = `url(${el.image.original})`;
    const h1 = document.createElement('h1');
    h1.classList.add('cardName');
    h1.textContent = `S${el.season}E${el.number} ${el.name}`;
    const details = document.createElement('p');
    details.classList.add('cardDetails');
    details.innerHTML = `Plot Summary: <br>${el.summary}`;
    const h2 = document.createElement('h2');
    h2.classList.add('cardRuntime');
    h2.textContent = `Runtime: ${el.runtime} mins Rating: ${el.rating.average}`;

    const starContainer = document.createElement('div');
    starContainer.classList.add('starContainer');

    const starRate = document.createElement('span');
    starRate.classList.add('material-icons-round');
    starRate.classList.add('icons');
    starRate.classList.add('starRate');
    starRate.textContent = 'star_rate';

    const starCount = document.createElement('span');
    starCount.classList.add('starCount');
    starCount.setAttribute('id', el.id);
    starCount.textContent = '0';

    const starBorder = document.createElement('span');
    starBorder.classList.add('material-icons-round');
    starBorder.classList.add('icons');
    starBorder.classList.add('starBorder');
    starBorder.textContent = 'star_border';
    starBorder.setAttribute('id', el.id);

    const cBtn = document.createElement('button');
    cBtn.classList.add('commentBtn');
    cBtn.textContent = 'Comments';
    starContainer.append(starRate, starCount, starBorder);
    div.append(divImg, starContainer, h1, h2, details, cBtn);
    cards.append(div);
    elementCount += 1;
    countResults.textContent = `Number of Elements: ${elementCount}`;
  });
};

// Test for Counting of Elements
describe('To test number of elements', () => {
  test('Test the functionality of countObj function', () => {
    expect(countObj(elementsArr)).toBe(10);
  });

  test('Count number of divs with a class of cardItem', () => {
    createElement();
    expect(document.querySelectorAll('.cardItem').length).toEqual(10);
  });

  test('Result for countObj function is equal to the number of divs with a class of cardItem', () => {
    createElement();
    const count = countObj(elementsArr);
    expect(count === document.querySelectorAll('.cardItem').length).toBe(true);
  });

  test('countResult content should reflect the number of divs created', () => {
    const countResults = document.querySelector('h2');
    createElement();
    expect(countResults.textContent).toBe('Number of Elements: 10');
  });
});