# TrustedForm breaks styled-components >=5

## Summary

By loading TrustedForm on our site, the styling is not applied on subsequent pages (using javascript client-side navigation). In particular, this issue occurs for us using styled-components v5 (version 4 works fine). We are using Next.js for the app framework and client side navigation.

This appears to be caused by TrustedForm replacing the "style" tag that styled-components keeps a reference to for adding the styles for newly-navigated pages.
## Starting the server

To start the server locally, run:

```
yarn install
yarn build
yarn start
```

Running in dev mode will *not* reproduce the problem.

## Normal operation without TrustedForm

- Navigate to http://localhost:3000/
- Click the colored links that navigate between the home page and "page two".
- Note that the links have background colors orange and blue, respectively.

## With TrustedForm

- Navigate to http://localhost:3000/?tf=1
- The page should say "TrustedForm included: true"
- Click the link to page two
- The link on page two will no longer be correctly styled with a blue background
