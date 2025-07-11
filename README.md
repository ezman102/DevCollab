# DevCollab

## Modules

### Web

The frontend module. You may execute the following tasks under the folder `./apps/dev-collab-web`.

- 1st time setup: `npm ci`
- development: `npm run dev`

### Api

The api module. You may execute the following tasks under the folder `./apps/dev-collab-api`.

- 1st time setup: `npm ci`
- development: `npm run dev`

## Database

### Setup

We use Mysql as the database, so please either install it at the [official site](https://dev.mysql.com/downloads/) or from a [docker image](https://hub.docker.com/_/mysql).

Please also add the following login account in your local database.

```yaml
username: root
password: P@ssw0rd
```

After installing, you need to create an empty database with name `DevCollab` for our application.

Then, make sure that the db works work with the following connection parameters.

```yaml
host: "127.0.0.1"
port: 3306
username: "root"
password: "P@ssw0rd"
database: "DevCollab"
```

### Writing New SQL

For each of the update sql, you need to put your sql into the folder `apps\dev-collab-api\src\sql`. The file name follows the following format `YYYYMMDD_Feature`.

### Execute New SQL

When there are new sql files available from your teammate commits, the tool `db-integrity-tracker` will notify you to apply them into your local database when you start to develop via `npm run dev`. The log will output which sql files should be executed.

```txt
Make sure you have run the following sqls in your local database:
- 20241004_Project.sql
```

You may also run the following command `npm run track-sql` to check the integrity. If no output, it means the current database is up-to-date.

After you have applied the sql files, you need to append the filenames of the sql files into the `db-tracker.txt`. So, your db-tracker.txt should be looked like the following.

```
20241004_Project.sql
```
