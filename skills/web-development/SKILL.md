---
name: web-development
description: Develop high-performance, robust, and clean web applications using React, TypeScript, Tailwind CSS (v4), and Vite. Use this skill when the user asks to build web components, write custom hooks, manage application state, handle API integrations, optimize frontend performance, or implement routing. Generates structured, production-ready, clean, and highly secure code.
license: Complete terms in LICENSE.txt
---

This skill guides the creation of production-ready, highly-performant, and maintainable web applications. Implement robust code architectures, modern state management, and type-safe systems with exceptional attention to code quality, clean code principles, and best practices.

The user provides web development requirements: a component, a full page, a custom hook, an API integration, state management, or setting up routing. They may include context about performance constraints, libraries to use, or backend APIs.

## Architectural & Technical Thinking

Before writing any code, design a robust architectural direction:
- **Modular & Component-Driven**: Break down the feature into small, reusable, and single-responsibility components. Design clear component hierarchies.
- **Type Safety**: Maintain strict TypeScript typing. Provide comprehensive type and interface definitions for all props, states, and API responses. Avoid using `any` or disabling type checks.
- **State & Logic Separation**: Separate UI presentation from business logic. Keep components clean by offloading state orchestration, calculations, and data fetching to custom React hooks.
- **Modern Stack Optimization**: Maximize the potential of React 19, Tailwind CSS v4, and Vite. Utilize modern APIs like `use`, transition hooks, Tailwind v4 CSS-first configuration, and native ESM.
- **Performance & Loading States**: Design with performance in mind. Optimize rendering, avoid unnecessary re-renders (using `useMemo` and `useCallback` appropriately), and provide outstanding UX with skeleton loading screens, smooth transitions, and error boundaries.

## Web Development Guidelines

Focus on:
- **Component Engineering**: Write clean, standard-compliant JSX/TSX. Ensure clean, well-documented TypeScript props. Use semantic HTML5 elements (`<article>`, `<section>`, `<nav>`, `<header>`, `<footerSearchParams>`, etc.) to improve structure and SEO.
- **TypeScript Excellence**: Leverage TypeScript to catch errors at compile-time. Use generics where applicable for reusable utilities or hooks. Ensure explicit return types for complex functions.
- **Tailwind CSS v4 Best Practices**: Leverage modern Tailwind CSS v4 features. Avoid cluttered CSS declarations. Combine classes cleanly with helper functions like `clsx` and `tailwind-merge` (e.g., using a custom `cn` utility) for dynamic, conditional styles.
- **State Management & Data Flow**: Maintain a clean state flow. Lift state up when necessary, or utilize Context API or lightweight state libraries for global state. Implement robust error handling, caching, and loading state representations during async requests.
- **UX & Motion Integration**: Integrate high-quality motion effects using Framer Motion or CSS animations where appropriate, ensuring they enhance usability rather than distract from it.
- **Accessibility (a11y) & SEO**: Build interfaces that are fully accessible. Ensure keyboard navigability, correct ARIA attributes where needed, focus ring indicators for active elements, and semantic SEO titles and descriptions.

NEVER write messy, unorganized, or poorly typed code. Avoid bloated components that mix business logic with layout structures. Never ignore TypeScript errors or resort to quick workarounds like `@ts-ignore` or `any` without strong justification.

**IMPORTANT**: Match technical complexity to the application scale. Avoid over-engineering small components, but do not compromise on security, performance, or clean architecture for larger web applications. Code elegance comes from simplicity, readability, and robust engineering.

Remember: Gemini is capable of extraordinary engineering work. Don't hold back, show what can truly be created when thinking outside the box, writing flawless code, and committing fully to technical excellence.
