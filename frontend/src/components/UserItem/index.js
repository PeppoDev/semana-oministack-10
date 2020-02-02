import React from "react";

import "./styles.css";

function UserItem({ user }) {
  return (
    <li className="user-item">
      <header>
        <img src={user.avatar_url} alt={user.name ? user.name : user.login} />
        <div className="user-info">
          <strong>{user.name ? user.name : user.login}</strong>
          <span>{user.techs.join(", ")} </span>
        </div>
      </header>

      <p>{user.bio ? user.bio : "Bio não cadastrada"}</p>
      <a href={`https://github.com/${user.github_username}`}>
        Acessar perfil no GitHub
      </a>
    </li>
  );
}

export default UserItem;
