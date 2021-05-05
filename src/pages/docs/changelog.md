## WIP

- put back and improved highlighted devices

## [v0.13.0](#v0130)

_May 05, 2021_

- devices: removed `properties.level`. It's been replaced by `properties.partId`, to allow `z` calculation and filtering by building part at the same time.
- introduced devices `tags`. Tags will allow filtering on the scene and UI.
- introduced devices UI enabling `coloring` selection

<p align="center"><img width="300px" src="https://user-images.githubusercontent.com/910636/117120028-1a6bc400-ad93-11eb-99f1-b302779286b9.png"></p>

## [v0.12.0](#v0120)

_April 28, 2021_

- `connections` fully migrated to `devices`
- changes on the UI to switch between Building/Devices

<p align="center"><img width="300px" src="https://user-images.githubusercontent.com/910636/116450988-413e6d80-a85c-11eb-9083-3ee47ba1d9d1.png"></p>

## [v0.11.5](#v0115)

_April 23, 2021_

- Updated to [three 128](https://github.com/mrdoob/three.js/releases/tag/r128)
- started `connections` migration to `devices`

## [v0.11.4](#v0114)

_April 18, 2021_

- devices: `feature` property was renamed [`location`](/documentation/api#location)
