//import {v4 as uuidv4} from 'uuid';

// dictionary of people in geisel.
// key value is the UUID/GUID, value is the name of the person
const people_in_geisel = {};

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// to insert into dictionary, use this function with a string argument

const add_to_geisel_list = (string_name) => {
    const random_uuid = uuidv4();
    people_in_geisel[random_uuid] = string_name;
}

const get_geisel_list = () => {
    return Object.values(people_in_geisel);
}

module.exports = add_to_geisel_list;
module.exports = get_geisel_list;