/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
		
      keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				
			},
			
		
    },
	
  },
  plugins: [
    
  ],
}

