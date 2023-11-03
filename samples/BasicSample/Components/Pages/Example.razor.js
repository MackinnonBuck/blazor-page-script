let initialBackgroundColor;

// Called when the script first gets loaded on the page.
export function onLoad() {
    initialBackgroundColor = document.body.style.backgroundColor;
}

// Called when an enhanced page update occurs, plus once immediately after
// the initial load.
export function onUpdate() {
    document.body.style.backgroundColor = '#FFF6FF';

    var itemsNoContent = document.getElementsByClassName('item-initial-content');
    for (const item of Array.from(itemsNoContent)) {
        item.className = 'item-js-content';
        item.innerHTML = 'Content from JS!';
    }
}

// Called when an enhanced page update removes the script from the page.
export function onDispose() {
    document.body.style.backgroundColor = initialBackgroundColor;
}
