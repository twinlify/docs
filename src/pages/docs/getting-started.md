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

To get started with your own twin, you need a `clientId` and a `configId`.

You can use the demo above for testing purposes
