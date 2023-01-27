let finalArray= [];

let userInfo=["Allan", 27, true];

function getDataTypes(userInfo){
    for (let i=0;i<userInfo.length;i++) {
        finalArray.push(typeof(userInfo[i]))
    }
};
console.log(finalArray);

let myFriends = ["John", "Jane", "Irana", "Anna"];

function myFriendsAre(list) {
  let friendsList = "";
  for (let i = 0; i < list.length; i++) {
    friendsList += list[i] + ", ";
  }
  friendsList = friendsList.substring(0, friendsList.length - 1);
  console.log(friendsList)
}
myFriendsAre(myFriends)

