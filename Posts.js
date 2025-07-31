import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';

function Post() {
  const [posts, setPosts] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  // const [selectedPostId, setSelectedPostId] = useState('');
  // const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Error fetching posts:', err));
  }, []);

  const uniqueUserIds = [...new Set(posts.map((post) => post.userId))];
  const filteredPosts = selectedUserId
    ? posts.filter((post) => post.userId === selectedUserId)
    : [];
const handleUserChange = (e) => {
  const userId = Number(e.target.value);
  setSelectedUserId(userId);
};
    
  //   setSelectedUserId(userId);
  //   setSelectedPostId('');
  //   setSelectedPost(null);
  // };

  // const handlePostChange = (postId) => {
  //   const post = posts.find((p) => p.id === postId);
  //   setSelectedPostId(postId);
  //   setSelectedPost(post);
  // };

  // const filteredPosts = posts.filter((post) => post.userId === Number(selectedUserId));

  return (
    <div className="bg-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card bg-warning-subtle text-danger text-center p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="card-body">
          <h2>Select a User and Post</h2>

          
          <select className="form-select mb-3" defaultValue="" onChange={handleUserChange}>
            <option value="" disabled>Select User ID</option>
            {uniqueUserIds.map((userId) => (
              <option key={userId} value={userId}>{userId}</option>
            ))}
          </select>
          {filteredPosts.length > 0 && (
            <div className="text-start text-dark mt-4">
              <h4>Posts by User {selectedUserId}</h4>
              {filteredPosts.map((post) => (
                <div key={post.id} className="mb-3 border-bottom pb-2">
                  <p><strong>Post ID:</strong> {post.id}</p>
                  <p><strong>Title:</strong> {post.title}</p>
                  <p><strong>Body:</strong> {post.body}</p>

          {/* {selectedPost && (
            <div className="mt-4 text-start text-dark">
              <p><strong>User ID:</strong> {selectedPost.userId}</p>
              <p><strong>ID:</strong> {selectedPost.id}</p>
              <p><strong>Title:</strong> {selectedPost.title}</p>
              <p><strong>Body:</strong> {selectedPost.body}</p> */}
            </div>
              ))}        
        </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
