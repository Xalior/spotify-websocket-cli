Spotify-websocket-cli
---------------------

A bare-bones command line player for spotify that does not depend upon any closed-party code to run.

This tool uses node 0.10.36.  I have failed to make it work with versions above. I believe this is ProtoBufJs related. But have not dug into it. Yet.

i.e.: This client _does_ _not_ use the libspotify bindings with an API key, or does it use DBus or some dodgy, half-baked scripting language bolted to the side of the operating system.  It doesn't even try to send remote control events to spotify using the (long) depricated remote control protocol.

This is a (pure javascript) Spotify playback client.

You can think of it as
```
	cat spotify://trackId > /dev/audio
```

You can bypass signing in each time you by creating a .spotify-websocket-cli in your home directory.
```
u = Xalior
p = MySecretMusicalPassword
```
