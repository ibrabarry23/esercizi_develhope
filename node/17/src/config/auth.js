const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { getUserById } = require("../models/user");

require("dotenv").config();

console.log("Loaded environment variables:");
console.log("SECRET:", process.env.SECRET);

const opts = {
  secretOrKey: process.env.SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(
  new Strategy(opts, async (payload, done) => {
    try {
      const user = await getUserById(payload.id);
      return user ? done(null, user) : done(new Error("User not found"), false);
    } catch (error) {
      done(error, false);
    }
  })
);
