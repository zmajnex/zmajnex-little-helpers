/**
 * This function laod users from json file,  and parse output as html
 */
document.getElementById('btn1').addEventListener('click', loadUser);
document.getElementById('btn2').addEventListener('click', loadUsers);

function loadUser() {
    //Create new object xhr
    var xhr = new XMLHttpRequest();
    //Open json file
    xhr.open('GET', 'user.json', true);
    xhr.onload = function () {
        if (this.status == 200) {
            //Parsing json array
            var user = JSON.parse(this.responseText);
            var output = '';
            output += '<ul>' +
                '<li>ID:' + user.id + '</li>' +
                '<li>name:' + user.name + '</li>' +
                '<li>email:' + user.email + '</li>' + '</ul>';
            document.getElementById('user').innerHTML = output;
        } else if (this.responseText) {
            document.getElementById('user').innerHTML = 'Not found!';
        }
    }
    xhr.send();
}