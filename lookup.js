const contacts = [
  {
    firstName: "Van",
    lastName: "Nguyen",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Pho"],
  },
  {
    firstName: "Son",
    lastName: "Trinh",
    number: "0994372684",
    likes: ["Cheese", "Donut", "Apple"],
  },
  {
    firstName: "Trong",
    lastName: "Le",
    number: "0487345643",
    likes: ["Beer", "King Crab"],
  },
  {
    firstName: "Tong",
    lastName: "Vo",
    number: "unknown",
    likes: ["Tiger", "Sword", "Wine"],
  },
];

function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
          console.log(name+":"+prop);
        return contacts[x][prop];
      } else {
        return "Không có thuộc tính trên ";
      }
    }
  }
  return "Không tồn tại thông tin trên";
}
console.log(lookUpProfile("Van", "likes"));
