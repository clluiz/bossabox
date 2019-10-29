import * as actions from './app.actionTypes';

const initialState = {
  tools: [{
    title : 'Notion',
    link  : 'https://www.notion.so',
    description : 'Write, plan, collaborate, and get organized. Notion is all you need — in one tool.',
    tags : ['organization', 'plan', 'collaboration', 'writing', 'calendar']
  }]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SEARCH_TOOLS:
      return {
        ...state,
        tools: action.payload,
      };
    default:
      return state;
  }
};
