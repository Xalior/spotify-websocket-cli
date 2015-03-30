'use strict';

var lame = require('lame');
var Speaker = require('speaker');

exports.currentTrack = null;

exports.play = function(track, q) {
    exports.currentTrack = track;

    return exports.currentTrack.play()
        .pipe(new lame.Decoder())
        .pipe(new Speaker())
}