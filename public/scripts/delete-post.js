async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.pathname.split('/').pop();

  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
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

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);