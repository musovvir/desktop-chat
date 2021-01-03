import React from "react";
import { useSelector } from "react-redux";
import Avatar from "./Avatar";
import Communication from "./Communication";
import Social from "./Social";
import Media from "./Media";
import { useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./ProfileContact.css";

function ProfileContact() {
  const opened = useParams().id;
  const loading = useSelector((state) => state.contacts.loading);
  const openProfile = useSelector((state) => state.application.openProfile);

  const profile = useSelector((state) =>
    state.contacts.contacts.find((contact) => {
      return opened === contact._id;
    })
  );

  if (loading || !opened) {
    return null;
  }

  return (
    <CSSTransition in={openProfile} timeout={1100} unmountOnExit>
      <div className="profile-contact">
        <div className="profile-block">
          <Avatar size={"large"} fullname={profile?.fullname[0]} />
          <div className="name-profile">{profile?.fullname}</div>
          <div className="username">@{profile?.username}</div>
          <Communication />
          <Social socials={profile?.socials} />
          <Media fileName="Desktop-chat.pdf" />
        </div>
      </div>
    </CSSTransition>
  );
}

export default ProfileContact;
