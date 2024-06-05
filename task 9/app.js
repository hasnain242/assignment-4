var str="The quick brown fox jumps over the lazy dog.";
const lowerCaseStr = str.toLowerCase();
const words = lowerCaseStr.split(/\s+/);
const count = words.filter(word => word === "the").length;
document.write(`the word the ${count}`)



