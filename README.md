VK 45.01
========

![Node Version][node version badge]
[![GitHub workflow status badge][GitHub workflow status badge]][GitHub workflow status URL]
[![Apache License][Apache License Badge]][Apache License, Version 2.0]

__VK 45.01__ is a companion [web app](https://vk4501.qubitpi.org/) hosting subtitles of selected movies extracted using
[Tiger](https://tiger.qubitpi.org)

Selected Movies
---------------

### Generation War (German)

#### Movie Source

- [Generation War E01 (part 1)](https://www.dailymotion.com/video/x6y1zfs)
- [Generation War E01 (part 1)](https://www.dailymotion.com/video/x6y2fdh)
- [Generation War E02 (part 1)](https://www.dailymotion.com/video/x6y64ha)
- [Generation War E02 (part 2)](https://www.dailymotion.com/video/x6y67ir)
- [Generation War E03 (part 1)](https://www.dailymotion.com/video/x6ya2qj)
- [Generation War E03 (part 2)](https://www.dailymotion.com/video/x6ya6yg)

#### Subtitles

- [EP1 - German subtitles.srt](./EP1%20-%20German%20subtitles.srt) (Work in Progress using [QubitPi/tiger](https://tiger.qubitpi.org/))

Development
-----------

> [!IMPORTANT]
>
> VK 45.01 requires Node 18 or above

### Starting Locally

To start Wilhelm locally:

```console
git clone git@github.com:QubitPi/VK-45.01.git
cd VK-45.01
yarn
yarn start
```

Then visit [localhost:3000](http://localhost:3000/)

License
-------

The use and distribution terms for [VK-45.01]() are covered by the [Apache License, Version 2.0].

[Apache License Badge]: https://img.shields.io/badge/Apache%202.0-F25910.svg?style=for-the-badge&logo=Apache&logoColor=white
[Apache License, Version 2.0]: https://www.apache.org/licenses/LICENSE-2.0

[GitHub workflow status badge]: https://img.shields.io/github/actions/workflow/status/QubitPi/wilhelm/ci-cd.yaml?branch=master&style=for-the-badge&logo=github&logoColor=white&label=CI/CD
[GitHub workflow status URL]: https://github.com/QubitPi/wilhelm/actions/workflows/ci-cd.yaml

[node version badge]: https://img.shields.io/badge/NODE-18-339933?logo=Node.js&logoColor=white&labelColor=66cc33&style=for-the-badge
