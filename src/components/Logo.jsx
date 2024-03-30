const Logo = ({
  imgSource,
  altImg,
  imgWidth,
  position,
  top,
  left,
  styleClass,
}) => {
  return (
    <>
      <img
        src={imgSource}
        alt={altImg}
        width={imgWidth}
        style={{ position: position, top: top, left: left }}
        className={styleClass}
      />
    </>
  );
};
export default Logo;
