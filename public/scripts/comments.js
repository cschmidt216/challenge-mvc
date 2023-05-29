async function commentFormHandler(event) {
    event.preventDefault();
  
    const commentTextElement = document.getElementById("comment-body");
    const commentText = commentTextElement.value.trim();
  
    const postID = window.location.pathname.split('/').pop();
  
    if (commentText) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
          post_id: postID,
          comment_text: commentText
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Error: ' + response.statusText);
      }
    }
  }
  
  document.getElementById('comment-form').addEventListener('submit', commentFormHandler);