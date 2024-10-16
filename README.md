# monorep-boilerplate
A NodeJS Monorep boilerplate end2end for publishing to npmjs


## Publish
```
# Setup
yarn install

# consider `npx lerna version` to easily update versioning 

# Build it
npx lerna run build

# Publish
# The following could still be automated (lerna!)
cd packages/core && npm publish --access=public
cd packages/extension && npm publish --access=public
cd packages/executable && npm publish --access=public

