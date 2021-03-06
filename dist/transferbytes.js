XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var ROOT = 'https://www.transferbytes.io/';

module.exports = {
    connect: function ({id, key, language, content, idPost}) {
        idPost = idPost || 0;

        return uploadImages(content).then(function (content) {
            return new Promise(function (resolve, reject) {
                var xmlhttp = new XMLHttpRequest();
                var data = 'data=' + JSON.stringify({
                    content: content,
                    languaje: language,
                    postId: idPost,
                    license: key
                });

                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == xmlhttp.DONE) {
                        if (xmlhttp.status == 200) {
                            resolve(xmlhttp.responseText);
                        } else if (xmlhttp.status == 400) {
                            console.log('There was an error 400');
                        } else {
                            console.log('Something else other than 200 was returned');
                        }
                    }
                };

                xmlhttp.open('POST', ROOT + 'co/transfering/call/ident/i=' + id, true);
                xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xmlhttp.setRequestHeader('Action', id);
                xmlhttp.send(data);
            }).then(function (result) {
                return JSON.parse(result);
            });
        });
    },
    
    delete: function ({key, idPost}) {
        idPost = idPost || 0;

        return new Promise(function (resolve, reject) {
            var xmlhttp = new XMLHttpRequest();
            var data = 'data=' + JSON.stringify({
                postId: idPost,
                license: key
            });

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == xmlhttp.DONE) {
                    if (xmlhttp.status == 200) {
                        resolve(xmlhttp.responseText);
                    } else if (xmlhttp.status == 400) {
                        console.log('There was an error 400');
                    } else {
                        console.log('Something else other than 200 was returned');
                    }
                }
            };

            xmlhttp.open('POST', ROOT + 'co/transfering/call/ident/i=' + idPost, true);
            xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlhttp.setRequestHeader('Action', 'deletePost');

            xmlhttp.send(data);
        }).then(function (result) {
            return result;
        });
    }
};

function uploadImages(content) {
    if (content == undefined) {
        return Promise.resolve(content).then(() => {
            return '';
        });
    }

    var promises = [];

    for (i = 0; i < content.length; i++) {
        if (content[i] instanceof Object) {
            promises.push(sendFile(content[i].id, content[i]));
        }
    }

    return resolveAllpromises(promises, content);
}

function resolveAllpromises(promises, content) {
    return Promise.all(promises).then((result) => {
        promiseCount = 0;

        for (i = 0; i < content.length; i++) {
            if (content[i] instanceof Object) {
                content[i] = result[promiseCount];
                promiseCount++;
            }
        }

        return content;
    });
}

function sendFile(idElement, content) {
   return 0;
}