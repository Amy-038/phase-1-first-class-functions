function receivesAFunction(spy) {
    return spy();
}

receivesAFunction(function(){console.log("cake");})

function returnsANamedFunction() {
    return function Ice() {
        console.log("winter");
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("tree");
    };
}
