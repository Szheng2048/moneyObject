// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(obj){
    if (obj.userRole==="ADMIN"){
        return true
    } else {
        return false
    }
}

function getEmail(obj){
    return obj.firstName[0].toLowerCase() + obj.lastName.toLowerCase() + ".prsvr@gmail.com"
}

function getPlaylistLength(obj){
    return obj.songs.length
}

function getHardestHomework(arr){
  let lowScore = 1000
  let name1 = ""
  for(let i = 0;i< arr.length;i++){
    if(arr[i].averageScore < lowScore && arr.length >= 1){
        lowScore = arr[i].averageScore
        name1 = arr[i].name
    }
  } return name1
}

function createPhonebook(arr1,arr2){
    let obj = {}
    // let name
    // let number
    for (let char of arr1){
        let name = char
        obj[name] = arr2[arr1.indexOf(char)]
    }
    return obj
}




// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};