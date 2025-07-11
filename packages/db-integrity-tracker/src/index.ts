#!/usr/bin/env node
import fs from "fs";
import { difference, join, map } from "lodash";
import { EOL } from "os";
import yargs from "yargs/yargs";

const argv = yargs(process.argv.slice(2))
  .options({
    sqlfolder: {
      type: "string",
      demandOption: "The path for the sql folder is required",
    },
    trackfile: {
      type: "string",
      demandOption: "The path for the sql track file is required",
    },
  })
  .parseSync();

if (!fs.existsSync(argv.sqlfolder)) {
  console.error(`Make sure the sql folder exist`);
  process.exit(1);
}

if (!fs.existsSync(argv.trackfile)) {
  fs.writeFileSync(argv.trackfile, "", { encoding: "utf-8" });
}

const sqls = fs.readdirSync(argv.sqlfolder);
const tracked = fs.readFileSync(argv.trackfile, "utf-8").split(EOL);
const diff = difference(sqls, tracked);

if (diff.length === 0) {
  process.exit();
} else {
  console.error(
    `Make sure you have run the following sqls in your local database:${EOL}${join(
      map(diff, (d) => "- " + d),
      EOL
    )}`
  );
  process.exit(1);
}
