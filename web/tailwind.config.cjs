/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

const some = {
  xs: ["0.75rem", { lineHeight: "1rem" }],
  sm: ["0.875rem", { lineHeight: "1.25rem" }],
  base: ["1rem", { lineHeight: "1.5rem" }],
  lg: ["1.125rem", { lineHeight: "1.75rem" }],
  xl: ["1.25rem", { lineHeight: "1.75rem" }],
  "2xl": ["1.5rem", { lineHeight: "2rem" }],
  "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
  "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
  "5xl": ["3rem", { lineHeight: "1" }],
  "6xl": ["3.75rem", { lineHeight: "1" }],
  "7xl": ["4.5rem", { lineHeight: "1" }],
  "8xl": ["6rem", { lineHeight: "1" }],
  "9xl": ["8rem", { lineHeight: "1" }],
  "10xl": ["10rem", { lineHeight: "1" }],
  "11xl": ["12rem", { lineHeight: "1" }],
}

// const additionalFontSizes = [
//   { "10xl": ["10rem", { lineHeight: "1" }] },
//   { "11xl": ["12rem", { lineHeight: "1" }] },
// ]

const newOne = []

const arr = Array.from(Object.entries(some), (value, key) => value)
console.log("🚀 ~ Object.entries ~ arr.length", arr.length)
// additionalFontSizes.forEach((value) => arr.push(value))

console.log("🚀 ~ arr", arr)

Object.entries(some).map(([key, value], index) => {
  // console.log("🚀 ~ Object.entries ~ key", key)
  // console.log("🚀 ~ Obje`ct.entries ~ value", value)

  // newOne.push([arr[index][0], arr[index][1]])

  const step = 2

  if (index + 1 + step <= arr.length) {
    console.log("🚀 ~ Object.entries ~ index", index)
    console.log("🚀 ~ Object.entries ~ index + 2", index + 2)
    newOne.push([arr[index][0], arr[index + step][1]])
  }
})

const fontSize = Object.fromEntries(newOne)
console.log("🚀 ~ fontSize", fontSize)

// console.log("🚀 ~ arr", arr)
console.log("🚀 ~ newOne", newOne)

// console.log(Array.from([1, 2, 3], (x) => x + x))

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },

  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/layouts/**/*.tsx",
    "./src/lib/**/*.tsx",
    "./data/**/*.mdx",
  ],

  darkMode: "class",

  theme: {
    extend: {
      spacing: {
        "9/16": "56.25%",
      },

      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },

      fontFamily: {
        sans: ["var(--font-custom)", ...defaultTheme.fontFamily.sans],
      },

      // some: {
      //   xs: ["0.75rem", { lineHeight: "1rem" }],
      //   sm: ["0.875rem", { lineHeight: "1.25rem" }],
      //   base: ["1rem", { lineHeight: "1.5rem" }],
      //   lg: ["1.125rem", { lineHeight: "1.75rem" }],
      //   xl: ["1.25rem", { lineHeight: "1.75rem" }],
      //   "2xl": ["1.5rem", { lineHeight: "2rem" }],
      //   "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      //   "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      //   "5xl": ["3rem", { lineHeight: "1" }],
      //   "6xl": ["3.75rem", { lineHeight: "1" }],
      //   "7xl": ["4.5rem", { lineHeight: "1" }],
      //   "8xl": ["6rem", { lineHeight: "1" }],
      //   "9xl": ["8rem", { lineHeight: "1" }],
      // },

      // fontSize: {
      //   xs: ["0.75rem", { lineHeight: "1rem" }],
      //   sm: ["0.875rem", { lineHeight: "1.25rem" }],
      //   base: ["1rem", { lineHeight: "1.5rem" }],
      //   lg: ["1.125rem", { lineHeight: "1.75rem" }],
      //   xl: ["1.25rem", { lineHeight: "1.75rem" }],
      //   "2xl": ["1.5rem", { lineHeight: "2rem" }],
      //   "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      //   "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      //   "5xl": ["3rem", { lineHeight: "1" }],
      //   "6xl": ["3.75rem", { lineHeight: "1" }],
      //   "7xl": ["4.5rem", { lineHeight: "1" }],
      //   "8xl": ["6rem", { lineHeight: "1" }],
      //   "9xl": ["8rem", { lineHeight: "1" }],
      // },

      fontSize,
      colors: {
        primary: colors.orange,
        gray: colors.slate,
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),

            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: `${theme("colors.primary.600")} !important`,
              },
              code: { color: theme("colors.primary.400") },
            },

            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },

            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },

            h3: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },

            "h4,h5,h6": {
              color: theme("colors.gray.900"),
            },

            pre: {
              backgroundColor: theme("colors.gray.800"),
            },

            code: {
              color: theme("colors.pink.500"),
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },

            "code::before": {
              content: "none",
            },

            "code::after": {
              content: "none",
            },

            details: {
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },

            hr: { borderColor: theme("colors.gray.200") },

            "ol li::marker": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },

            "ul li::marker": {
              backgroundColor: theme("colors.gray.500"),
            },
            strong: { color: theme("colors.gray.600") },

            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },

        dark: {
          css: {
            color: theme("colors.gray.300"),

            a: {
              color: theme("colors.primary.500"),
              "&:hover": {
                color: `${theme("colors.primary.400")} !important`,
              },
              code: { color: theme("colors.primary.400") },
            },

            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },

            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },

            h3: {
              fontWeight: "600",
              color: theme("colors.gray.100"),
            },

            "h4,h5,h6": {
              color: theme("colors.gray.100"),
            },

            pre: {
              backgroundColor: theme("colors.gray.800"),
            },

            code: {
              backgroundColor: theme("colors.gray.800"),
            },

            details: {
              backgroundColor: theme("colors.gray.800"),
            },

            hr: { borderColor: theme("colors.gray.700") },

            "ol li::marker": {
              fontWeight: "600",
              color: theme("colors.gray.400"),
            },

            "ul li::marker": {
              backgroundColor: theme("colors.gray.400"),
            },

            strong: { color: theme("colors.gray.100") },

            thead: {
              th: {
                color: theme("colors.gray.100"),
              },
            },

            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },

            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.700"),
            },
          },
        },
      }),
    },
  },

  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
