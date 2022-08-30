import React from "react";
import GroupLink from "../../../interface/HeaderLinkType";

export default function Elements() {
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
      {
        id: 4,
        tittle: "Scrolling Text",
      },
      {
        id: 5,
        tittle: "Split Line Heading",
      },
      {
        id: 6,
        tittle: "Highlighted Text",
      },
      {
        id: 7,
        tittle: "Custom Type",
      },
      {
        id: 8,
        tittle: "Dropcap",
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
  const InfographicIconG: GroupLink = {
    tittle: "Infographic/Icon",
    childLinks: [
      {
        id: 0,
        tittle: "Icons",
      },
      {
        id: 1,
        tittle: "Icon List",
      },
      {
        id: 2,
        tittle: "Progress Bars",
      },
      {
        id: 3,
        tittle: "Interactive Map",
      },
    ],
  };
  const GeneralG: GroupLink = {
    tittle: "General Content",
    childLinks: [
      {
        id: 0,
        tittle: "Buttons",
      },
      {
        id: 1,
        tittle: "Carousel",
      },
      {
        id: 2,
        tittle: "Circle ImagesNew",
      },
      {
        id: 3,
        tittle: "Team Member",
      },
      {
        id: 4,
        tittle: "Testimonial Slider",
      },
      {
        id: 5,
        tittle: "Single Testimonial",
      },
      {
        id: 6,
        tittle: "Tabbed Section",
      },
      {
        id: 7,
        tittle: "Toggle Panels",
      },
      {
        id: 8,
        tittle: "Fancy Unordered List",
      },
      {
        id: 9,
        tittle: "Pricing Table",
      },
      {
        id: 10,
        tittle: "Social Sharing",
      },
      {
        id: 11,
        tittle: "Milestone",
      },
      {
        id: 12,
        tittle: "Clients",
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
              "url(https://themenectar.com/salient/wp-content/uploads/sites/4/2022/08/elements-2.jpg)",
          }}
        ></li>
        <li>
          <ul className="elements-drop-links">
            <h6>{MediaG.tittle}</h6>
            {MediaG.childLinks.map((M) => (
              <li key={M.id}>
                <a href="">{M.tittle}</a>{" "}
              </li>
            ))}
            <h6>{QueryG.tittle}</h6>
            {QueryG.childLinks.map((M) => (
              <li key={M.id}>
                <a href="">{M.tittle}</a>{" "}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className="elements-drop-links">
            <h6>{StructureG.tittle}</h6>
            {StructureG.childLinks.map((M) => (
              <li key={M.id}>
                <a href="">{M.tittle}</a>{" "}
              </li>
            ))}
            <h6>{TypographyG.tittle}</h6>
            {TypographyG.childLinks.map((M) => (
              <li key={M.id}>
                <a href="">{M.tittle}</a>{" "}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className="elements-drop-links">
            <h6>{InteractiveG.tittle}</h6>
            {InteractiveG.childLinks.map((M) => (
              <li key={M.id}>
                <a href="">{M.tittle}</a>{" "}
              </li>
            ))}
            <h6>{InfographicIconG.tittle}</h6>
            {InfographicIconG.childLinks.map((M) => (
              <li key={M.id}>
                <a href="">{M.tittle}</a>{" "}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <ul className="elements-drop-links">
            <h6>{GeneralG.tittle}</h6>
            {GeneralG.childLinks.map((M) => (
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
