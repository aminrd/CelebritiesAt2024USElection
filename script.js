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
  new Democrat("Meryl Streep", "./photos/Meryl_Streep.jpg", "https://ew.com/meryl-streep-accidentally-calls-kamala-harris-president-8716127"),
  new Democrat("Robert De Niro", "./photos/Robert_De_Niro.jpg", "https://www.hollywoodreporter.com/news/general-news/robert-de-niro-presidential-election-kamala-harris-donald-trump-1235995206/"),
  new Democrat("Katy Perry", "./photos/Katy_Perry.jpg", "https://www.dailymail.co.uk/tvshowbiz/article-13840491/Katy-Perry-support-Kamala-Harris-NYC-Taylor-Swift-endorsement.html"),
  new Democrat("Rihanna", "./photos/Rihanna.jpg", "https://www.vogue.com/article/celebrities-who-have-endorsed-kamala-harris-for-president"),
  new Democrat("Ariana Grande", "./photos/Ariana_Grande.png", "https://www.dailymail.co.uk/news/article-14010309/Ariana-Grande-backs-Kamala-Harris-followers-voted-her.html"),
  new Democrat("Jimmy Fallon", "./photos/Jimmy_Fallon.jpg", "https://www.huffpost.com/entry/jimmy-fallon-kamala-harris-rattle-trump_n_66d81ff7e4b0688475d8fe54"),
  new Democrat("Michelle Obama", "./photos/Michelle_Obama.jpg", "https://www.washingtonpost.com/politics/2024/10/26/michelle-obama-campaigns-kamala-harris/"),
  new Democrat("Beyoncé", "./photos/Beyonce.jpg", "https://www.bbc.com/news/videos/cz9xpzeqq4po"),
  new Democrat("Ben Stiller", "./photos/Ben_Stiller.jpg", "https://www.youtube.com/watch?v=YnaUBhfPh58"),
  new Democrat("Sarah Jessica Parker", "./photos/Sarah_Jessica_Parker.jpg", "https://www.independent.co.uk/arts-entertainment/tv/news/sarah-jessica-parker-kamala-harris-presidential-election-b2635135.html"),
  new Democrat("Amy Schumer", "./photos/Amy_Schumer.jpg", "https://www.facebook.com/photo.php?fbid=1031536251664545&id=100044245398455&set=a.234472748037570"),
  new Democrat("Kerry Washington", "./photos/Kerry_Washington.jpg", "https://www.usatoday.com/story/news/politics/elections/2024/10/28/kerry-washington-kamala-harris-olivia-pope-wisconsin/75885917007/"),
  new Democrat("Olivia Wilde", "./photos/Olivia_Wilde.jpg", "https://en.wikipedia.org/wiki/List_of_Kamala_Harris_2024_presidential_campaign_non-political_endorsements"),
  new Democrat("Shonda Rhimes", "./photos/Shonda_Rhimes.jpg", "https://en.wikipedia.org/wiki/List_of_Kamala_Harris_2024_presidential_campaign_non-political_endorsements"),
];

// Add Celebrities Supporting Republican Party into this array
// Republican(Name, PhotoLink, ReferenceLink)
let republicans = [
  new Republican("Elon Musk", "./photos/Elon_Musk.jpg", "https://www.independent.co.uk/arts-entertainment/films/news/trump-celebrity-endorsements-buzz-aldrin-elon-musk-b2638749.html"),
  new Republican("Jon Voight", "./photos/Jon_Voight.jpg", "https://variety.com/2024/film/news/jon-voight-trump-support-israel-palestine-angelina-jolie-1236080058/"),
  new Republican("Kelsey Grammer", "./photos/Kelsey_Grammer.jpg", "https://ew.com/kelsey-grammer-interview-cut-after-voicing-support-for-donald-trump-8410830"),
  new Republican("Dennis Rodman", "./photos/Dennis_Rodman.jpg", "https://www.cnn.com/2018/06/11/asia/rodman-trump-kim-summit-intl/index.html"),
  new Republican("Antonio Sabato Jr.", "./photos/Antonio_Sabato_Jr..jpg", "https://www.scmp.com/magazines/style/entertainment/article/3269938/meet-antonio-sabato-jr-who-was-cancelled-hollywood-supporting-donald-trump-general-hospital-actor"),
  new Republican("Mike Tyson", "./photos/Mike_Tyson.jpg", "https://www.sportskeeda.com/mma/news-mike-tyson-endorses-donald-trump-ahead-2024-us-elections-i-agree-sh-t"),
  new Republican("Clint Eastwood", "./photos/Clint_Eastwood.jpg", "https://www.breckell.uk/nowstream1/who-does-clint-eastwood-support-for-president-in-2024.html"),
  new Republican("Larry the Cable Guy", "./photos/Larry_the_Cable_Guy.jpg", "https://easterislandtourism.com/resonatenews3/is-larry-the-cable-guy-a-trump-supporter.html"),
  new Republican("Victoria Jackson", "./photos/Victoria_Jackson.jpg", "https://www.independent.co.uk/arts-entertainment/films/news/trump-celebrity-endorsements-buzz-aldrin-elon-musk-b2638749.html"),
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
