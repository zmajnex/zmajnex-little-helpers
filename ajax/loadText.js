/**
 * This function load text and from txt tile and show it in console log
 */
document.getElementById('button').addEventListener('click', loadText);
function loadText() {
    //create XHR object
    var xhr = new XMLHttpRequest();
    // Open-type,url,file, async parametars of function
    xhr.open('GET', 'exemple.txt', true);
    xhr.onload = function () {
        //Check status of response 
        if (this.status == 200) {
            console.log(this.responseText);
            document.getElementById('text').innerHTML = this.responseText;
        } else if (this.status == 404) {
            document.getElementById('text').innerHTML = 'NOT FOUND!';
        }
    }
    xhr.onerror = function () {
        console.log('req error...!');
    }
    //sends request
    xhr.send();
}