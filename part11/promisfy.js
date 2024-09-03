function promisify(f) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            function callback(err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
            args.push(callback);
            f.call(this, ...args);
        });
    };
};

function promisify2(f, manyArgs = false) {
    return function(...args) {
        return new Promise((resolve, reeject) => {
            function callback(err, ...results) {
                if (err) {
                    reject(err);
                } else {
                    resolve(manyArgs ? results : results[0]);
                }
            }

            args.push(callback);
            f.call(this, ...args);
        });
    };
};