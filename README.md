# TransferBytes for nodejs
This is a package to run TransferBytes in nodejs projects.

## Start
You should create a <a href="https://www.transferbytes.io/signin">TransferBytes account</a>.

## Install
    npm i transferbytes --save

## Usage

    transferbytes = require("transferbytes");

    // Example list of names

    transferbytes.connect(
        '31af79360e7c1254deb8312318d36f87',
        'EN'
    ).then((result) => {
        console.log(result);
    });
