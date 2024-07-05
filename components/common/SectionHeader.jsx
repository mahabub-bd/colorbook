const SectionHeader = ({ subtitle, title }) => (
  <div className="section-title text-center my-20">
    <span className="sub-title mb-10">{subtitle}</span>
    <h2 className="py-10">{title}</h2>
  </div>
);

export default SectionHeader;
