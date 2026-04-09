function checkRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.json({ message: "Access denied ❌" });
    }
    next();
  };
}

module.exports = checkRole;