<!-- ## [WIP](#wip) -->

## [v0.16.1](#v0161)

_May 24, 2021_

- enhanced tag filtering
- _(internal)_ removed all Nexus v1 old state behaviour
- _(internal)_ moved actions outside barrels

## [v0.16.0](#v0160)

_May 19, 2021_

- introducing `warnings` as specific tags applied on custom rules, crossing device categories.
- focus selection is now using `names`.

## [v0.15.2](#v0152)

_May 15, 2021_

- handling scenes without buildings.

## [v0.15.1](#v0151)

_May 14, 2021_

- put back `pixelRatio` to 1 to improve performances.

## [v0.15.0](#v0150)

_May 14, 2021_

- handling new config for buildings imported using `.glb`/`.gltf`.
- devices are now positioned at `scene.origin` by default.

## [v0.14.0](#v0140)

_May 11, 2021_

- put back and improved devices hovering and selection.
- improved lights, added shadows.
- improved devices filtering.
- added new device boxes to display connected data.
- fixed ground behaviour for undergrounds.

## [v0.13.0](#v0130)

_May 05, 2021_

- devices: removed `properties.level`. It's been replaced by `properties.partId`, to allow `z` calculation and filtering by building part at the same time.
- introduced devices `tags`. Tags will allow filtering on the scene and UI.
- introduced devices UI enabling `coloring` selection.

<p align="center"><img width="300px" src="https://user-images.githubusercontent.com/910636/117120028-1a6bc400-ad93-11eb-99f1-b302779286b9.png"></p>

## [v0.12.0](#v0120)

_April 28, 2021_

- `connections` fully migrated to `devices`.
- changes on the UI to switch between Building/Devices.

<p align="center"><img width="300px" src="https://user-images.githubusercontent.com/910636/116450988-413e6d80-a85c-11eb-9083-3ee47ba1d9d1.png"></p>

## [v0.11.5](#v0115)

_April 23, 2021_

- Updated to [three 128](https://github.com/mrdoob/three.js/releases/tag/r128)
- started `connections` migration to `devices`

## [v0.11.4](#v0114)

_April 18, 2021_

- devices: `feature` property was renamed [`location`](/documentation/api#location)
