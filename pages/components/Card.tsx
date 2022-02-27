import React from "react";
import Image from "next/image";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Card({
  title,
  itemId,
  image,
}: {
  title: string;
  itemId: string;
  image: string;
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      role="button"
      style={{
        border: "1px solid",
        display: "inline-block",
        margin: "0 10px",
        width: "90vw",
        height: "99vh",
        userSelect: "none",
      }}
      tabIndex={0}
      className="card"
    >
      <div>
        <div
          className="art"
          style={{
            height: "99vh",
            backgroundImage: `url(/${image})`,
            backgroundSize: "cover",
          }}
        >
          <div className="art-content">
            <div>{title}</div>
            <div style={{ backgroundColor: visible ? "transparent" : "gray" }}>
              visible: {JSON.stringify(visible)}
            </div>

            <h2 className="art-title">PAZ</h2>
            <p className="art-body">
              lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
            <a href="#" className="art-button">
              Thats a bigger
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
