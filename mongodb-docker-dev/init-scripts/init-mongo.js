print("mongo init start --------------------");

const DEFAULT_DATABASE_NAME = "appDB";
const pms = db.getSiblingDB(DEFAULT_DATABASE_NAME);

pms.createUser({
  user: "appUser",
  pwd: "q12345",
  roles: [
    {
      role: "readWrite",
      db: DEFAULT_DATABASE_NAME,
    },
  ],
});

print("mongo init end --------------------");
