export function getAgeLabel(age: number) {
  const ageLabels = ["I", "II", "III", "IV"];
  return ageLabels[age - 1];
}
