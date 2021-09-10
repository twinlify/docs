<!-- ## [WIP](#wip) -->

## [v0.19.5](#v0195)

_September 10, 2021_

- CDN bundle now targets `es6`
- Updated to [three 132](https://github.com/mrdoob/three.js/releases/tag/r132)

## [v0.19.4](#v0194)

_August 24, 2021_

- Updated to [three 131](https://github.com/mrdoob/three.js/releases/tag/r131)

## [v0.19.3](#v0193)

_July 20, 2021_

- Updated to [three 130](https://github.com/mrdoob/three.js/releases/tag/r130)
- Fixed z behaviours for `gltf-multi`
- (internal) preparing hud modes

## [v0.19.1](#v0191)

_June 25, 2021_

- [`updateDeviceData()`](https://docs.twinlify.com/documentation/api#updatedevicedata): improved coordinates update when no `reading` is used

## [v0.19.0](#v0190)

_June 21, 2021_

- enabled QRCodes on HUD to open external links.
- enabled actions to external tools, such as messaging on Slack channels.
- enabled custom REST calls to trigger from a selected device
- (internal) coloring steps can now be used with booleans `[true, false]`

## [v0.18.0](#v0180)

_June 18, 2021_

- introduced `moving` devices: If you update `coordinates` using [`updateDeviceData()`](https://docs.twinlify.com/documentation/api#updatedevicedata) or a live `connection`, you device will be animated from its current position to these new coordinates.

- it's now possible to create a device without coordinates. It will be invisible on the scene, then appear when new coordinates will we received (using a `connection`) or given (using `updateDeviceData()`)

## [v0.17.1](#v0171)

_June 10, 2021_

- SDK: added [`closeMenu()`](https://docs.twinlify.com/documentation/api#closemenu)
- _(internal)_ started to rename `focus` to `projection` --> should move upward to SDK soon
- _(internal)_ removed unused libs from previous HUD

## [v0.17.0](#v0170)

_June 04, 2021_

- Introduced light theme (set as default for now)

## [v0.16.4](#v0164)

_June 02, 2021_

- Updated to [three 129](https://github.com/mrdoob/three.js/releases/tag/r129)
- _(internal)_ fixed default coordinates for gltf-multi

## [v0.16.3](#v0163)

_May 27, 2021_

- Fixes on some device positioning
- Removed many spamming logs

## [v0.16.2](#v0162)

_May 27, 2021_

- SDK: Updated device properties, see <https://docs.twinlify.com/documentation/api#additional-model-properties>
- Fixed click behaviour on ornaments

## [v0.16.1](#v0161)

_May 24, 2021_

- Enhanced tag filtering
- _(internal)_ Removed all Nexus v1 old state behaviour
- _(internal)_ Moved actions outside barrels

## [v0.16.0](#v0160)

_May 19, 2021_

- Introducing `warnings` as specific tags applied on custom rules, crossing device categories.
- Focus selection is now using `names`.

## [v0.15.2](#v0152)

_May 15, 2021_

- handling scenes without buildings.

## [v0.15.1](#v0151)

_May 14, 2021_

- Put back `pixelRatio` to 1 to improve performances.

## [v0.15.0](#v0150)

_May 14, 2021_

- Handling new config for buildings imported using `.glb`/`.gltf`.
- Devices are now positioned at `scene.origin` by default.

## [v0.14.0](#v0140)

_May 11, 2021_

- Put back and improved devices hovering and selection.
- Improved lights, added shadows.
- Improved devices filtering.
- Added new device boxes to display connected data.
- Fixed ground behaviour for undergrounds.

## [v0.13.0](#v0130)

_May 05, 2021_

- Devices: removed `properties.level`. It's been replaced by `properties.partId`, to allow `z` calculation and filtering by building part at the same time.
- Introduced devices `tags`. Tags will allow filtering on the scene and UI.
- Introduced devices UI enabling `coloring` selection.

<p align="center"><img width="300px" src="https://user-images.githubusercontent.com/910636/117120028-1a6bc400-ad93-11eb-99f1-b302779286b9.png"></p>

## [v0.12.0](#v0120)

_April 28, 2021_

- `connections` fully migrated to `devices`.
- Changes on the UI to switch between Building/Devices.

<p align="center"><img width="300px" src="https://user-images.githubusercontent.com/910636/116450988-413e6d80-a85c-11eb-9083-3ee47ba1d9d1.png"></p>

## [v0.11.5](#v0115)

_April 23, 2021_

- Updated to [three 128](https://github.com/mrdoob/three.js/releases/tag/r128)
- Started `connections` migration to `devices`

## [v0.11.4](#v0114)

_April 18, 2021_

- Devices: `feature` property was renamed [`location`](/documentation/api#location)
