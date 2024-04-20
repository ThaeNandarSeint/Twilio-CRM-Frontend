export const userTypes = {
  PROSPECT: 'prospect',
  LEAD: 'lead',
  CLIENT: 'client',
};

export const maritalStatuses = {
  SINGLE: 'single',
  MARRIED: 'married',
};

export const mobilityStatuses = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
};

export const possibleHeights = {
  feets: [
    { value: 3, text: `3'` },
    { value: 4, text: `4'` },
    { value: 5, text: `5'` },
    { value: 6, text: `6'` },
    { value: 7, text: `7'` },
  ],
  inches: [
    { value: 0, text: `0'` },
    { value: 1, text: `1'` },
    { value: 2, text: `2'` },
    { value: 3, text: `3'` },
    { value: 4, text: `4'` },
    { value: 5, text: `5'` },
    { value: 6, text: `6'` },
    { value: 7, text: `7'` },
    { value: 8, text: `8'` },
    { value: 9, text: `9'` },
    { value: 10, text: `10'` },
    { value: 11, text: `11'` },
    { value: 12, text: `12'` },
  ],
};

export const states = [
  'Ayeyarwady',
  'Bago',
  'Chin',
  'Kachin',
  'Kayah',
  'Kayin',
  'Magway',
  'Mandalay',
  'Mon',
  'Naypyidaw',
  'Rakhine',
  'Sagaing',
  'Shan',
  'Tanintharyi',
  'Yangon',
];

export const filterItems = [
  {
    text: 'All',
    value: '',
  },
  {
    text: 'Prospects',
    value: userTypes.PROSPECT,
    key: 'type',
  },
  {
    text: 'Leads',
    value: userTypes.LEAD,
    key: 'type',
  },
  {
    text: 'Clients',
    value: userTypes.CLIENT,
    key: 'type',
  },
];
