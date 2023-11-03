// Called when the script first gets loaded on the page.
export function onLoad() {
    console.log('Home page load');
}

// Called when an enhanced page update occurs, plus once immediately after
// the initial load.
export function onUpdate() {
    console.log('Home page update');
}

// Called when an enhanced page update removes the script from the page.
export function onDispose() {
    console.log('Home page dispose');
}
