const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.getElementById("post-title").value;
    const postContent = document.getElementById("post-content").value;
  
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, postContent }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  
  document.getElementById('new-post-form').addEventListener('submit', newFormHandler);