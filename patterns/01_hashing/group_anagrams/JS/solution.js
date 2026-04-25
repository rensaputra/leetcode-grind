function groupAnagrams(strs) {
  const group = new Map();

  for (const str of strs) {
    const key = str.split("").sort().join("");

    if (!group.has(key)) group.set(key, []);
    group.get(key).push(str);
  }

  return [...group.values()];
}
