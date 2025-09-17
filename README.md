
#  Quick Guide

1. **Clone this repo & enter folder**

   ```bash
   git clone https://github.com/your-username/react-ghpages-simple.git
   cd react-ghpages-simple
   ```

2. **Install dependencies** (first time only):

   ```bash
   npm install
   ```

3. **Write React components** inside the `src/` folder (e.g., `App.jsx`, `Button.jsx`).

4. **Build project** (compile JSX → JS):

   ```bash
   npm run build
   ```

   → Outputs files into `dist/`.

5. **Link compiled files** in `index.html`:

   ```html
   <script src="dist/App.js"></script>
   <script src="dist/index.js"></script>
   <!-- add more if new components are created -->
   ```

6. **Push to GitHub** with at least:

   * `index.html`
   * `dist/` folder
   * (optionally `src/`, `.babelrc`, `package.json`)

7. **Enable GitHub Pages** in repo settings → branch: `main`, folder: `/ (root)`.

8. 🎉 Your app will be live at:

   ```
   https://username.github.io/repo-name/
   ```

---

👉 Rule of thumb: **Every new file in `src/` must be built (`npm run build`) and linked in `index.html` before pushing to GitHub.**

---

Do you want me to write this in a **ready-made `README.md` format** so you can directly include it in your template repo?
