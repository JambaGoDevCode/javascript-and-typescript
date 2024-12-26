// Chamada de várias funções
// FIFO - first in first out
// LIFO - last in first out

function example_1() {
  example_2();
  console.log("Primeira função 1");
}

function example_2() {
  example_3();
  console.log("Primeira função 2");
}

function example_3() {
  console.log("Primeira função 3");
}

example_1();
