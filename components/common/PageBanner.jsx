import bannerImage from "https://res.cloudinary.com/mahabub-bd/image/upload/v1719147803/bg-page-title_wk7tvr.jpg";

const PageBanner = ({ pageName }) => {
  return (
    <section
      className="text-white pt-16 pb-20"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, .66), transparent), url(${bannerImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">{pageName}</h2>
          <nav aria-label="breadcrumb">
            <ol className="inline-flex items-center space-x-2 bg-red-500 py-1 px-4 rounded-md">
              <li className="text-white">Home</li>
              <li className="text-gray-200">/</li>
              <li aria-current="page" className="text-white">
                {pageName}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
