//Types
const SELECT = 'select';
const DESELECT = 'deselect';
const PUSH_NODE = 'add-node';
const POP_NODE = 'pop-node';

//defaults
const dataInitialState = {
  selectionMap: new Map(),
  nodeTree:[]
};

//Action creators
export const select = (id) => ({type: SELECT, id});
export const deselect = (id) => ({type: DESELECT, id});
export const pushNode = (node) => ({type: PUSH_NODE, node});
export const popNode = () => ({type: POP_NODE});

export default (state = dataInitialState, action) => {

    console.log("HERE")
    console.log(action)  
  let selectionMap = new Map()
  let newTree = []
  switch (action.type) {
    case SELECT:
        selectionMap = state.selectionMap
        selectionMap.set(action.id, state.nodeTree.map(x=>x))
      return {
        ...state,
      };

    case DESELECT:
        selectionMap = state.selectionMap
        selectionMap.delete(action.id)
      return {
        ...state,
        selectionMap
      };
    case PUSH_NODE:
      newTree = state.nodeTree.map(x=>x)
      newTree.push(action.node)

      return {
        ...state,
        nodeTree: newTree
      };
    case POP_NODE:
      newTree = state.nodeTree.map(x=>x)
      newTree.pop()

      return {
        ...state,
        nodeTree: newTree
      };
    default:
      return state;
  }
};
