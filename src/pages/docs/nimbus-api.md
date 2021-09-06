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

## [Connections (WIP) ](#connections)

You'll have tools to handle your connections on this backend side.
Meanwhile you can connect your assets directly from your platform using the [frontend API](/documentation/api)

## [Customisation (WIP) ](#customisation)

You'll have tools to set up your `colorings`, `warnings` etc...
Meanwhile you can handle your settings directly from your platform using the [frontend API](/documentation/api)

## [Building](#building)

Keep posted, we're working on providing you with a API to handle your building sections;
