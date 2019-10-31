import * as actions from './app.actionTypes';
import { list, remove, create } from './api/tools';
import { string } from 'prop-types';

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
  dispatch(searchInAllFields());
};

export const createTool = tool => async dispatch => {
  const toolToSave = Object.assign({}, tool);
  if(toolToSave.tags instanceof string) {
    toolToSave.tags = toolToSave.split(' ');
  }
  await create(toolToSave);
  dispatch(searchInAllFields());
  dispatch(toggleAddModal(false));
};

export const toggleAddModal = (value) => {
  return {
    type    : actions.TOGGLE_ADD_MODAL,
    payload : value
  }
};