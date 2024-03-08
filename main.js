// your code here
document.getElementById('submit').addEventListener('click', function () {
  const nameValue = document.getElementById('name').value;
  const messageValue = document.getElementById('message').value;

  const postDiv = document.querySelector('.posts');

  const newPostDiv = document.createElement('div');

  const newPostTextP = document.createElement('p');
  const newPostTextNode = document.createTextNode(messageValue);
  newPostTextP.appendChild(newPostTextNode);

  const newPostNameP = document.createElement('p');
  const newPostNameNode = document.createTextNode('Posted By: ' + nameValue);
  newPostNameP.appendChild(newPostNameNode);

  const newPostHR = document.createElement('hr');

  newPostDiv.append(newPostTextP);
  newPostDiv.append(newPostNameP);
  newPostDiv.append(newPostHR);

  postDiv.append(newPostDiv);

  console.log(nameValue, messageValue)
})