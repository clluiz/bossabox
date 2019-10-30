import * as actions from './app.actionTypes';
import { list, remove } from './api/tools';

export const searchInAllFields = search => async dispach => {
  let query = '';
  if(search) {
    query =  `$search=${search}`;
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
    query = search.split(' ').map(tag => `tag=${tag}`).join('&');
  }

  const tools = await list(query);
  dispach({
    type: actions.SEARCH_TOOLS,
    payload: tools
  });
};

export const removeTool = toolId => async dispatch => {
  await remove(toolId);
  dispatch(searchInAllFields())
};