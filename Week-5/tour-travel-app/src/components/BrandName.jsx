// components/BrandName.jsx
// This is a tiny component just to show props drilling!
function BrandName({ companyName }) {
  return <span className="brand-highlight">{companyName}</span>;
}
export default BrandName;
