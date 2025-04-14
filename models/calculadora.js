function somar(n1, n2) {
  if (typeof n1 == Number) {
    return "erro";
  }
  return n1 + n2;
}

exports.somar = somar;
