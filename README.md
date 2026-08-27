# User Directory

A modern and responsive User Directory built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

The application fetches user data from the **JSONPlaceholder REST API** and displays users in a clean, responsive card-based interface. Users can also open an individual user details page to view additional information such as contact details, address, and company information.

---

## 🚀 Features

- Fetch users from JSONPlaceholder API
- Display users in responsive cards
- View individual user details
- Dynamic user routes using Next.js App Router
- Loading state with animated spinner
- Error state when API request fails
- Responsive design for mobile, tablet, and desktop
- Type-safe data handling with TypeScript
- Clean and modern dark UI
- Responsive grid layout
- Accessible navigation between pages

---

## 🛠️ Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **JSONPlaceholder API**
- **Fetch API**

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   │
│   └── users/
│       └── [id]/
│           └── page.tsx
│
├── types/
│   └── user.types.ts
│
└── ...