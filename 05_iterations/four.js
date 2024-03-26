const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swit by apply"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["Ruby", "Java", "Python", "Java", "C++"]
for (const key in programming) {
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}