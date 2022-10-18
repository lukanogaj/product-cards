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

// Selected component only html div
const mainContainer = document.querySelector('.container');
console.log(mainContainer);

const previewStatus = (preview) => {
  console.log(preview);
  if (preview === true) {
    console.log('correct');
  } else if (preview === false) {
    console.log('uncorrect');
  }
};

const createCards = () => {
  cards.forEach((element) => {
    // create the card
    const cardChip = document.createElement('div');
    const cardName = document.createElement('h3');
    const cardType = document.createElement('p');
    // add the class
    cardChip.classList.add('card');
    // Inner text heading in every div
    cardType.innerText = element.product_type;
    cardName.innerText = element.name;
    // Add cards into and other elements into HTML
    mainContainer.appendChild(cardChip);
    cardChip.appendChild(cardType);
    cardChip.appendChild(cardName);
    // Function to check preview
    console.log(element.is_preview);
    // function

    previewStatus(element.is_preview);
  });
};

createCards();

// Function to change the colour of the card depence on preview status

// for (let i = 0; i < cards.length; i++) {
// const previewStatus = (element) => {
//   if (cards.is_preview === true) {
//     console.log('correct');
//   } else if (cards.is_preview === false) {
//     console.log('uncorrect');
//   }
// };
// previewStatus(element.is_preview);

// const previewStatus = () => {
//   if (cards.is_preview === true) {
//     console.log('correct');
//   } else if (cards.is_preview === false) {
//     console.log('uncorrect');
//   }
// };
