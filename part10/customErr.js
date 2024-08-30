class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No Property - " + property);
        this.property = property;
    }
}

function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new PropertyRequiredError("age");
    }
    if (!user.name) {
        throw new PropertyRequiredError("name");
    }

    return user;
}

try {
    let user = readUser('{"age":25}');
} catch(err) {
    if (err instanceof ValidationError) {
        console.log("Invalid - " + err.message);
        console.log(err.name);
        console.log(err.property);
    } else if (err instanceof SyntaxError) {
        console.log("json syntax error - " + err.message);
    } else {
        throw err;
    }
}