export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-section-gap border-t border-secondary-container text-primary font-body-md text-body-md mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-8 md:space-y-0">
        <div className="font-headline-md text-headline-md font-bold text-on-surface">
          FREE AUTOS
        </div>
        <div className="flex flex-wrap justify-center gap-6 font-label-sm text-label-sm">
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Showroom</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Trade-in Portal</a>
        </div>
        <div className="text-on-surface-variant font-label-sm text-label-sm">
          © 2024 FREE AUTOS. PRECISION ENGINEERING.
        </div>
      </div>
    </footer>
  );
}