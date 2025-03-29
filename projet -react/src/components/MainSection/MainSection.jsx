import React from "react";
import ProfileSection from "./ProfileSection/ProfileSection";
import CardList from "./CardList/CardList";
import { profile, posts } from "../../Donnee";
import "./MainSection.css";

function MainSection() {
  return (
    <main className="main">
      <ProfileSection profile={profile} />
      <CardList posts={posts} />
    </main>
  );
}

export default MainSection;