## Nuxt.js

Install dependencies:

```bash
npm install nuxt-sweetalert2
```

Add `nuxt-sweetalert2` to modules section of `nuxt.config.js`

```JavaScript
{
  modules: [
    'nuxt-sweetalert2'
  ]
}
```

Or pass in global options like this:

```JavaScript
{
  modules: [
    [
      'nuxt-sweetalert2',
      {
        confirmButtonColor: '#FFFFFF'
      }
    ]
  ]
}
```

### The documentation for sweetalert2, you can find [here](https://sweetalert2.github.io/).
