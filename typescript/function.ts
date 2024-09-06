function ex1() {

    let myAdd = function(x: number, y: number): number {return x + y};
    let myAdd2: (x: number, y: number) => number = myAdd;
    let myAdd3 = (x: number, y: number) => x+y;
}

function ex2() {
    function name1(firstName: string, lastName: string): string {
        return firstName + lastName;
    }

    name1('a', 'b');
    // name1('a', 'b', 'c');
    // name1('a');


    function name2(firstName: string, lastName?: string): string {
        if (!lastName) {
            return firstName
        }
        
        return firstName + lastName;
    }

    name2('a', 'b');
    // name2('a', 'b', 'c');
    name2('a');

    function name3(firstName: string, lastName: string = 'hello'): string {
        return firstName + lastName;
    }

    name3('a', 'b');
    // name3('a', 'b', 'c');
    name3('a');

    function name4(firstName: string, ... rest: string[]) {
        return firstName + rest.join(" ");
    }

    name4('a', 'b', 'c', 'd', 'e');
}