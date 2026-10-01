const {
  PrismaClient
} = require("@prisma/client");
const {
  PrismaBetterSqlite3
} = require("@prisma/adapter-better-sqlite3");
const Database = require("better-sqlite3");
const paths = require("../../shared/paths");
paths.ensureDatabaseDir();
const dbPath = paths.DB_FILE;
const BOOTSTRAP_SQL = "\nCREATE TABLE IF NOT EXISTS \"Account\" (\n  \"id\" TEXT NOT NULL PRIMARY KEY,\n  \"name\" TEXT NOT NULL,\n  \"profileUrl\" TEXT,\n  \"avatarUrl\" TEXT,\n  \"avatarPath\" TEXT,\n  \"sessionPath\" TEXT,\n  \"fbId\" TEXT,\n  \"isActive\" BOOLEAN NOT NULL DEFAULT true,\n  \"createdAt\" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,\n  \"updatedAt\" DATETIME NOT NULL\n);\nCREATE TABLE IF NOT EXISTS \"Group\" (\n  \"id\" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n  \"accountId\" TEXT,\n  \"name\" TEXT NOT NULL,\n  \"content\" TEXT NOT NULL DEFAULT '',\n  \"comments\" TEXT NOT NULL DEFAULT '',\n  \"reaction\" TEXT,\n  \"isActive\" BOOLEAN NOT NULL DEFAULT true,\n  \"randomContent\" BOOLEAN NOT NULL DEFAULT false,\n  \"randomImage\" BOOLEAN NOT NULL DEFAULT false,\n  \"randomReaction\" BOOLEAN NOT NULL DEFAULT false,\n  \"createdAt\" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,\n  \"updatedAt\" DATETIME NOT NULL\n);\nCREATE UNIQUE INDEX IF NOT EXISTS \"Group_accountId_name_key\" ON \"Group\"(\"accountId\", \"name\");\nCREATE TABLE IF NOT EXISTS \"GroupLink\" (\n  \"id\" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n  \"groupId\" INTEGER NOT NULL,\n  \"url\" TEXT NOT NULL,\n  \"status\" TEXT NOT NULL DEFAULT 'PENDING',\n  \"lastPostedAt\" DATETIME,\n  CONSTRAINT \"GroupLink_groupId_fkey\" FOREIGN KEY (\"groupId\") REFERENCES \"Group\" (\"id\") ON DELETE CASCADE ON UPDATE CASCADE\n);\nCREATE TABLE IF NOT EXISTS \"GroupImage\" (\n  \"id\" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n  \"groupId\" INTEGER NOT NULL,\n  \"fileName\" TEXT NOT NULL,\n  \"filePath\" TEXT NOT NULL,\n  \"fileSize\" INTEGER,\n  \"mimeType\" TEXT,\n  \"createdAt\" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,\n  CONSTRAINT \"GroupImage_groupId_fkey\" FOREIGN KEY (\"groupId\") REFERENCES \"Group\" (\"id\") ON DELETE CASCADE ON UPDATE CASCADE\n);\nCREATE TABLE IF NOT EXISTS \"Setting\" (\n  \"key\" TEXT NOT NULL PRIMARY KEY,\n  \"value\" TEXT NOT NULL,\n  \"updatedAt\" DATETIME NOT NULL\n);\nCREATE TABLE IF NOT EXISTS \"AccountStats\" (\n  \"id\" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n  \"accountId\" TEXT NOT NULL,\n  \"total\" INTEGER NOT NULL DEFAULT 0,\n  \"success\" INTEGER NOT NULL DEFAULT 0,\n  \"failed\" INTEGER NOT NULL DEFAULT 0,\n  \"pending\" INTEGER NOT NULL DEFAULT 0,\n  \"post\" INTEGER NOT NULL DEFAULT 0,\n  \"comment\" INTEGER NOT NULL DEFAULT 0,\n  \"reaction\" INTEGER NOT NULL DEFAULT 0,\n  \"updatedAt\" DATETIME NOT NULL,\n  CONSTRAINT \"AccountStats_accountId_fkey\" FOREIGN KEY (\"accountId\") REFERENCES \"Account\" (\"id\") ON DELETE CASCADE ON UPDATE CASCADE\n);\nCREATE UNIQUE INDEX IF NOT EXISTS \"AccountStats_accountId_key\" ON \"AccountStats\"(\"accountId\");\nCREATE TABLE IF NOT EXISTS \"GlobalStats\" (\n  \"id\" TEXT NOT NULL PRIMARY KEY,\n  \"date\" TEXT,\n  \"total\" INTEGER NOT NULL DEFAULT 0,\n  \"success\" INTEGER NOT NULL DEFAULT 0,\n  \"failed\" INTEGER NOT NULL DEFAULT 0,\n  \"pending\" INTEGER NOT NULL DEFAULT 0,\n  \"updatedAt\" DATETIME NOT NULL\n);\nCREATE TABLE IF NOT EXISTS \"Key\" (\n  \"id\" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,\n  \"code\" TEXT NOT NULL,\n  \"hwid\" TEXT NOT NULL\n);\n";
try {
  const bootstrapDb = new Database(dbPath);
  bootstrapDb.pragma("journal_mode = WAL");
  bootstrapDb.exec(BOOTSTRAP_SQL);
  bootstrapDb.close();
} catch (_0x48f41d) {
  console.warn("[DB] Schema bootstrap failed:", _0x48f41d.message);
}
const _0x351971 = {
  url: "file:" + dbPath
};
const adapter = new PrismaBetterSqlite3(_0x351971);
const _0x420a22 = {
  adapter: adapter
};
const prisma = new PrismaClient(_0x420a22);
try {
  prisma.$executeRawUnsafe("PRAGMA journal_mode = WAL;").catch(() => {});
  prisma.$executeRawUnsafe("PRAGMA synchronous = NORMAL;").catch(() => {});
} catch (_0x16fc87) {
  console.warn("Failed to set PRAGMA journal_mode:", _0x16fc87.message);
}
module.exports = prisma;
