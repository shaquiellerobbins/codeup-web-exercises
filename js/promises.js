"use strict";
document.addEventListener("DOMContentLoaded", function () {
    (async function() {
        const options = {
            method: 'GET',
            headers: {
                "Authorization": "gitHubApiKey"
            }
        };


        fetch('https://api.github.com/users', options)
            .then(function(response) {

                if(response.status !== 200) {
                    return Promise.reject("Status was " +response.status);
                }
                return response.json();
            }).then(function(users) {
              console.log(users);
        }).catch(function(error) {
            console.log(error);
            console.log("ERROR " + error);
        }).finally(function() {
          console.log("This always executes.");
        });


        function getGithubUsernames() {
            return fetch('https://api.github.com/users', options)
                .then(response => response.json())
                .catch(function(error) {
                    console.warn("ERROR: " + error);
                });
        }

        const users = await getGithubUsernames()


        console.log(users);

    })();
});

// function wait () {
//     return
//     wait(1000).then(() => console.log('You\'ll see this after 1 second'));
//     wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

