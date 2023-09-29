let userInfo = {};

for (let i = 1; i <= 10; i++) {
  console.clear();
  id = i;
  userInfo[id] = {};

  userInfo[id].userName = prompt(`Enter name User ${i} `);
  let tempAge = prompt('Enter age');
  // userInfo[id].userAge = +prompt('Enter your age');
  if (!isNaN(tempAge)) {
    userInfo[id].userAge = tempAge;
    // console.log(userInfo);

    for (let key in userInfo) {
      console.log(`User ${key}`);
      console.log(` Name -  ${userInfo[key].userName}`);
      console.log(` Age -  ${userInfo[key].userAge}`);
    }
  } else {
    alert('Error! Enter again.');
    i--;
  }
}
console.log(userInfo);
