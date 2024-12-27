// Chamada de várias funções
// FIFO - first in first out
// LIFO - last in first out

function example_1() {
  example_2();
  console.log("Primeira função 1");
}

function example_2() {
  example_3();
  console.log("Segunda função 2");
}

function example_3() {
  console.log("Terceira função 3");
}

example_1();

// A ordem de função a serem executada
// Terceira função 3
// Segunda função 2
// Primeira função 1
