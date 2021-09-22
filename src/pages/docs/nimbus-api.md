# Backend API Reference

This documentation is about how to use the Configuration API.

A configuration is how you define a scene. This is the backend Nexus will read to generate and connect your scenes.

## [Scene](#scene)

Functions to create and set up your scene

### [create-scene](#createscene)

First thing is to create a configuration with a `configId` and attach it to your `clientId`

```sh
curl -X POST -H 'Content-type: application/json' --data '{"id":"ANY_UNIQUE_ID", "clientId":"YOUR_CLIENT_ID", "title":"ANY_TITLE"}' https://vdlzwh6f48.execute-api.eu-west-3.amazonaws.com/production/create-scene
```

Once your scene is created, you can instanciate a [Nexus](/documentation/api) on your frontend

## [Connections](#connections)

### endpoint

To attach an endpoint to your scene, use:

```sh
curl -X POST -H 'Content-type: application/json' --data '{
  "configId": "YOUR_CONFIG_ID",
  "connection": {
    "uid": "ANY_UID",
    "name": "ANY_NAME",
    "type": "rest",
    "url": "https://your/endpoint"
  }
}
' https://vdlzwh6f48.execute-api.eu-west-3.amazonaws.com/production/add-item
```

### reading

Once your connection is registered, use the same `uid` to attach a `reading`:

```sh
curl -X POST -H 'Content-type: application/json' --data '{
  "configId": "YOUR_CONFIG_ID",
  "connectionUID": "YOUR_CONNECTION_UID",
  "reading": {
    "temperature": {
      "name": "Température"
    },
    "date": {
      "name": "Date"
    }
  }
}
' https://vdlzwh6f48.execute-api.eu-west-3.amazonaws.com/production/add-item
```

To can read more info about `readings` [here](/documentation/api#reading)

## [Customisation](#customisation)

### coloring

You may want to use a custom `coloring` for your `readings`.
To do so you need to register your `coloring` first:

```sh
curl -X POST -H 'Content-type: application/json' --data '{
  "configId": "YOUR_CONFIG_ID",
  "connectionUID": "YOUR_CONNECTION_UID",
  "coloring": {
    "id": "temperatureColoring",
    "steps": [18, 21, 24, 27],
    "colors": ["#33f", "#33bb77", "#f3e942", "#f18842", "#d33a3a"]
  }
}
' https://vdlzwh6f48.execute-api.eu-west-3.amazonaws.com/production/add-item
```

To can read more info about `coloring` [here](/documentation/api#addcoloring)

## WIP

We'll add more tools to handle your buildings and connections on this backend side, feel free to contact us [here](https://twinlify.com/contact) so we can hear your needs.

Meanwhile you can connect your assets directly from your platform using the [frontend API](/documentation/api)
