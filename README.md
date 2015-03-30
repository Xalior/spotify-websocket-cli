Spotify-websocket-cli
---------------------

A bare-bones command line player for spotify that does not depend upon any closed-party code to run.

i.e.: This client _does_ _not_ use the libspotify bindings with an API key, or does it use DBus or some dodgy, half-baked scripting language bolted to the side of the operating system.  It doesn't even try to send remote control events to spotify using the (long) depricated remote control protocol.

This is a (pure javascript) Spotify playback client.

You can think of it as
```
	cat spotify://trackId > /dev/audio
```