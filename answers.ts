// Write a function to reverse a string without using .reverse()


QUnit.test("Reversing string is correct", assert => {
    assert.equal(reverse("Hello, World"), "dlroW ,olleH");
})

function reverse(s: string): string {
    let res = ""
    for(int i = 0; i< s.len(); i++) {
        res += s[s.len() - i - 1]
    }
    return res
}


// Create a function to remove duplicate words in a string. Example: "This is is is a great is test test string" -> "This is a great test string".
// (Words don't have to be consecutive)
function removeDuplicates(s: string): string {
    let res = ""
    let wordSet: {[key: string]: number} = {};
    let wordList = s.split(" ")

    wordList.forEach((word) => wordSet.add())
    wordList.forEach((word) => function() {
        if wordSet.contains(word) {
            res += word
        }
        wordSet.remove(word)
    }
    return res
}

QUnit.test("Removing duplicates is correct", assert => {
    assert.equal(removeDuplicates("This is is is a great is test test string"), "This is a great test string");
})


// Create a flatten function without using any flattening method from javascript.
function flatten(s: array[object]): array[number] {
    res = []
    innerFlatten(s, res)
    return res
}

func innerFlatten(s: object, acc array[number]) {
    // Object.prototype.TypeOf
    if s.isNumber() {
        acc.append(s)
    }
    s.forEach((obj) => innerFlatten(s, acc))
}


QUnit.test("Flattening array is correct", assert => {
    assert.deepEqual(flatten([1, 2, 3, [4, 5, 6, [7, 8, 9]]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
})


// Build a custom map function
// Example map([1, 2, 3, 4], (value) => value + 1)
function customMap(s: array[number], f: function): array[number] {
    res = []
    s.forEach((e) => res.append(f(e)))
    return res
}



QUnit.test("Custom map is correct", assert => {
    assert.deepEqual(customMap([1, 2, 3, 4], (item) => item + 1), [2, 3, 4, 5]);
    assert.deepEqual(customMap([1, 2, 3, 4], (item) => item * 2), [2, 4, 6, 8]);
    assert.deepEqual(customMap([], (item) => item * 2), []);
})

// Build a custom reduce function
// Example customReduce([1, 2, 3, 4], (acc, value) => acc + value, 0)
function customReduce(s: array[number], f: function, initialValue: object): array[number] {
    let acc object = initialValue
    s.forEach((e) => acc = f(acc, e))
    return res
}



QUnit.test("Custom reduce is correct", assert => {
    assert.deepEqual(customReduce([1, 2, 3, 4], (acc, item) => acc + item , 0), 10);
    assert.deepEqual(customReduce([1, 2, 3, 4], (acc, item, index) => ({
        ...acc,
        [index]: item
    }), 0), {
        "0": 1,
        "1": 2,
        "2": 3,
        "3": 4
    });
    assert.deepEqual(customReduce([1, 2, 3, 4], (acc, item, index) => ({
        ...acc,
        [item]: item
    }), 0), {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4
    });
    assert.deepEqual(customReduce([1, 2, 3, 4], (acc, item, index) => [...acc, item + 1], []), [2, 3, 4, 5]);
})


/*
  Given an integer array of size n, find all elements that appear more than n/3  times.
*/
function majorityElement(s: array[number]): array[number] {
    let numberCount: {[key: string]: number} = {};
    let res = []
    s.forEach((e) => numberCount[e] = numberCount[e]+1)
    n = len(s) / 3
    for number, count := range numberCount {
        if count > n {
            res.append(number)
        }
    }
    return res
}


QUnit.test("majorityElement is correct", assert => {
    assert.deepEqual(majorityElement([3,2,3]), [3]);
    assert.deepEqual(majorityElement([1,2]), [1,2]);
    assert.deepEqual(majorityElement([1]), [1]);
    assert.deepEqual(majorityElement([]), []);
    assert.deepEqual(majorityElement([4,4,2,3,1,8]), []);
    assert.deepEqual(majorityElement([4,4,2,3,1]), [4]);
})


/**
 In LOL world, there is a hero called Teemo and his attacking can make his enemy Ashe be in poisoned condition. Now, given the Teemo's attacking ascending time series towards Ashe and the poisoning time duration per Teemo's attacking, you need to output the total time that Ashe is in poisoned condition.
 You may assume that Teemo attacks at the very beginning of a specific time point, and makes Ashe be in poisoned condition immediately.
 Example 1:
 Input: [1,4], 2
 Output: 4
 Explanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned immediately.
 This poisoned status will last 2 seconds until the end of time point 2.
 And at time point 4, Teemo attacks Ashe again, and causes Ashe to be in poisoned status for another 2 seconds.
 So you finally need to output 4.


 Example 2:
 Input: [1,2], 2
 Output: 3
 Explanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned.
 This poisoned status will last 2 seconds until the end of time point 2.
 However, at the beginning of time point 2, Teemo attacks Ashe again who is already in poisoned status.
 Since the poisoned status won't add up together, though the second poisoning attack will still work at time point 2, it will stop at the end of time point 3.
 So you finally need to output 3.
 */
function getTotalPoisonedTime(s: array[number], dur: number): number {
    secondsWithPoison = []
    // s = [1, 2]
    // dur = 2
    s.forEach((e) => function() {
        for(i = e; i < e + dur; i++) {
            secondsWithPoison.append(i)
        }
    }
    // secondsWithPoison = [1, 2, 2, 3]
    let secondsWithPoisonSet = NewSet();
    secondsWithPoison.forEach((e) => secondsWithPoisonSet.add(e))
    // secondsWithPoisonSet = {1, 2, 3} => len: 3
    return len(secondsWithPoisonSet)
}


QUnit.test("getTotalPoisonedTime is correct", assert => {
    assert.deepEqual(getTotalPoisonedTime([1, 4], 2), 4);
    assert.deepEqual(getTotalPoisonedTime([1, 2], 2), 3);
})

/*
  You are given an array prices where prices[i] is the price of a given stock on the ith day.
  Find the maximum profit you can achieve. You may complete at most two transactions.
  Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
*/

function maxProfit(s: array[number]): number {
    maxProfitPossible = 0
    for(i = 0; i < s.len(); i++) {
        let v = maxProfitFor1(s[0:i]) + maxProfitFor1(s[i:len(s)])
        if v > maxProfitPossible {
            maxProfitPossible = v
        }
    }
    return maxProfitPossible;
}

function maxProfitFor1(s: array[number]): number {
    j = 0;
    if len(s) == 0 {
        return 0
    }
    let min = INF;
    let max = 0;
    for(i = 0; i < s.len(); i++) {
        if s[i] < min {
            min = s[i]
        }
        if s[i] > max {
            max = s[i]
        }
    }
    return max - min
}



QUnit.test("maxProfit is correct", assert => {
    assert.deepEqual(maxProfit([3,3,5,0,0,3,1,4]), 6);
    assert.deepEqual(maxProfit([7,6,4,3,1]), 0);
    assert.deepEqual(maxProfit([1,2,3,4,5]), 4);
})