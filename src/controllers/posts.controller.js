const { sendSuccess } = require('../utils/response.utils');

function getAllPosts(req, res) {
  const mockPosts = [
    {
      id: '1',
      title: 'Welcome to Blogify',
      excerpt: 'A clean API shell for blog content.',
    },
    {
      id: '2',
      title: 'Second post example',
      excerpt: 'Structured responses and modular routing.',
    },
  ];

  return sendSuccess(res, { posts: mockPosts }, 'Posts retrieved successfully');
}

async function getPostById(req, res) {
  const { postId } = req.params;

  const post = {
    id: postId,
    title: `Post ${postId}`,
    content: 'This is a placeholder blog post representing the controller pattern.',
  };

  return sendSuccess(res, { post }, 'Post retrieved successfully');
}

module.exports = {
  getAllPosts,
  getPostById,
};
