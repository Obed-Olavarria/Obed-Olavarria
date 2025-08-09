// src/components/footer/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-center py-6 mt-12">
      <p>© {new Date().getFullYear()} ObedDev. Todos los derechos reservados.</p>
      <p className="mt-2 italic">"El código bien hecho es arte en acción."</p>
    </footer>
  );
};

export default Footer;
