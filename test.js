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

////////////////////////////
// Ternary operator for the previeStatus and showPreview
const previewStatus = (preview) => (preview ? 'card' : 'no-preview'); //
const showPreview = (show) => (show ? 'preview-head' : 'preview-none');

/////;////////////////////////////
// Product type function with using method find, (return value )
const whichIcon = (productType) => {
  const className = icons.find((product) => product.type === productType);
  return className.class;
};

////////////////////////////////////////////
// Function for elements
// 1. create a function with two parameters
//  - html element
// - class or multiple classes
const createNewElement = (element, classes) => {
  // 2. create an element inside function
  const newElement = document.createElement(element);
  // 3. add class or multiple classes
  // - use condition to determine if you're adding one or multiple classes
  if (Array.isArray(classes)) {
    // check if classes is an array or a single class
    newElement.classList.add(...classes);
  } else {
    newElement.classList.add(classes);
  }
  // console.log(newElement);
  return newElement;
};

// const paragraphs = createNewElement('p', ['paragraph1', 'paragraph2']);
for (let i = 0; i < 2; i++) {
  const paragraphs = createNewElement('p', ['paragraph1', 'paragraph2']);
  console.log(paragraphs);
}

//// The function createNewElement() to replace the DRY in funtion createCards
// Card multiclasses add
///////////////////////////
function createCards() {
  cards.forEach((element) => {
    // create the card and card elements with multi classes
    // Use function for the card two classes
    const cardChip = createNewElement('div', [
      'card',
      previewStatus(element.is_preview),
    ]);
    // Use function for the icon
    const iconChip = createNewElement('div', [
      'icon',
      whichIcon(element.product_type),
    ]);
    // Use function for card paragraph and heading
    const cardText = createNewElement('div', 'card-text');
    // Use the function to create the first paragraph with div purpose
    const cardType = createNewElement('p', 'paragraph-purpose');
    // Use the function to create heading city name
    const cardName = createNewElement('h4');
    cardName.innerText = element.name;
    // Use the function to create second paragraph with the date
    const cardDate = createNewElement('p', 'paragraph-date');
    // Use the function to control preview pill div with multi 2 classes

    // const paragraphs = createNewElement('p', ['paragraph1', 'paragraph2']);
    //////////////////////////////////////////////////////
    // const cardChip = document.createElement('div');
    // const iconChip = document.createElement('div');
    // const cardText = document.createElement('div');
    // const cardName = document.createElement('h4');
    // const cardType = document.createElement('p');
    // const cardDate = document.createElement('p');
    // create the preview pill
    const previewPill = document.createElement('div');
    const previewHEad = document.createElement('h4');
    const btnDots = document.createElement('button');
    const dateAcessStart = new Date(element.access_start_date);
    const dateAcessExpiry = new Date(element.access_expiry_date);

    // add the class
    // cardChip.classList.add('card');
    // iconChip.classList.add('icon');
    // cardText.classList.add('card-text');
    // cardType.classList.add('card-paragraph-name');
    // cardDate.classList.add('card-paragraph-date');
    previewPill.classList.add('preview-pill');
    previewHEad.classList.add('preview-head');
    btnDots.classList.add('btn-dots');
    // second class no preview
    // cardChip.classList.add(previewStatus(element.is_preview));
    // iconChip.classList.add(whichIcon(element.product_type));
    previewHEad.classList.add(showPreview(element.is_preview));

    //////////////////////////////////////////////////
    // Inner text heading in every div
    // cardName.innerText = element.name;
    cardType.innerText = element.product_type;
    previewHEad.innerText = element.is_preview ? 'Preview' : '';

    // Formating the acess and expiry dates
    cardDate.innerText = `${dateAcessStart.toLocaleDateString(
      'en-GB'
    )} - ${dateAcessExpiry.toLocaleDateString('en-GB')}`;
    // Add cards into and other elements into HTML
    cardText.appendChild(cardType);
    cardText.appendChild(cardName);
    cardText.append(cardDate);
    cardChip.append(iconChip);
    cardChip.append(cardText);
    cardChip.appendChild(previewPill);
    previewPill.append(previewHEad);
    previewPill.append(btnDots);
    mainContainer.appendChild(cardChip);
    // render to dates for en-GB
  });
}

//////////////////////////////////////
// Invoking all the functions
createCards();
// createNewElement('div', ['class-1', 'class-2']);
