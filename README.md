<p align="center">
  <img width="234" height="376" src="https://safe.ulalou.me/y16n0zb94p3q.png">
</p>

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/kanadeko/Kuro/master/LICENSE)

## persafe

This fork is being used at [safe.ulalou.me](safe.ulalou.me), if you're looking for the original, go to [WeebDev/chibisafe](github.com/WeebDev/chibisafe)

### Docker
If you want to deploy a docker instance instead of manually setting the service up, you can use `docker-composer`.
[Please refer to the docs here](docs/docker.md)

### Requirements

- Recent version of Linux (My instance runs on [Ubuntu 20.04 LTS](https://ubuntu.com/download/server#downloads))
- `node` version 12.18.2+ (I personally use [n](https://github.com/tj/n) for version management)
- `build-essential` package installed in your system to build dependencies
- `ffmpeg` package installed
- `pm2` globally installed (`npm i -g pm2`) to keep the service alive.
- `nginx` or any other reverse proxy

### Installing

1. Clone the repo
2. Run `npm i`
3. Run `npm run setup`

After this, your instance is pretty much ready, you can edit the .env if you want

4. Check the [nginx](docs/nginx.md) file for a sample config.

5. Run `pm2 start pm2.json`
6. Works

## Author

**Chibisafe** © [Pitu](https://github.com/Pitu), Released under the [MIT](https://github.com/WeebDev/chibisafe/blob/master/LICENSE) License.<br>
Authored and maintained by Pitu.

> [chibisafe.moe](https://chibisafe.moe) · GitHub [@Pitu](https://github.com/Pitu)
