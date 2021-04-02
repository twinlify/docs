# Getting started

Nexus is a JavaScript library that uses WebGL to render interactive 3D digital twins.

It provides an API to:

- instanciate a 3D scene with your building
- create and connect devices using many types of visualisations
- customise the UI to filter and navigate and within your connected scene.

## [Example](#example)

```js
Nexus.create({
  containerId: 'nexusContainer',
  clientId: 'demo',
  configId: 'rooms'
});
```

This example will instanciate the predefined configuration `rooms` in the `<div id="nexusContainer" />`

## [Configuration](#configuration)

To get started with your own twin, you need a `clientId` and a `configId`.

You can use the demo above for testing purposes.

The `configId` is linked to a configuration which defines:

- the building
- optional predefined devices
- optional predefined connections
- optional predefined UI customisations

Once we've setup your building, we can use your scene anywhere and either:

- add items to your configuration, so you just need to render the scene.
- or use the API to do everything you need: create and position devices, connect your data, move the camera...
