![Basic UI logo](./public/logo.svg)

# Getting started

First, install the component library.

```sh
npm install @sigveh/basic-ui
```

## Usage

Import the styles in the entry file. Eg `main.ts`.

```ts{3}
// main.ts
import { createApp } from 'vue'
import '@sigveh/basic-ui/dist/style.css'

const app = createApp()
// ...
```

### Local imports

Import only the components you need, where you need them.

```vue{2,10-14}
<script setup lang="ts">
import { Button, Input, Form } from '@sigveh/basic-ui'

function handleSubmit(event: SubmitEvent): void {
  // ...
}
</script>

<template>
  <Form @submit="handleSubmit">
    <Input label="Name" placeholder="John Doe" />
    <Input label="E-mail" placeholder="john@doe.com" />
    <Button type="submit">Submit</Button>
  </Form>
</template>
```

### Global installation

You can also install all components globally if absolutely necessary, but it is not recommended as you lose the tree-shakeability of the library.

```ts{4,7}
// main.ts
import { createApp } from 'vue'
import '@sigveh/basic-ui/dist/style.css'
import BasicUI from '@sigveh/basic-ui'

const app = createApp()
app.use(BasicUI)
// ...
```
