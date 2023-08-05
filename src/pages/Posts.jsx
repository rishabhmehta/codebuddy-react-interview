import { useEffect, useState } from 'react';
import { dummyAvatar, dummyImage } from '../helpers/postsData';
import '../styles/posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const baseUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${baseUrl}/posts`)
      .then(res => res.json())
      .then(data => {
        setPosts(data.data.posts);
      })
      .catch(() => {});
  }, []);

  return (
    <main className="p-3">
      <div className="text-center fs-4">List of Posts</div>

      <div>
        <div className="container">
          {posts.map((post, index) => (
            <div className="cardContainer" key={post.id}>
              <div>
                <div className="imageContainer">
                  <img src={`${dummyImage[index]}`} alt="Post" />
                </div>
                <div className="writeup">
                  <p>{post.writeup}</p>
                </div>
                <div className="bottomPush">
                  <div className="flexContainer">
                    <div className="avatarContainer">
                      <img src={`${dummyAvatar[index]}`} className="rounded-circle" alt="Profile" />
                    </div>
                    <p className="fullName">
                      {post.firstName} {post.lastName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Posts;
