'use strict';

// HTML contains element 'message'. This is used to show the server's response
// Select it and save it as a variable/object

// make function 'upload' which
// - prevents the form from sending
// - writes 'Upload in progress...' into 'message' element
// - selects the file input field
// - makes FormData -object and adds the file selected byt the user into the object
// - send the file to the same url as in task a by using fetch -method
// - when file upload is complete, writes server response to 'message' element
// function ends

// make an event listener which calls upload function when the form is submitted

const upload = () => {
  const message = document.getElementById('message');
  message.innerHTML = 'Upload in progress...'

  const input = document.querySelector('input[type="file"]');
  const data = new FormData();

  data.append('fileToUpload', input.files[0]);

  const settings = {
          method: 'POST',
          body: data
      };

  fetch('server/upload/route', settings)
  .then((response) => {
      return response.text();
  }).then((text) => {
    message.innerHTML = text
  }).catch((err) => {
    message.innerHTML = "an error has occured"
  });
}
