import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Results({ element, artwork }) {
  const { name } = useContext(UserContext);
  if (name === "") {
    window.history.pushState({}, "", "/"); // Change the URL without reloading the page
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent); // Dispatch a navigation event
  }
  return (
    <div>
      <p>
        <strong>{name}</strong>, your element is: {element}
      </p>
      {artwork ? (
        <div className="artwork">
          <h2>{artwork.title}</h2>
          <img src={artwork.primaryImage} alt={artwork.title} />
          <p>{artwork.artistDisplayName}</p>
          <p>{artwork.objectDate}</p>
        </div>
      ) : (
        <p>No artwork found.</p>
      )}
    </div>
  );
}
