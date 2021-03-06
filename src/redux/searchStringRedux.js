// selectors

/* wartość właściwości searchString, zapisanej bezpośrednio w stanie aplikacji */
export const getSearchString = ({ searchString }) => searchString;

/* wyszukać karty pasujące do frazy searchString, a następnie je policzyć. */
export const countAllCards = ({ cards }) => cards.length;

export const countVisibleCards = ({ cards, searchString }) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator

const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types

export const CHANGE = createActionName('CHANGE');

// action creators

export const createAction_changeSearchString = searchString => ({
  payload: {
    searchString,
  },
  type: CHANGE,
});

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload.searchString;
    default:
      return statePart;
  }
}

