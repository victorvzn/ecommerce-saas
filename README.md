## Ecommerce Saas v0.1.0

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


**Tools installed:**

* Next.js 14

```bash
npx create-next-app@latest ecommerce-saas --typescript --tailwind --eslint
```

```bash
What is your project named? ecommerce-saas
Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like to use `src/` directory? No
Would you like to use App Router? (recommended) Yes
Would you like to customize the default import alias (@/*)? Yes
What import alias would you like configured? @/*

cd ecommerce-saas
npm run dev
```

* Shadcn/ui

```bash
npx shadcn-ui@latest init
```

```bash
shadcn-ui@0.8.0

✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Slate
✔ Would you like to use CSS variables for colors? ›`yes
```

* clerk/nextjs

```bash
npm install @clerk/nextjs
```

* Add provider
* Add middleware.ts
* Add sign-up and sign-in routes
* Add main layout to (routes)