import { RichText } from "prismic-reactjs";
import "./image.scss";

const UIImage = ({
  mobileImage,
  tabletImage,
  desktopImage,
  caption,
  ...props
}) => (
  <figure {...props}>
    <picture style={{ display: "block" }}>
      {mobileImage && (
        <source
          media="(max-width: 400px)"
          srcSet={mobileImage.url}
          width={mobileImage.dimensions.width}
          height={mobileImage.dimensions.height}
        />
      )}
      {tabletImage && (
        <source
          media="(max-width: 700px)"
          srcSet={tabletImage.url}
          width={tabletImage.dimensions.width}
          height={tabletImage.dimensions.height}
        />
      )}
      <source srcSet={desktopImage.url} />
      <img className="image" src={desktopImage.url} alt="" />
    </picture>
    {caption && (
      <figcaption className="image__caption">
        {RichText.render(caption)}
      </figcaption>
    )}
  </figure>
);

export default UIImage;
