import React from 'react';

function Dropdown({ posts, onSelectPost }) {
  return (
    <select defaultValue="" onChange={(e) => onSelectPost(Number(e.target.value))}>
      <option value="" disabled>
        Select Post
      </option>
      {posts.map(post => (
        <option key={post.id} value={post.id}>
          {post.id}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;



// {posts.slice(10, 20).map((post) => (
//         <option key={post.id} value={post.id}>
//           {post.id}
//         </option>
//          ))}