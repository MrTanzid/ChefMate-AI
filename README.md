# ChefMate AI 🧑‍🍳

An AI-powered kitchen companion that generates recipes based on your available ingredients.

## Features

- 🤖 AI-powered recipe generation
- 🥗 Dietary restriction support
- 🍳 Multiple cooking method options
- 🌙 Dark/Light mode
- 📱 Mobile responsive design

## Live Demo

Visit [ChefMate AI](https://chefmate-ai.netlify.app)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/chefmate-ai.git
cd chefmate-ai
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your Google AI API key:
```env
VITE_GOOGLE_AI_API_KEY=your_google_ai_api_key
```

4. Start the development server:
```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| VITE_GOOGLE_AI_API_KEY | Google AI API key for recipe generation | Yes |

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Google AI API
- Lucide Icons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

MrTanzid - [@sp_mrt](https://t.me/sp_mrt)

## Acknowledgments

- [Google AI](https://ai.google.dev/) for the recipe generation API
- [Lucide](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling system