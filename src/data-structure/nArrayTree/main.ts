import { NArrayTree, DfsOrder } from './nArrayTree';

const tree = new NArrayTree<string>();
tree.add('ceo');
tree.add('cto', 'ceo');
tree.add('dev1', 'cto');
tree.add('dev2', 'cto');
tree.add('dev3', 'cto');
tree.add('cfo', 'ceo');
tree.add('accountant', 'cfo');
tree.add('cmo', 'ceo');

console.log('--- Print');
tree.print(); // => ceo | cto cfo cmo | dev1 dev2 dev3 accountant

console.log('--- PrintByLevel');
tree.printByLevel(); // => ceo \n cto cfo cmo \n dev1 dev2 dev3 accountant
console.log('tree contains dev1 is true:', tree.contains('dev1')); // => true
console.log('tree contains dev4 is false:', tree.contains('dev4')); // => false

console.log('--- BFS');
tree.traverseBFS((err, node) => {
  console.log(node.data);
}); // => ceo cto cfo cmo dev1 dev2 dev3 accountant

console.log('--- DFS preOrder');
tree.traverseDFS((err, node) => {
  console.log(node.data);
}, DfsOrder.preOrder); // => ceo cto dev1 dev2 dev3 cfo accountant cmo

console.log('--- DFS postOrder');
tree.traverseDFS((err, node) => {
  console.log(node.data);
}, DfsOrder.postOrder); // => dev1 dev2 dev3 cto accountant cfo cmo ceo

tree.remove('cmo');
tree.print(); // => ceo | cto cfo | dev1 dev2 dev3 accountant
tree.remove('cfo');
tree.print(); // => ceo | cto | dev1 dev2 dev3
