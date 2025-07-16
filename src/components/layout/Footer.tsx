export default function Footer() {
  return (
    <footer className="py-8 px-12 md:px-16 lg:px-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © 2025 Ultra, Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://useultra.ai/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="https://useultra.ai/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://discord.gg/nwxDvHrQS2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}
