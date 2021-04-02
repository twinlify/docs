# Using a bundler

## [Install from npmjs](#install-from-npmjs)

```js
npm i --save @twinlify/nexus
```

## [Add a DOM Container](#add-a-dom-container)

```html
<div id="nexusContainer" style="width: 600px; height: 450px;" />
```

## [Instanciate your nexus](#instanciate-your-nexus)

Include the following code in your JavaScript file.

```js
import Nexus from '@twinlify/nexus';

Nexus.create({
  clientId: 'demo',
  containerId: 'nexusContainer',
  configId: 'rooms'
});
```
