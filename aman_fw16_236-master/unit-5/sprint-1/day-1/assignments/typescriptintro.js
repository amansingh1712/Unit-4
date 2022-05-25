var users = [
    {
        id: 1,
        name: "amit",
        age: 20,
        salary: 20000
    },
    {
        id: 2,
        name: "aniket",
        age: 21,
        salary: 18000
    },
    {
        id: 3,
        name: "pankaj",
        age: 30,
        salary: 35000
    },
    {
        id: 4,
        name: "anmol",
        age: 30,
        salary: 30000
    },
    {
        id: 5,
        name: "aman",
        age: 24,
        salary: 40000
    },
    {
        id: 6,
        name: "ritik",
        age: 26,
        salary: 35000
    },
    {
        id: 7,
        name: "aakash",
        age: 19,
        salary: 17000
    },
    {
        id: 8,
        name: "ranjan",
        age: 28,
        salary: 50000
    }
];
var swap = function (arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};
var partition = function (arr, left, right, by) {
    var index = Math.floor(Math.random() * (right - left) + left);
    swap(arr, left, index);
    var pivot = arr[left][by];
    var i = left;
    var j = right;
    while (i < j) {
        while (arr[i][by] <= pivot && i < right) {
            i++;
        }
        while (arr[j][by] > pivot && j > left) {
            j--;
        }
        if (i < j) {
            swap(arr, i, j);
        }
    }
    swap(arr, left, j);
    return j;
};
var quickSort = function (arr, left, right, by) {
    if (left >= right) {
        return;
    }
    var index = partition(arr, left, right, by);
    quickSort(arr, left, index - 1, by);
    quickSort(arr, index + 1, right, by);
};
var sort = function (arr, by) {
    quickSort(arr, 0, arr.length - 1, by);
    return arr;
};
var sortedUsers = sort(users, "id");
console.log('sortedUsers:', sortedUsers);
