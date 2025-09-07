module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.user) next(); else res.status(401).send('Unauthenticated');
  },
  isAdmin: (req, res, next) => {
    if (req.user && req.user.role === 'admin') next(); else res.status(403).send('Admin only');
  },
  isEmployee: (req, res, next) => {
    if (req.user && req.user.role === 'employee') next(); else res.status(403).send('Employee only');
  }
};
