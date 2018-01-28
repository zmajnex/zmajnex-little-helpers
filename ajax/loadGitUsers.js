/*
 * This function laod users from Git using Git API,and output in html
 */
document.getElementById('button').addEventListener('click', loadUsers);

        function loadUsers() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.github.com/users', true);
            xhr.onload = function() {
                if (this.status == 200) {
                    var users = JSON.parse(this.responseText);
                    console.log(users);
                    var output = '';
                    for (var i in users) {
                        output +=
                            '<div class="user">' +
                            '<img src="' + users[i].avatar_url + '" width="70" height="70">' +
                            '<ul>' +
                            '<li>ID:' + users[i].id + '</li>' +
                            '<li>name:' + users[i].login + '</li>' +
                            '<a href="' + users[i].html_url + '">' + users[i].html_url + '</a>' +
                            '</ul>' +
                            '</div>';
                    }
                    document.getElementById('users').innerHTML = output;
                }
            }
            xhr.send();
        }