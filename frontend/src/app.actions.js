import * as actions from './app.actionTypes';
import { list } from './api/tools';

export const searchInAllFields = search => async dispach => {
  let query = '';
  if(search) {
    query =  { $search: { $text : search } };
  }
  
  const tools = await list(query);
  dispach({
    type: actions.SEARCH_TOOLS,
    payload: tools
  });
};

export const searchInTagsOnly = search => async dispach => {
  let query = '';
  if(search && search.length > 0) {
    query = search.split(' ').map(tag => `tags=${tag}`).join('&');
  }

  const tools = await list(query);
  dispach({
    type: actions.SEARCH_TOOLS,
    payload: tools
  });
};