function getAllPosts(req, res) {
  res.status(200).json({
    success: true,
    data: {
      message: 'Fetching all blog posts...',
    },
  });
}

async function getPostById(req, res) {
  const { postId } = req.params;

  res.status(200).json({
    success: true,
    data: {
      message: `Fetching data for post with ID: ${postId}`,
    },
  });
}

module.exports = {
  getAllPosts,
  getPostById,
};
