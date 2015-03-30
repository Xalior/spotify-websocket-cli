/*
 * spotify-websocket-cli
 *
 */

'use strict';

// External lib.

var options = require('commander');
var config = require('home-config').load('.spotify-websocket-cli');

exports.version = '0.0.1';
exports.name = 'swsc';

// CLI options we care about.
exports.aliases = {
    h: '--help',
    V: '--version',
    v: '--verbose',
    u: '--user [user]',
    p: '--pass [pass]'
};

exports.help = {
    h: 'This Help',
    V: 'Print the version number and exit.',
    v: 'Verbose Output',
    u: 'Spotify Username',
    p: 'Spotify Password'
};

options.version(exports.version);

options.parse(process.argv);

for(var index in exports.aliases) {
    if (exports.aliases.hasOwnProperty(index)) {
        console.log(index);
        if(config[index]) {
            options.option(index + ', ' + exports.aliases[index], exports.help[index], config[index]);
        } else {
            console.log('new');
            options.option(index + ', ' + exports.aliases[index], exports.help[index]);
        }
    }
}

Object.defineProperty(exports, 'options', {
    get: function() {
        return options;
    }
});

Object.defineProperty(exports, 'name', {
    _name: exports.name,
    set: function(val) {
        this._name = val;
    },
    get: function() {
        return this._name;
    }
});


