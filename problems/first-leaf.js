class Node {
  constructor(value, id, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.id = id;
  }

  addLeft(node) {
    this.left = node;
  }

  addRight(node) {
    this.right = node;
  }
}

const node6 = new Node(6, 'abc');
const node7 = new Node(7, 'def');
const node10 = new Node(10, 'ghi');
const node11 = new Node(11, 'wer');
const root = new Node(5, 'plm');

root.addLeft(node6);
root.addRight(node7);
node7.addLeft(node10);
node7.addRight(node11);

// Tree
//         5
//       /  \
//      6   7
//         / \
//        10  11

const findLeaf = () => {};

const output = findLeaf(root);

console.log(output); // logs Node with value 6

// output should be Node of value 6

/*
    BONUS: find minimum depth of tree
*/
