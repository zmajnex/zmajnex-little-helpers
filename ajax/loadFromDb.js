/*
*Fetch users from Db
 */
document.getElementById('btn1').addEventListener('click', loadUsers);

//get users
function loadUsers() {
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'users.php', true);
    xhr.onload = function () {
        if (this.status == 200) {
            var users = JSON.parse(this.responseText)
            //Because we have array we need to loop trough that array
            var output = '';
            for (var i in users) {
                output += '<ul>' +
                    '<li>ID:' + users[i].id + '</li>' +
                    '<li>name:' + users[i].name + '</li>';
            }
            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();
}