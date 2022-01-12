export type Options = {
  iconName: string;
  gradient: string[];
  title: string;
  subtitle: string;
};

export type weatherOptionsType = Record<string, Options>;
export const weatherOptions: weatherOptionsType = {
  Thunderstorm: {
    iconName: 'thunderstorm-outline',
    gradient: ['#525252', '#3d72b4'],
    title: 'Thunderstorm',
    subtitle: 'Just stay home.',
  },
  Drizzle: {
    iconName: 'umbrella-outline',
    gradient: ['#085078', '#85D8CE'],
    title: 'Drizzle',
    subtitle: 'Be aware of sudden rainfall.',
  },
  Rain: {
    iconName: 'rainy-outline',
    gradient: ['#2c3e50', '#2980b9'],
    title: 'Rain',
    subtitle: 'Hope you got an umbrella.',
  },
  Snow: {
    iconName: 'snow-outline',
    gradient: ['#83a4d4', '#E2E2E2'],
    title: 'Snow',
    subtitle: "It's snowing outside!",
  },
  Atmosphere: {
    iconName: 'partly-sunny-outline',
    gradient: ['#FF5F6D', '#FFC371'],
    title: 'Atmosphere',
    subtitle: 'Have a great day!',
  },
  Clear: {
    iconName: 'sunny-outline',
    gradient: ['#FF8008', '#ffe259'],
    title: 'Clear',
    subtitle: 'Such a great day to walk outside.',
  },
  Clouds: {
    iconName: 'cloud-outline',
    gradient: ['#304352', '#859398'],
    title: 'Clouds',
    subtitle: 'Hmm...',
  },
  Mist: {
    iconName: 'water-outline',
    gradient: ['#1e3c72', '#bdc3c7'],
    title: 'Mist',
    subtitle: 'Be careful where you are going.',
  },
  Smoke: {
    iconName: 'skull-outline',
    gradient: ['#333333', '#FDC830'],
    title: 'Smoke',
    subtitle: 'You might need a mask.',
  },
  Haze: {
    iconName: 'reorder-three-outline',
    gradient: ['#ADA996', '#DBDBDB'],
    title: 'Haze',
    subtitle: 'Staying in is a great option.',
  },
  Dust: {
    iconName: 'reorder-three-outline',
    gradient: ['#BA8B02', '#181818'],
    title: 'Dust',
    subtitle: 'You might need a mask.',
  },
  Fog: {
    iconName: 'reorder-three-outline',
    gradient: ['#757F9A', '#D7DDE8'],
    title: 'Fog',
    subtitle: 'Hard to see.',
  },

  Sand: {
    iconName: 'reorder-three-outline',
    gradient: ['#3E5151', '#DECBA4'],
    title: 'Sand',
    subtitle: 'You might taste a sand.',
  },
  Ash: {
    iconName: 'flame-outline',
    gradient: ['#556270', '#FF6B6B'],
    title: 'Ash',
    subtitle: 'You better stay in.',
  },
  Squall: {
    iconName: 'cloud',
    gradient: ['#292E49', '#BBD2C5'],
    title: 'Squall',
    subtitle: "What's happening?",
  },
  Tornado: {
    iconName: 'filter',
    gradient: ['#536976', '#292E49'],
    title: 'Tornado',
    subtitle: 'Get help!',
  },
};
