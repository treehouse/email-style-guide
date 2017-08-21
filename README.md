# email-style-guide
Treehouse's Email Style Guide

## Usage

```
@import email-style
```

TODO: Document on how to include this in other projects and 3rd-party email providers.

## Development

### Setup

```
$ bin/setup
```

### Start Jekyll

```
$ yarn run gulp serve
```

Now point your browser at: http://localhost:4000/email-style-guide/

### Building Assets

Running `yarn run serve` will automatically build assets when they change.  If you need to manually update assets in `src` or `docs/src`:

```
$ yarn run gulp
```

## Releasing

#### Update the release notes

Update `docs/release_notes.html` with the new version number and some notes about the release.

#### Bump the version number

Update the version number, create a git tag, and push.

```
$ yarn version
$ git push --tags
```
