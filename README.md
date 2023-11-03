# BlazorPageScript

A Blazor `<PageScript>` component enabling per-page JavaScript navigation callbacks.

This allows Blazor Web applications to have page-specific JavaScript that works with enhanced navigation enabled or disabled.

## Basic usage

_Example.razor_
```razor
@page "/example"

<PageTitle>Example</PageTitle>

<PageScript Src="./Example.razor.js" />

Welcome to the example page.
```

_Example.razor.js_
```js
// Called when the script first gets loaded on the page.
export function onLoad() {
    console.log('Load');
}

// Called when an enhanced page update occurs, plus once immediately after
// the initial load.
export function onUpdate() {
    console.log('Update');
}

// Called when an enhanced page update removes the script from the page.
export function onDispose() {
    console.log('Dispose');
}
```

Take a look at the `samples` folder in this repository for more usage examples.

## Expected usage patterns

**A `<PageScript>` in a `@page` component**

This is expected to be the most common use case. This allows pages to put initialization logic in `onLoad` and cleanup logic in `onDispose`, while reacting to enhanced page updates in `onUpdate`.

**A `<PageScript>` in the application's layout**

A `<PageScript>` placed in the app's layout will get its `onLoad` callback invoked once per full page load and the `onUpdate` callback invoked once per enhanced page update.

## Other notes

Duplicating `<PageScript>` components with the same `Src` won't cause duplicate callback invocations. Likewise, if multiple pages render `<PageScript>` components with the same `Src`, then an enhanced navigation between those pages won't invoke the `onDispose` and `onLoad` callbacks.

If you want to override this behavior, you can deduplicate two `<PageScript>` components by giving them unique querystring values in their `Src` parameters. For example:

_Home.razor_
```razor
<PageScript Src="./common-logic.js?home" />
```

_Counter.razor_
```razor
<PageScript Src="./common-logic.js?counter" />
```
