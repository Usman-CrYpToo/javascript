// get the root node

const rootNode = document.getRootNode()
console.log("root node :: ",rootNode);


// getting the childs of the root node

const childrenRootNode = rootNode.childNodes;
console.log("childs of root node :: ", childrenRootNode); // get html

//getting the childs of childs of root node;

const htmlChildsNode = childrenRootNode[0].childNodes;
console.log("childers of html node :: ", htmlChildsNode); // [head ,text, body];

// get the childs of html childs node;

const headChilds = htmlChildsNode[0].childNodes;
console.log("head childs :: ", headChilds);

const textChilds = htmlChildsNode[1].childNodes;
console.log("text childs :: ", textChilds);

const bodyChilds = htmlChildsNode[2].childNodes;
console.log("body childs :: ", bodyChilds);

// get the parent node for the body ;

const bodyParentNode = htmlChildsNode[2].parentElement;
console.log("body parent node ::",bodyParentNode);

// get the next sibling of the element ;
const headNextSibling = htmlChildsNode[0].nextSibling;
console.log("head next sibling  :: ", headNextSibling);

// to skip the white space siblings like #text
const headNextElementSibling = htmlChildsNode[1].nextElementSibling;
console.log(headNextElementSibling)