# npm-workspaces-test

I am using this repo to test [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) which were introduced in v7 of npm.

## Prerequisites

* npm v7 or above

## Installing the workspace

```
npm install
```

This will install all the dependencies for packaegs in the `packages/*` directory in a single `node_modules` folder at the root of the repository and symlink the local packages.

Unlike other tools such as lerna, this **must** be run from the root directory, otherwise the packages will not be symlinked locally – running `npm install` from one of the package directories will act just like a normal `npm install`.

Running this will also run the `preinstall`, `postinstalll` and `prepare` scripts in each of the workspace packages if the script is present.

## Testing the workspace

```
npm test
```

This will run the `test` script in each of the workspace packages if the script is present.

## Adding package dependencies

Any new dependencies need to be added manually to the `package.json` files in the `packages/*` directory. :-(

You can find the latest version for a package using `npm view` command. For example:

```
$ npm view express version
4.17.1
```

## Implementation

This currently relies on [Lerna](https://lerna.js.org/) to execute npm scripts for all packages in the workspace. (Lerna is not used for bootstrapping packages as this is now handled by [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces); only the `lerna exec` command is used when running scripts).

Lerna is not a pre-requisite to installing this project for local development as it is installed as a dev-dependency in the root package, and only required in the root package scripts.

In a [future version of npm](https://github.com/npm/rfcs/blob/8167fa97a266cc2bf60cc545b382d274dc397496/accepted/0000-workspaces-part2.md) Lerna can be removed entirely.
