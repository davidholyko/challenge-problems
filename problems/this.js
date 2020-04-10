// use apply, call, bind with the given function

function add(x) {
  return this + x;
}

add(5); // we want to return 10

add.apply(); // fill in
add.bind(); // fill in
add.call(); // fill in
