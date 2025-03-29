import React from "react";
import Card from "./Card/Card";
import "./CardList.css";

function CardList({ posts }) {
  return (
    <div className="card-list">
      {posts.map((post) => (
        <Card
          key={post.id}
          image={post.image}
          titre={post.titre}
          description={post.description}
        />
      ))}
    </div>
  );
}

export default CardList;