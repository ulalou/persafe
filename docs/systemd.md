### Service config for systemd
If you want to keep persafe running by using systemd you can copy the example code shown below and create the file `/etc/systemd/system/persafe.service` with it.

You will need to edit the parameters:
- `User` to be the username/uid of your persafe instance
- `WorkingDirectory` to the **FULL** path to your persafe, `/home/persafe/persafe` for example.
- `EnvironmentFile` the same as the above, with the addition of `/.env`, `/home/persafe/persafe/.env`

### If you are using n/nvm you will also need to update the path to npm in `ExecStart`
- For n this will likely be `/home/username/n/bin/npm`
- You can also find this by running `whereis npm` in your terminal and copy the path from the output.

Example below.

```
[Unit]
Description=persafe, easy to use file uploader
After=network.target

[Service]
Type=simple
User=persafe
WorkingDirectory=/home/persafe/persafe
EnvironmentFile=/home/persafe/persafe/.env
ExecStart=/usr/bin/npm run start
Restart=always

[Install]
WantedBy=multi-user.target
```
