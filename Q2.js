function containsDuplicate(nums) {
    const set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        } else {
            set.add(num);
        }
    }

    return false;
}

// Prompt the user for input
const input = prompt("Enter the array of integers (comma-separated):");
const nums = input.split(",").map(Number);

// Call the function and display the result
console.log(containsDuplicate(nums));
