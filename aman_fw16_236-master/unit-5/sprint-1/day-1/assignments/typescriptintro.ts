
type User = {
    id: number,
    name: string,
    age: number,
    salary: number
}
type Subject = {
    chemistry: boolean,
    physics: boolean,
    maths: boolean
}

type Teachers = {
    id: number,
    name: string,
    subject: Subject,
    numberOfStudents: number
}

let teachers=[{
  id: 1,
  name: "Carmine Firpi",
  subject: {
    physics: false,
    chemistry: false,
    maths: true
  },
  numberOfStudents: 57
}, {
  id: 2,
  name: "Carina Rangall",
  subject: {
    physics: true,
    chemistry: false,
    maths: true
  },
  numberOfStudents: 59
}, {
  id: 3,
  name: "Em Randals",
  subject: {
    physics: true,
    chemistry: false,
    maths: false
  },
  numberOfStudents: 59
}, {
  id: 4,
  name: "Diann Martinez",
  subject: {
    physics: false,
    chemistry: false,
    maths: true
  },
  numberOfStudents: 60
}, {
  id: 5,
  name: "Grissel Wike",
  subject: {
    physics: true,
    chemistry: true,
    maths: true
  },
  numberOfStudents: 52
}, {
  id: 6,
  name: "Sydney Laurance",
  subject: {
    physics: true,
    chemistry: false,
    maths: false
  },
  numberOfStudents: 51
}, {
  id: 7,
  name: "Chance Vedyaev",
  subject: {
    physics: true,
    chemistry: false,
    maths: true
  },
  numberOfStudents: 53
}, {
  id: 8,
  name: "Humberto Goodley",
  subject: {
    physics: false,
    chemistry: true,
    maths: true
  },
  numberOfStudents: 53
}, {
  id: 9,
  name: "Ginger Redish",
  subject: {
    physics: true,
    chemistry: false,
    maths: true
  },
  numberOfStudents: 57
}, {
  id: 10,
  name: "Zita Reggio",
  subject: {
    physics: false,
    chemistry: false,
    maths: false
  },
  numberOfStudents: 52
}]





let users: User[] = [
    {
        id: 1,
        name: "amit",
        age: 20,
        salary:20000,
    }
    ,
    {
        id: 2,
        name: "aniket",
        age: 21,
        salary:18000,
    }
    , {
        id: 3,
        name: "pankaj",
        age: 30,
        salary:35000,
    },
    {
        id: 4,
        name: "Anmol",
        age: 30,
        salary:30000,
    },
    {
        id: 5,
        name: "aman",
        age: 24,
        salary:40000,
    },
    {
        id: 6,
        name: "ritik",
        age: 26,
        salary:35000
    },
    {
        id: 7,
        name: "aakash",
        age: 19,
        salary:17000,
    },
    {
        id: 8,
        name: "ranjan",
        age: 28,
        salary:50000,
    }
]

const swap = (arr: Type[], i: number, j: number): void => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const partition = (
    arr: Type[],
    left: number,
    right: number,
    by: string
): number => {
    let index = Math.floor(Math.random() * (right - left) + left);
    swap(arr, left, index);

    let pivot = arr[left][by];
    let i = left;
    let j = right;
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

}

const quickSort = (
    arr: Type[],
    left: number,
    right: number,
    by: string
): void => {
    if (left >= right) {
        return;
    }

    let index: number = partition(arr, left, right, by);

    quickSort(arr, left, index - 1, by);
    quickSort(arr, index + 1, right, by);
};


const sort = (arr: Type[], by: keyof Type): Type[] => {
    quickSort(arr, 0, arr.length - 1, by);
    return arr;
}

let sortedUsers:Type[] = sort(teachers,"id" );
console.log('sortedUsers:', sortedUsers)
