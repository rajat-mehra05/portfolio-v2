import Container from 'components/Container';
import VaultCard from 'components/VaultCard';

const vaultTools = [
  {
    title: 'Superwhisper',
    description: 'AI-powered voice-to-text. Write 3x faster without lifting a finger.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=450&fit=crop',
    link: 'https://superwhisper.com'
  },
  {
    title: 'Seline',
    description: 'Simple and privacy-focused web analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    link: 'https://seline.so'
  },
  {
    title: 'Mobbin',
    description: 'UI inspiration library for web and mobile apps.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop',
    link: 'https://mobbin.com'
  },
  {
    title: 'Nicelydone',
    description: 'Web UI inspiration library with great AI search.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop',
    link: 'https://nicelydone.club'
  },
  {
    title: 'Ghostty',
    description: 'A fast terminal emulator for macOS.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=450&fit=crop',
    link: 'https://ghostty.org'
  },
  {
    title: 'Zen Browser',
    description: 'A sleek, firefox-based browser.',
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&h=450&fit=crop',
    link: 'https://zen-browser.app'
  },
  {
    title: 'Yaak',
    description: 'A local-first API client.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
    link: 'https://yaak.app'
  },
  {
    title: 'WorkOS',
    description: 'Easily add authentication and authorization to your app.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop',
    link: 'https://workos.com'
  },
  {
    title: 'Resend',
    description: 'Email for developers.',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&h=450&fit=crop',
    link: 'https://resend.com'
  },
  {
    title: 'Cursor',
    description: 'Fast, AI-powered code editor.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=450&fit=crop',
    link: 'https://cursor.com'
  },
  {
    title: 'Screen Studio',
    description: 'Create beautiful screen recordings.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop',
    link: 'https://www.screen.studio'
  },
  {
    title: 'Claude',
    description: 'My favorite LLM for programming and idea generation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    link: 'https://claude.ai'
  },
  {
    title: 'Superhuman',
    description: 'The fastest and prettiest email client.',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&h=450&fit=crop',
    link: 'https://superhuman.com'
  },
  {
    title: 'Raycast',
    description: 'The best Mac productivity tool.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=450&fit=crop',
    link: 'https://raycast.com'
  }
];

export default function Vault() {
  return (
    <Container
      title="Vault – Rajat Mehra"
      description="Links to valuable tools and resources I've come across."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Useful Tools
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Links to valuable tools and resources I've stumbled upon.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
          {vaultTools.map((tool, index) => (
            <VaultCard key={index} {...tool} />
          ))}
        </div>
      </div>
    </Container>
  );
}

