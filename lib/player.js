'use strict';

var lame = require('lame');
var Speaker = require('speaker');

exports.play = function(track, q) {
    return track.play()
        .pipe(new lame.Decoder())
        .pipe(new Speaker())
}