# Unicode Encoder/Decoder Web

A blazingly fast and intuitive Unicode encoder/decoder web application built with SolidJS.

## Features

- **Encode & Decode**: Convert text to Unicode escape sequences and vice versa
- **Multiple Formats**: Support for various escape formats:
  - `\uXXXX` - JavaScript/JSON style
  - `\UXXXXXXXX` - Extended Unicode (for characters beyond BMP)
  - `U+XXXX` - Unicode code point notation
  - `&#xXXXX;` - HTML hex entities
  - `&#NNNNN;` - HTML decimal entities
  - `%XX` - URL encoding
- **Flexible Options**:
  - Preserve ASCII characters (don't escape printable ASCII)
  - Preserve Latin-1 characters (don't escape extended Latin)
  - Uppercase/lowercase hex digits
- **Real-time Conversion**: Instant encoding/decoding as you type
- **Dark Mode**: Eye-friendly dark theme support
- **Internationalization**: English and Korean language support
- **Statistics**: Character count and Unicode code point count

## Tech Stack

- [SolidJS](https://www.solidjs.com/) - Reactive UI framework with fine-grained reactivity
- [Vite](https://vitejs.dev/) - Next-generation frontend build tool
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [unicode-escaper](https://www.npmjs.com/package/unicode-escaper) - Unicode escape/unescape library by [Jeong Min Cho](https://github.com/Jeong-Min-Cho/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Jeong-Min-Cho/unicode-encoder-decoder-web.git

# Navigate to project directory
cd unicode-encoder-decoder-web

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Select Mode**: Choose between "Encode" (text to Unicode) or "Decode" (Unicode to text)
2. **Choose Format**: Select your preferred escape format (available in Encode mode)
3. **Configure Options**: Toggle ASCII/Latin-1 preservation and case preferences
4. **Enter Text**: Type or paste your text in the input area
5. **Copy Result**: Click the copy button to copy the converted output

## License

MIT

## Author

[Jeong Min Cho](https://github.com/Jeong-Min-Cho/)
