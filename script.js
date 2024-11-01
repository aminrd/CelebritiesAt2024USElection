class Celebrity {
  constructor(name, source_image, party, link ) {
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
                        <div class="bg-secondry bg-opacity-70 text-white px-4 py-2">Reference</div>
                    </div>
                </div>
            </div>`;
  }
}

let democrat = new Celebrity("Amin Aghaee", "https://media.geeksforgeeks.org/wp-content/uploads/20240322101847/Default_An_illustration_depictin-(2)-660.jpg", "democrat", "a");
let repub = new Celebrity("Amin Aghaee", "https://media.geeksforgeeks.org/wp-content/uploads/20240322101847/Default_An_illustration_depictin-(2)-660.jpg", "republican", "a");

function add_celebrities_to_container(celebrities, image_container_id){
  let container = document.getElementById(image_container_id);
  for (let i = 0; i < celebrities.length; i++) {
    container.innerHTML += celebrities[i].render();
  }
}

add_celebrities_to_container([democrat], "democrats-image-container");
add_celebrities_to_container([repub], "republicans-image-container");


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
