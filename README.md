# fiUI

A small Preact component library for my pet projects. Monospace (IBM Plex Mono),
warm off-white surfaces, dark-red accent — derived from the `imgcr.sh` / `imgvw.sh`
design system.

## Install

It's consumed straight from source, so the peer deps must be present in the app:

```bash
bun add preact @preact/signals
```

Point at the repo (git dependency, workspace, or local path) and import the theme
once at your app root, then use components anywhere:

```tsx
import 'fiui/theme.css';
import { Button, DropZone, SegmentedControl } from 'fiui';

export function App() {
  return <Button variant="primary">download all (.zip)</Button>;
}
```

`fiui/theme.css` defines every design token as a CSS custom property on `:root`.
Override a token in your own stylesheet to re-skin the whole library:

```css
:root {
  --fi-accent: #2f6f4f;
  --fi-accent-hover: #245740;
}
```

## Components

| Group      | Components                                              |
| ---------- | ------------------------------------------------------- |
| Foundation | `Text`, `Panel`                                         |
| Actions    | `Button`, `Link`, `SegmentedControl`                    |
| Inputs     | `TextField`, `Select`, `Menu`, `DropZone`               |
| Data       | `DataTable`, `KeyValueList`, `ProgressBar`, `Placeholder` |
| Feedback   | `Badge`, `Spinner`, `Kbd`                               |
| Chrome     | `MenuBar`, `Toolbar`, `StatusBar`                       |

Every component is typed and takes a `class` prop for one-off overrides. Interactive
components (`SegmentedControl`, `Select`, `DropZone`) are controlled.

## Storybook

Every component has stories, plus foundation pages for colors and typography and an
`App Chrome` pattern composing the pieces into a full window.

```bash
bun run storybook        # dev server on :6006
bun run build-storybook  # static build into storybook-static/
```

## Scripts

```bash
bun run typecheck        # tsc --noEmit
bun run lint             # eslint
bun run format           # prettier --write
```
