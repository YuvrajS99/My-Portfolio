export default function Footer() {
  return (
    <footer className="bg-navy-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-serif font-bold text-xl gradient-text mb-4 md:mb-0">
            Yuvraj Sanap
          </div>
          <div className="text-gray-400 text-center md:text-right">
            <p>&copy; 2024 Yuvraj Adinath Sanap. All rights reserved.</p>
            <p className="text-sm mt-1">
              Crafted with <i className="fas fa-heart text-gold-500"></i> and modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
