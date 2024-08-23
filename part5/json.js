let room = {
    number: 23
};

let meetup = {
    title: "conference",
    participants: [{name: "tester1"}, {name: "tester2"}]
};

meetup.place = room;
room.occupiedBy = meetup;

// console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'nubmer']));
console.log(
    JSON.stringify(
        meetup,
        function replacer(key, value) {
            console.log(`${key}: ${value}`);
            return (key == 'occupiedBy') ? undefined : value;
        }
    )
);