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
$ yarn serve
```

Open your browser to: http://localhost:4000/email-style-guide/

### Building Assets

Running `yarn serve` will automatically build assets when they change.  If you need to manually update assets in `src` or `docs/src`:

```
$ yarn build
```

### Creating Templates

Add new templates to `src/templates`

**Building**

Build email templates with:

```
$ yarn build
```

**Previewing**

After you've added a template, you can preview it with Jekyll. Start the server if you haven't done so already:

```
$ yarn serve
```

Now, say you just added a template in: `src/templates/b2b/newsletter-08-2017.html`

Open your browser to: http://localhost:4000/email-style-guide/templates/b2b/newsletter-08-2017.html and you should see a preview there.
