const Logo = ({ imgSource, altImg, imgWidth, position, top, left }) => {
  return (
    <>
      <img
        src={imgSource}
        alt={altImg}
        width={imgWidth}
        style={{ position: position, top: top, left: left }}
      />
    </>
  );
};
export default Logo;
