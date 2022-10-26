// Array with the object data
const cards = [
  {
    tileType: 'Subscription',
    id: '051803a3-dffb-4ba9-bbc1-32d6b05bac6a',
    name: 'Manhattan',
    state: 'active',
    access_start_date: '2021-08-02T23:00:00.000Z',
    access_expiry_date: '2023-08-02T23:00:00.000Z',
    is_default: true,
    is_preview: false,
    product_name: 'Traffic Intelligence',
    product_type: 'Intersection Performance',
  },
  {
    tileType: 'Subscription',
    id: '9c85880b-9f12-45cc-b174-ec00ce60cb10',
    name: 'Waterbury',
    state: 'active',
    access_start_date: '2021-08-02T23:00:00.000Z',
    access_expiry_date: '2023-08-02T23:00:00.000Z',
    is_default: true,
    is_preview: false,
    product_name: 'Traffic Intelligence',
    product_type: 'Intersection Performance',
  },
  {
    tileType: 'Subscription',
    id: '209eb905-6e6e-4435-8830-0eff2fb36c26',
    name: 'Detroit',
    state: 'active',
    access_start_date: '2021-08-02T23:00:00.000Z',
    access_expiry_date: '2023-08-02T23:00:00.000Z',
    is_default: true,
    is_preview: true,
    product_name: 'Journey Intelligence',
    product_type: 'Origin Destination',
  },
  {
    tileType: 'Subscription',
    id: '5df89b19-6b3b-4165-a92a-26bc95e36a22',
    name: 'Detroit',
    state: 'active',
    access_start_date: '2021-08-02T23:00:00.000Z',
    access_expiry_date: '2023-08-02T23:00:00.000Z',
    is_default: true,
    is_preview: true,
    product_name: 'Journey Intelligence',
    product_type: 'Waypoints',
  },
  {
    tileType: 'Subscription',
    id: 'daea5de0-9995-4578-8324-4f19c4d24c84',
    name: 'New Jersey',
    state: 'active',
    access_start_date: '2021-08-02T23:00:00.000Z',
    access_expiry_date: '2023-08-02T23:00:00.000Z',
    is_default: true,
    is_preview: true,
    product_name: 'Journey Intelligence',
    product_type: 'Points of Interest',
  },
  {
    tileType: 'Subscription',
    id: 'd7bd8bbb-f302-44e9-bec0-91b702b16140',
    name: 'IP with data',
    state: 'active',
    access_start_date: '2021-08-02T23:00:00.000Z',
    access_expiry_date: '2023-08-02T23:00:00.000Z',
    is_default: true,
    is_preview: true,
    product_name: 'Traffic Intelligence',
    product_type: 'Intersection Performance',
  },
  {
    tileType: 'Subscription',
    id: 'eff6b470-0989-4e6e-8eb9-3b77736a0f6b',
    name: 'HTP small area',
    state: 'active',
    access_start_date: '2021-08-02T23:00:00.000Z',
    access_expiry_date: '2023-08-02T23:00:00.000Z',
    is_default: true,
    is_preview: false,
    product_name: 'Traffic Intelligence',
    product_type: 'Historic Traffic Patterns',
  },
  {
    tileType: 'Subscription',
    id: '5601ec53-33fa-4596-b353-5b45da1237e3',
    name: 'HTP large area',
    state: 'active',
    access_start_date: '2021-08-02T23:00:00.000Z',
    access_expiry_date: '2023-08-02T23:00:00.000Z',
    is_default: true,
    is_preview: true,
    product_name: 'Traffic Intelligence',
    product_type: 'Historic Traffic Patterns',
  },
];
// Array with the icons for objects
const icons = [
  {
    type: 'Intersection Performance',
    class: 'intersection',
  },
  {
    type: 'Origin Destination',
    class: 'origin',
  },
  {
    type: 'Waypoints',
    class: 'waypoints',
  },
  {
    type: 'Points of Interest',
    class: 'points',
  },

  {
    type: 'Historic Traffic Patterns',
    class: 'pattern',
  },
];
// Selected component only html div
const mainContainer = document.querySelector('.container');

// Function for the project
// Preview status fucntion
const previewStatus = (preview) => {
  if (!preview) {
    return 'no-preview';
  } else {
    return 'card';
  }
};
/////////////////////////////////
// Product type function with using method find, (return value )
const whichIcon = (productType) => {
  const className = icons.find((product) => product.type === productType);
  return className.class;
};
///////////////////////////
//Funstion for head preview
const showPreview = (show) => {
  if (show) {
    return 'preview-head';
  } else {
    return 'preview-none';
  }
};

///////////////////////////
function createCards() {
  cards.forEach((element) => {
    // create the card and card elements
    const cardChip = document.createElement('div');
    const iconChip = document.createElement('div');
    const cardText = document.createElement('div');
    const cardName = document.createElement('h3');
    const cardType = document.createElement('p');
    const cardDate = document.createElement('p');
    // create the preview pill
    const previewPill = document.createElement('div');
    const previewHEad = document.createElement('h4');
    const imgDots = document.createElement('img');
    const dateAcessStart = new Date(element.access_start_date);
    const dateAcessExpiry = new Date(element.access_expiry_date);

    // add the class
    cardChip.classList.add('card');
    iconChip.classList.add('icon');
    cardText.classList.add('card-text');
    previewPill.classList.add('preview-pill');
    previewHEad.classList.add('preview-head');
    cardChip.classList.add(previewStatus(element.is_preview));
    iconChip.classList.add(whichIcon(element.product_type));
    previewHEad.classList.add(showPreview(element.is_preview));

    //////////////////////////////////////////////////
    // Inner text heading in every div
    cardType.innerText = element.product_type;
    cardName.innerText = element.name;
    previewHEad.innerText = element.is_preview ? 'Preview' : '';

    // previewHEad.innerText = 'Preview';
    // Formating the acess and expiry dates
    cardDate.innerText = `${dateAcessStart.toLocaleDateString(
      'en-GB'
    )} - ${dateAcessExpiry.toLocaleDateString('en-GB')}`;
    imgDots.src = './images-cards/three-dots.svg';
    // Add cards into and other elements into HTML
    cardText.appendChild(cardType);
    cardText.appendChild(cardName);
    cardText.append(cardDate);
    cardChip.append(iconChip);
    cardChip.append(cardText);
    cardChip.appendChild(previewPill);
    previewPill.append(previewHEad);
    previewPill.append(imgDots);
    mainContainer.appendChild(cardChip);
    // render to dates for en-GB
  });
}

createCards();
