function jumpingOnClouds(c) {
  let jumps = 0;
  let currentCloud = 0;
  while (currentCloud < c.length - 1) {
    if (currentCloud + 2 < c.length && c[currentCloud + 2] !== 1) {
      jumps += 1;
      currentCloud += 2;
    } else {
      jumps += 1;
      currentCloud += 1;
    }
  }
  return jumps;
}
