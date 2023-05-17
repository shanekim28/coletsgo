// dictionary of people in geisel.
// key value is the UUID/GUID, value is the name of the person
export const people_in_geisel = {};

// to insert into dictionary, use this function with a string argument
export function add_to_geisel_list(string_name) {
    let uuid = self.crypto.randomUUID();
    people_in_geisel[string_name] = uuid;
}

//what