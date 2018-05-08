# TransferBytes for nodejs
This is a package to run TransferBytes in nodejs projects.

## Install
    npm i transferbytes --save

## Usage

    transferBytes = require("transferbytes");

    // Example list of names

    transferBytes.connect(
        '31af79360e7c1254deb8312318d36f87',
        'EN'
    ).then((result) => {
        console.log(result);
    });
