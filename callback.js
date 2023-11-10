function callEveryone(foodIsReady) {
    let food = Math.random() < 0.5 ? 'ready' : 'delayed';

    if (food === 'ready') {
        foodIsReady();
    } else if (food === 'delayed') {
        return 'Your food is delayed.';
    }
}

function foodIsReady() {
    console.log('Your food is ready.');
}

callEveryone(foodIsReady);

