import shortid from 'shortid';

// selectors
export const getCardsForColumns = ({ cards }, columnId) => cards.filter(card => card.columnId == columnId);
export const getCardsForSearchResults = (state, searchText) => state.cards.filter(card => new RegExp(searchText, 'i').test(card.title));

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = ({ newCard }) => ({
  payload: {
    newCard: {
      ...newCard,
      id: shortid.generate(),
    },
  },
  type: ADD_CARD,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...statePart,
        action.payload.newCard,
      ];
    default:
      return statePart;
  }
}