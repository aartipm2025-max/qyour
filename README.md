# QYOUR

An e-commerce website for **QYOUR**, a diabetes-management supplement for the Indian market. It's built with Next.js 14 (App Router), TypeScript and Tailwind CSS, and it uses AI features powered by Groq (Llama 3.3 70B).

📄 **[Read the full project info (PDF)](./PROJECT%20INFO.pdf)** · 🏗️ **[Architecture](./ARCHITECTURE.md)**

## Features

- **Product and subscription plans**: Monthly (₹699), Quarterly (₹1,799) and Annual (₹6,299), plus a cart and a checkout flow
- **AI health quiz** (`/quiz`): builds a personalised plan with dosage, an HbA1c timeline, Indian diet tips and exercise tips
- **AI chat assistant**: a floating chatbot on every page
- **Dashboard** (`/dashboard`): progress charts (Chart.js) and AI-generated insights
- **Doctor booking** (`/doctor-booking`)
- **Content pages**: About, How It Works, Clinical Study, Blog, FAQ and Contact
- **Legal pages**: Privacy, Terms and Refund policy

## Tech stack

| Area      | Tools                                               |
| --------- | --------------------------------------------------- |
| Framework | Next.js 14 (App Router), React 18, TypeScript       |
| Styling   | Tailwind CSS, tailwindcss-animate, Radix UI, Lucide |
| Forms     | react-hook-form + zod                               |
| Charts    | chart.js + react-chartjs-2                          |
| AI        | Groq API (`llama-3.3-70b-versatile`)                |
| State     | React Context (cart)                                |

## Getting started

### Prerequisites

- Node.js 18 or later
- A free Groq API key from [console.groq.com](https://console.groq.com/)

### Setup

```bash
git clone https://github.com/aartipm2025-max/qyour.git
cd qyour
npm install
```

Create a `.env.local` file in the project root:

```env
# Required: powers the AI quiz, chatbot and dashboard insights
GROQ_API_KEY=your_groq_api_key

# Optional: payments run in demo mode without these
# RAZORPAY_KEY_ID=
# RAZORPAY_KEY_SECRET=
```

Start the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Start the dev server          |
| `npm run build` | Build for production          |
| `npm run start` | Run the production build      |
| `npm run lint`  | Run ESLint                    |

## Project structure

```
app/
  api/
    chat/       # AI chatbot endpoint
    insight/    # AI dashboard insights endpoint
    quiz/       # AI personalised-plan endpoint
  cart/  checkout/  dashboard/  doctor-booking/  product/  quiz/
  about/  blog/  clinical-study/  contact/  faq/  how-it-works/
  privacy/  refund/  terms/
  layout.tsx  page.tsx  globals.css
components/
  chat/         # FloatingChat
  layout/       # Navbar, Footer
  product/      # AddToCartButton
  ui/           # Toaster
context/        # CartContext
lib/            # plans.ts (pricing), utils.ts
```

## API routes

| Route          | Method | Purpose                                                     |
| -------------- | ------ | ----------------------------------------------------------- |
| `/api/quiz`    | POST   | Turns quiz answers into a personalised plan (JSON)          |
| `/api/chat`    | POST   | Sends a message to the chat assistant and returns its reply |
| `/api/insight` | POST   | Generates insights for the dashboard                        |

All three routes call Groq on the server, so the API key never reaches the browser.

## Disclaimer

QYOUR's AI features give general wellness information only. They are not medical advice. Users should consult a qualified doctor before changing any diabetes treatment.

additional info

Quick summary: What and why?
How everything connects as a story: Next.js provides the application's foundation, TypeScript makes its code more reliable, Tailwind CSS creates its visual interface, and Groq runs the Llama model that provides intelligence. Together, they allow developers to build a complete AI-powered web application.
Important distinction: Groq is not the AI model; it provides the infrastructure to run the Llama model.
