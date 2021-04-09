# Add Nexus to a Website

## [Add Nexus in One Minute](#add-nexus-in-one-minute)

In this section, we will show how to use Nexus to an existing HTML page. You can follow along with your own website, or create an empty HTML file to practice.

## [Include the scripts](#include-scripts)

```html
<script
  type="text/javascript"
  src="https://static.twinlify.com/apps/nexus-x.x.x.min.js"
></script>
```

Replace the semantic version `x.x.x` to the latest on <https://www.npmjs.com/package/@twinlify/nexus>

## [Add a DOM Container](#add-a-dom-container)

```html
<div id="nexusContainer" style="width: 600px; height: 450px;" />
```

## [Instanciate your nexus](#instanciate-your-nexus)

Once `nexus.js` script is loaded, you can create an instance attached to your container `div`

```html
<script type="text/javascript">
  Nexus.create({
    clientId: 'demo',
    containerId: 'nexusContainer',
    configId: 'rooms'
  });
</script>
```
