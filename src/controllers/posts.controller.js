function getAllPosts(req, res) {
  res.send('Fetching all blog posts...');
}

async function getPostById(req, res) {
  const { postId } = req.params;

  res.json({
    message: `Fetching data for post with ID: ${postId}`,
  });
}

module.exports = {
  getAllPosts,
  getPostById,
};
