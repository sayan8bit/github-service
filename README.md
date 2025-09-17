# github-service

---

#  Quick Guide

1. **Install dependencies** (first time only):

   ```bash
   npm install
   ```

2. **Write React components** inside the `src/` folder (e.g., `App.jsx`, `Button.jsx`).

3. **Build project** (compile JSX → JS):

   ```bash
   npm run build
   ```

   → Outputs files into `dist/`.

4. **Link compiled files** in `index.html`:

   ```html
   <script src="dist/App.js"></script>
   <script src="dist/index.js"></script>
   <!-- add more if new components are created -->
   ```

5. **Push to GitHub** with at least:

   * `index.html`
   * `dist/` folder
   * (optionally `src/`, `.babelrc`, `package.json`)

6. **Enable GitHub Pages** in repo settings → branch: `main`, folder: `/ (root)`.

7. Your app will be live at:

   ```
   https://username.github.io/repo-name/
   ```

---

👉 Rule of thumb: **Every new file in `src/` must be built (`npm run build`) and linked in `index.html` before pushing to GitHub.**

---

