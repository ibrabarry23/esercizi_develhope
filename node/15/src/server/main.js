const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const { Strategy, ExtractJwt } = require("passport-jwt");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const { SECRET } = process.env;
const opts = {
  secretOrKey: SECRET,
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

app.use("/auth", require("./routes/auth"));

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server in esecuzione sulla porta ${PORT}`);
});
