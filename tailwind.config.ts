
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
				'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
				'base': ['1rem', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
				'lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
				'xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.015em' }],
				'2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.02em' }],
				'3xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
				'4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.025em' }],
				'5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
				'6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
				'7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
				'8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
			},
			lineHeight: {
				'tight': '1.2',
				'snug': '1.375',
				'normal': '1.5',
				'relaxed': '1.7',
				'loose': '2',
			},
			letterSpacing: {
				'tighter': '-0.05em',
				'tight': '-0.025em',
				'normal': '-0.01em',
				'wide': '0.025em',
				'wider': '0.05em',
				'widest': '0.1em',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
			},
			backgroundImage: {
				'grid-slate-100': 'linear-gradient(90deg, rgba(203, 213, 224, 0.3) 1px, transparent 1px), linear-gradient(rgba(203, 213, 224, 0.3) 1px, transparent 1px)',
			},
			backgroundSize: {
				'grid-slate-100': '50px 50px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
