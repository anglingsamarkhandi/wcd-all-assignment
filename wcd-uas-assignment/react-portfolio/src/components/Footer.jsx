const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div className="flex gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#proyek">Proyek</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/anglingsamarkhandi">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/anglingsmrkhnd23/">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/angling-samarkhandi-5043721a7/">
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="https://anglingsamarkhandi.medium.com/">
          <i className="ri-medium-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
