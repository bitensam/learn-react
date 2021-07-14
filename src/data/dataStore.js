export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  icon: {
    name: 'spider',
  },

};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const infoContents = {
  title: 'Info Corner',
  subtitle: 'All You need to know about this app',
  text: 'Mauris quis enim pulvinar, cursus tortor semper, porttitor metus. Maecenas in bibendum ipsum. Donec ultricies, neque quis dignissim ullamcorper, libero nulla varius dui, ultricies tempus nulla ligula at tellus. In nisi ipsum, sodales nec odio in, ultricies venenatis arcu. Nunc tristique lobortis erat, eget imperdiet quam. Pellentesque vitae imperdiet sapien. Vestibulum at malesuada mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in porttitor leo. Duis lobortis ex urna, id porttitor orci condimentum sed. Cras odio erat, laoreet volutpat semper nec, molestie a justo. In sed vehicula tellus, vel pulvinar neque.Mauris quis enim pulvinar, cursus tortor semper, porttitor metus. Maecenas in bibendum ipsum. Donec ultricies, neque quis dignissim ullamcorper, libero nulla varius dui, ultricies tempus nulla ligula at tellus. In nisi ipsum, sodales nec odio in, ultricies venenatis arcu. Nunc tristique lobortis erat, eget imperdiet quam. Pellentesque vitae imperdiet sapien. Vestibulum at malesuada mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in porttitor leo. Duis lobortis ex urna, id porttitor orci condimentum sed. Cras odio erat, laoreet volutpat semper nec, molestie a justo. In sed vehicula tellus, vel pulvinar neque.Mauris quis enim pulvinar, cursus tortor semper, porttitor metus. Maecenas in bibendum ipsum. Donec ultricies, neque quis dignissim ullamcorper, libero nulla varius dui, ultricies tempus nulla ligula at tellus. In nisi ipsum, sodales nec odio in, ultricies venenatis arcu. Nunc tristique lobortis erat, eget imperdiet quam. Pellentesque vitae imperdiet sapien. Vestibulum at malesuada mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in porttitor leo. Duis lobortis ex urna, id porttitor orci condimentum sed. Cras odio erat, laoreet volutpat semper nec, molestie a justo. In sed vehicula tellus, vel pulvinar neque.Mauris quis enim pulvinar, cursus tortor semper, porttitor metus. Maecenas in bibendum ipsum. Donec ultricies, neque quis dignissim ullamcorper, libero nulla varius dui, ultricies tempus nulla ligula at tellus. In nisi ipsum, sodales nec odio in, ultricies venenatis arcu. Nunc tristique lobortis erat, eget imperdiet quam. Pellentesque vitae imperdiet sapien. Vestibulum at malesuada mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in porttitor leo. Duis lobortis ex urna, id porttitor orci condimentum sed. Cras odio erat, laoreet volutpat semper nec, molestie a justo. In sed vehicula tellus, vel pulvinar neque.',
};

export const infoData = {
  title: 'Info',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
};

export const faqContents = {
  title: 'FAQ',
  subtitle: 'Ask us antyhing',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lorem dolor, dignissim sit amet viverra eu, pulvinar vel lectus.?',
};

export const faqData = {
  title: 'FAQ',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Things to do <sup>in next month!</sup>',
    description: 'Interesting things I want to check out next month!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-3',
    title: 'Things to do <sup>in next year!</sup>',
    description: 'Interesting things I want to check out next year!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: { ...pageContents },
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
