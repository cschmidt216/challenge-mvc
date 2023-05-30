async function editFormHandler(event) {
  event.preventDefault();

  const title = document.getElementById("post-title").value;
  const postContent = document.getElementById("post-content").value;
  const id = window.location.pathname.split('/').pop();

  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      post_content: postContent
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Error: ' + response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);