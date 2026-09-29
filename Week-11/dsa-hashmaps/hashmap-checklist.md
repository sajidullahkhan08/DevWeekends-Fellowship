# When to Reach for a Hashmap

## The Golden Question
Whenever you see **nested loops** or **repeated scanning**, ask yourself:
> "Can a hashmap kill the inner loop?"

If yes, you have likely found the optimal solution.

---

## The 5 Situations Where a Hashmap is the Right Tool

### 1. "Have I seen this before?" (Lookup / Existence Check)
**Pattern:** You need to check if an item exists in a collection quickly.
**Example:** Two Sum: for each number, check if its complement exists.
**Why hashmap:** Array .includes() is O(n). Map/Set .has() is O(1).
**Kills nested loop:** Turns O(n^2) into O(n).

```javascript
// Brute force: O(n^2) - nested loops
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) return [i, j];
    }
}

// Optimal: O(n) - hashmap lookup
for (const num of arr) {
    if (seen.has(target - num)) return true;
    seen.add(num);
}
```

### 2. "How many times does this appear?" (Frequency Counting)
**Pattern:** You need to count occurrences of items.
**Examples:** Majority Element, Sort Characters by Frequency, Valid Anagram.
**Why hashmap:** You need to store a count per unique item.

```javascript
const freq = new Map();
for (const item of arr) {
    freq.set(item, (freq.get(item) || 0) + 1);
}
```

### 3. "Group things by some property" (Grouping)
**Pattern:** You need to bucket items into categories.
**Examples:** Group Anagrams, Group by even/odd, Group by first letter.
**Why hashmap:** Keys represent categories, values are arrays of items.

```javascript
const groups = new Map();
for (const item of arr) {
    const key = getKey(item); // for example: sorted string, first letter
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
}
```

### 4. "Map one thing to another" (Association / Mapping)
**Pattern:** You need to associate data with a key for later lookup.
**Examples:** Sort the People (name -> height), caching results, memoization.
**Why hashmap:** Direct association without scanning.

```javascript
const nameToHeight = new Map();
for (let i = 0; i < names.length; i++) {
    nameToHeight.set(names[i], heights[i]);
}
```

### 5. "Remove duplicates" or "Track unique items" (Deduplication)
**Pattern:** You need to know which items are unique or remove duplicates.
**Examples:** Pangram, Find Difference of Two Arrays, Unique Occurrences.
**Why hashmap/set:** Sets automatically handle uniqueness.

```javascript
const unique = new Set(arr);
// or
const seen = new Set();
for (const item of arr) {
    if (seen.has(item)) { /* duplicate */ }
    seen.add(item);
}
```

---

## Quick Decision Flowchart

```
Do you see nested loops?
|-- YES -> Can a hashmap replace the inner loop?
|          |-- YES -> Use hashmap (O(n^2) -> O(n))
|          \-- NO  -> Look for other patterns
\-- NO  -> Do you need to count occurrences?
           |-- YES -> Use frequency map
           \-- NO  -> Do you need to group items?
                      |-- YES -> Use hashmap with array values
                      \-- NO  -> Do you need fast lookup?
                                 |-- YES -> Use Set or Map
                                 \-- NO  -> Look for other patterns
```

---

## Common Hashmap Patterns in Interviews

| Pattern | Problem Type | Example |
|---------|-------------|---------|
| Complement lookup | Pairs that sum to X | Two Sum |
| Frequency counting | Majority, duplicates | Majority Element |
| Grouping by key | Anagrams, categories | Group Anagrams |
| First/last occurrence | Index tracking | Next Greater Element |
| Character frequency | String comparisons | Valid Anagram, Pangram |

---

## The Mantra
**"If I am scanning an array twice, a hashmap can probably do it in one pass."**
