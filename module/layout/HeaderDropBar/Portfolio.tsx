import React from "react";
import GroupLink from "../../../interface/HeaderLinkType";

export default function Portfolio() {
  const MediaG: GroupLink = {
    tittle: "Media",
    childLinks: [
      { id: 0, tittle: "Inline Image Text", color: "blue" },
      { id: 1, tittle: "Video Lightbox" },
      { id: 2, tittle: "Video Player" },
      {
        id: 3,
        tittle: "Nectar Slider",
      },
      {
        id: 4,
        tittle: "Animated Image",
      },
      {
        id: 5,
        tittle: "Image CascadeHot",
        color: "red",
      },
      {
        id: 6,
        tittle: "Image Grid",
      },
      {
        id: 7,
        tittle: "Image Carousel",
      },
    ],
  };
  const QueryG: GroupLink = {
    tittle: "Query",
    childLinks: [
      {
        id: 1,
        tittle: "Post GridHot",
        color: "red",
      },
      {
        id: 2,
        tittle: "Category Grid",
      },
      {
        id: 3,
        tittle: "Recent Posts",
      },
      {
        id: 4,
        tittle: "Global SectionNew",
      },
    ],
  };
  const StructureG: GroupLink = {
    tittle: "Structure",
    childLinks: [
      {
        id: 0,
        tittle: "Columns",
      },
      {
        id: 1,
        tittle: "Horizontal List Item",
      },
      {
        id: 2,
        tittle: "Shape Divider",
      },
      {
        id: 3,
        tittle: "Page Submenu",
      },
    ],
  };

  const TypographyG: GroupLink = {
    tittle: "Typography",
    childLinks: [
      {
        id: 0,
        tittle: "Rotating WordsNew",
        color: "blue",
      },
      {
        id: 2,
        tittle: "Animated Title",
      },
      {
        id: 3,
        tittle: "Gradient Text",
      },
    ],
  };
  const InteractiveG: GroupLink = {
    tittle: "Typography",
    childLinks: [
      {
        id: 0,
        tittle: "Lottie AnimationNew",
        color: "blue",
      },
      {
        id: 2,
        tittle: "Call to Action",
      },
      {
        id: 3,
        tittle: "Fancy Box",
      },
      {
        id: 4,
        tittle: "Flip Box",
      },
      {
        id: 5,
        tittle: "Image Comparison",
      },
      {
        id: 6,
        tittle: "Image Hotspots",
      },
      {
        id: 7,
        tittle: "Morphing Outline",
      },
      {
        id: 8,
        tittle: "Mouse Parallax",
      },
    ],
  };

  return (
    <div className="elements-drop drop">
      <ul className="container">
        <li
          className="img-left"
          style={{
            backgroundImage:
              "url(https://themenectar.com/salient/wp-content/uploads/sites/4/2021/05/adomas-aleno-4vrZpOo7fTc-unsplash-1024x683.jpg)",
          }}
        >
          <div className="font-layer">
            <h3>Portfolio</h3>
            <p>
              Unmatched creative freedom for portfolios. With Salient, you can
              showcase your projects and get them the attention they deserve.
            </p>
          </div>
        </li>
        <li>
          <ul className="elements-drop-links">
            <p>{MediaG.tittle}</p>
            {MediaG.childLinks.map((M) => (
              <li key={M.id}>
                <a href="">{M.tittle}</a>{" "}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className="elements-drop-links">
            <p>{StructureG.tittle}</p>
            {StructureG.childLinks.map((M) => (
              <li key={M.id}>
                <a href="">{M.tittle}</a>{" "}
              </li>
            ))}
            <p>{TypographyG.tittle}</p>
            {TypographyG.childLinks.map((M) => (
              <li key={M.id}>
                <a href="">{M.tittle}</a>{" "}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className="elements-drop-links">
            <p>{InteractiveG.tittle}</p>
            {InteractiveG.childLinks.map((M) => (
              <li key={M.id}>
                <a href="">{M.tittle}</a>{" "}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
