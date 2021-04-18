# API Reference

## [Twin](#twin)

Functions to create and modify your overall twin setup

### [Nexus.create](#nexuscreate)

Before to instanciate a `nexus`, you must either:

- `import` `Nexus` if you use a [bundler](/documentation/using-a-bundler)
- or get sure the script is loaded from the [CDN](/documentation/using-cdn)

Then you can call the async `Nexus.create`

```js
Nexus.create({
  clientId: 'your-client-id',
  containerId: 'your-div-id',
  configId: 'rooms'
}).then(nexus => {
  // now you can use this nexus instance
});
```

or

```js
const nexus = await Nexus.create({
  clientId: 'your-client-id',
  containerId: 'your-div-id',
  configId: 'rooms'
});
```

### [addColoring](#addcoloring)

```js
nexus.addColoring({
  id: 'temperatureColoring',
  steps: [18, 21, 24, 27],
  colors: ['#33f', '#33bb77', '#f3e942', '#f18842', '#d33a3a']
});
```

Once a `coloring` is registered, you can attach it to a property in a device's [reading](#reading)

Example:

```js
const reading = {
  temperature: {
    name: 'Temperature',
    coloring: 'temperatureColoring'
  }
};
```

This way, when you [focus on a property](#focusdeviceonproperty) the good color will be applied using on the value of this property.

Here, if a device has `{temperature: 20}`, and its focus is set on `temperature`, its color will be `#33bb77`.

## [Devices](#devices)

Functions to connect and listen to your devices

### [createDevice](#createdevice)

```js
nexus.createDevice({
  id,
  location,
  model,
  properties,
  reading
});
```

Example:

```js
nexus.createDevice({
  id: 'zone-2-1',
  location,
  model: {
    type: 'polygon',
    opacity: 0.4
  },
  properties: {
    level: 2
  }
});
```

#### [location](#location)

`location` follows the [`GeoJSON`](https://geojson.org/) specification.

- if it's a `Point`, your model will be positioned at the `geometry.coordinates`
- if it's a `Polygon`, you need to use a [model](#model) of type `polygon`, to draw the area.

```js
const location = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [103.849930150763313, 1.284094470971986],
        [103.8498446095887, 1.28415500401252],
        [103.84979773998873, 1.284118704125956],
        [103.849887248596787, 1.284061261598652],
        [103.849930150763313, 1.284094470971986]
      ]
    ]
  }
};
```

#### [model](#model)

Select the model and its properties you want to use for this device

Example:

```js
const model = {
  type: 'polygon',
  opacity: 0.6,
  depth: 0.2
};
```

types: `sphere`, `polygon`, `cctv`, `gtlf` or custom depending on your site [configuration](/documentation/getting-started#configuration).

##### additional model properties

- `opacity`: number between `0` and `1`: the opacity of your model; default: `1`

- `scale`: default: `1`

- `depth`: (only for `type:polygon`) in meter: the height of a zone; default: the level height.

- `rotation`: (only for `type:gltf`) `{x: degrees, y: degrees, z: degrees}`; default: `{x: 0, y: 0, z: 0}`

- `color`: (optional) hexadecimal color used on creation; examples: '#123456' , '#123'

#### [properties](#properties)

- `level`: integer: your `model.z` will be calculated from this.

#### [reading](#reading)

The `reading` defines

- which properties to read from the data attached to this device,
- how to name it
- and which [`coloring`](#addcoloring) to use to color the model depending on the value of this property

```js
const reading = {
  [property]: {
    name: 'The title for this property in the UI',
    coloring: 'coloringId'
  }
};
```

Example: to read `temperature` and `date`, you need this reading:

```js
const reading = {
  temperature: {
    name: 'Température',
    coloring: 'temperatureColoring'
  },
  date: {
    name: 'Date'
  }
};
```

### [focusDeviceOnProperty](#focusdeviceonproperty)

The property focus on a device allows to apply the proper coloring.

By default the focus is set on the first [`coloring`](#addcoloring) found in the [`reading`](#reading).

You can change the property focus using:

```js
nexus.focusDeviceOnProperty({
  deviceId: 'zone-2-1',
  property: temperature
});
```

Once the focus is updated, the color of the device will be updated automatically if you have provided a [`coloring`](#addcoloring) for this property.

### [updateDeviceData](#updatedevicedata)

To update a device data, provide all properties you need to update in the field `data` with their new values:

```js
nexus.updateDeviceData({
  deviceId: 'zone-2-1',
  data: {
    temperature: 23.4,
    date: '2021-04-10'
  }
});
```

Once the data is updated, the color of the device will be updated automatically if:

- the device's focus is set on one of the properties updated
- and you have provided a [`coloring`](#addcoloring) for this property

### [updateDeviceColor](#updatedevicecolor)

You can set the color manually using an hexadecimal string:

```js
nexus.updateDeviceColor({
  deviceId: 'zone-2-1',
  color: '#123456' // or '#123'
});
```

To apply a calculated color depending on a value, you need to use a [`coloring`](#addcoloring).

## [Building](#building)

Functions to navigate and filter your building and levels.

Stay in touch;

## [Camera](#camera)

Functions to use the camera.

Stay in touch;
