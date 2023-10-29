const palindromes = function (string) {
    const processedString1 = string.toLowerCase().replace(/[a-z0-9]/g, "")
    return processedString1 ===  processedString1.split("").reverse().join("")
};

palindromes("racecar")

console.log(palindromes("racecar"));