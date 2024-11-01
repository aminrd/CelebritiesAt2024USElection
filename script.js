function NewTab(link) {
    window.open(link, "_blank");
}

class Celebrity {
  constructor(name, source_image, party, link) {
    this.name = name;
    this.src = source_image;
    this.party = party;
    this.link = link;
  }

  render(){
    return `<div class="col">
                <div class="position-relative gallery-item"
                     style="cursor: pointer;">
                    <img src=${this.src} alt="${this.name}" class="w-100 ${this.party}">
                    <div class="position-absolute top-50 start-50 translate-middle text-center d-none">
                        <div class="bg-secondry bg-opacity-70 text-white px-4 py-2" onclick="NewTab('${this.link}');">Reference</a></div>
                    </div>
                </div>
            </div>`;
  }
}

class Democrat extends Celebrity {
  constructor(name, source_image, link) {
    super(name, source_image, "democrat", link);
  }
}

class Republican extends Celebrity {
  constructor(name, source_image, link) {
    super(name, source_image, "republican", link);
  }
}

function add_celebrities_to_container(celebrities, image_container_id){
  let container = document.getElementById(image_container_id);
  for (let i = 0; i < celebrities.length; i++) {
    container.innerHTML += celebrities[i].render();
  }
}

// Add Celebrities Supporting Democratic Party into this array
// Democrat(Name, PhotoLink, ReferenceLink)
let democrats = [
  new Democrat("Leonardo DiCaprio", "./photos/leonardo_dicaprio.jpg", "https://apnews.com/article/leonardo-dicaprio-endorses-kamala-harris-election-2024-40bf7286e7219dfd59957bf28d34f578"),
  new Democrat("Oprah Winfrey", "./photos/Oprah_Winfrey.jpg", "https://www.aljazeera.com/news/2024/9/20/oprahs-kamala-harris-fundraiser-does-her-support-swing-elections"),
  new Democrat("Taylor Swift", "./photos/taylor_swift.png", "https://www.nbcnews.com/politics/2024-election/taylor-swift-endorses-kamala-harris-rcna170547"),
  new Democrat("Jon Bon Jovi", "./photos/Jon_Bon_Jovi.jpg", "https://www.billboard.com/music/rock/jon-bon-jovi-endorsement-kamala-harris-president-truth-matters-1235800897/"),
  new Democrat("Meryl Streep", "./photos/Meryl_Streep.jpg", ""),
  new Democrat("Robert De Niro", "./photos/Robert_De_Niro.jpg", ""),
  new Democrat("Katy Perry", "./photos/Katy_Perry.jpg", ""),
  new Democrat("Rihanna", "./photos/Rihanna.jpg", ""),
  new Democrat("Ariana Grande", "./photos/Ariana_Grande.png", ""),
  new Democrat("Jimmy Fallon", "./photos/Jimmy_Fallon.jpg", ""),
  new Democrat("Ellen DeGeneres", "./photos/Ellen_DeGeneres.jpg", ""),
  new Democrat("Dwayne Johnson", "./photos/Dwayne_Johnson.jpg", ""),
  new Democrat("Michelle Obama", "./photos/Michelle_Obama.jpg", ""),
  new Democrat("Beyoncé", "./photos/Beyonce.jpg", ""),
  new Democrat("Ben Stiller", "./photos/Ben_Stiller.jpg", ""),
  new Democrat("Sarah Jessica Parker", "./photos/Sarah_Jessica_Parker.jpg", ""),
  new Democrat("Henry Golding", "./photos/Henry_Golding.jpg", ""),
  new Democrat("Amy Schumer", "./photos/Amy_Schumer.jpg", ""),
  new Democrat("Kerry Washington", "./photos/Kerry_Washington.jpg", ""),
  new Democrat("Olivia Wilde", "./photos/Olivia_Wilde.jpg", ""),
  new Democrat("Shonda Rhimes", "./photos/Shonda_Rhimes.jpg", ""),
];

// Add Celebrities Supporting Republican Party into this array
// Republican(Name, PhotoLink, ReferenceLink)
let republicans = [
  new Republican("Jon Voight", "./photos/Jon_Voight.jpg", ""),
  new Republican("Kelsey Grammer", "./photos/Kelsey_Grammer.jpg", ""),
  new Republican("Dennis Rodman", "./photos/Dennis_Rodman.jpg", "https://www.cnn.com/2018/06/11/asia/rodman-trump-kim-summit-intl/index.html"),
  new Republican("Antonio Sabato Jr.", "./photos/Antonio_Sabato_Jr..jpg", ""),
  new Republican("Mike Tyson", "./photos/Mike_Tyson.jpg", ""),
  new Republican("Clint Eastwood", "./photos/Clint_Eastwood.jpg", ""),
  new Republican("Larry the Cable Guy", "./photos/Larry_the_Cable_Guy.jpg", ""),
  new Republican("Victoria Jackson", "./photos/Victoria_Jackson.jpg", ""),
  new Republican("Mel Gibson", "./photos/Mel_Gibson.jpg", ""),
  new Republican("Chuck Norris", "./photos/Chuck_Norris.jpg", ""),
  new Republican("James Woods", "./photos/James_Woods.jpg", ""),
  new Republican("Caitlyn Jenner", "./photos/Caitlyn_Jenner.jpg", ""),
  new Republican("Burt Reynolds", "./photos/Burt_Reynolds.jpg", ""),
  new Republican("Pat Sajak", "./photos/Pat_Sajak.jpeg", ""),
  new Republican("Eric Roberts", "./photos/Eric_Roberts.jpg", ""),
  new Republican("Jesse Metcalfe", "./photos/Jesse_Metcalfe.jpg", ""),
  new Republican("Alicia Silverstone", "./photos/Alicia_Silverstone.jpg", ""),
  new Republican("Natalie Maines", "./photos/Natalie_Maines.jpg", ""),
  new Republican("Kurt Russell", "./photos/Kurt_Russell.jpg", ""),
  new Republican("Stephen Baldwin", "./photos/Stephen_Baldwin.jpg", ""),
  new Republican("Tucker Carlson", "./photos/Tucker_Carlson.jpg", ""),
]


add_celebrities_to_container(democrats, "democrats-image-container");
add_celebrities_to_container(republicans, "republicans-image-container");


let position_relative = document.querySelectorAll('.position-relative');

position_relative.forEach(item => {
    item.addEventListener('mouseover', event => {
        const caption = item.querySelector('.position-absolute');
        caption.classList.remove('d-none');
    });
    item.addEventListener('mouseleave', event => {
        const caption = item.querySelector('.position-absolute');
        caption.classList.add('d-none');
    });
});
