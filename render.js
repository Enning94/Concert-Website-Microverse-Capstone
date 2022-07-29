const speakers = [
  {
    Name: 'Sarkodie',
    Rank: 'Ghanaian Rapper',
    Bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Temporibus neque tempora enim',
    Featured_image: '<img class="img" src="./img/sarkodie.jpg" alt="" />',
  },
  {
    Name: 'Kendrick Lamar',
    Rank: 'American Rapper',
    Bio:  'Lorem ipsum dolor sit, amet consectetur adipisicing elit Temporibus neque tempora enim',
    Featured_image: ' <img class="img" src="./img/kendrick.jpg" alt="" />',
  },
];

function getSpeakers(speakers) {
  let html = ``;
  for (let i = 0; i < speakers.length; i += 1) {
    html += ` <div class="speaker">
        <div class="speaker-img">
        ${speakers[i].Featured_image}
      </div>
      <div class="speaker-info">
      <div class="speaker-name">
      ${speakers[i].Name}
      </div>
      <div class="speaker-rank">
      ${speakers[i].Rank}
      </div>
      <div class="underline3"><hr></div>
      <div class="speaker-bio">
      ${speakers[i].Bio}
      </div>
    </div>
    </div>`;
  }

  document.querySelector('.flx1').innerHTML = html;
}
getSpeakers(speakers);
