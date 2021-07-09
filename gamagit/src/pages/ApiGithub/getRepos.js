// Copyright 2021 Franklin Siqueira
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ------------------------------------------------------------------------
//
//// Gama Academy | Hiring Coders | [HC] Módulo 07 | React
//
// ------------------------------------------------------------------------
//  pages/ApiGithub/getRepos.js
// ------------------------------------------------------------------------
/** Imports */
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import * as S from "./style/style";
/** */
export default function GetRepos() {
  const navHistory = useHistory();
  const [repos, setRepos] = useState([]);
  const [repoUser, setRepoUser] = useState();
  useEffect(() => {
    // const repoNames = localStorage.getItem('repoName');
    let repoUser = localStorage.getItem("repoUser");
    let repoNames = localStorage.getItem("repoNames");
    if (repoNames != null) {
      //   repoUser = JSON.parse(repoUser);
      setRepoUser(repoUser.toUpperCase());
      repoNames = JSON.parse(repoNames);
      setRepos(repoNames);
      //   console.log(repoUser);
      localStorage.clear();
    } else {
      //...
      navHistory.push("/gitrepos");
    }
  }, []);
  //
  return (
    <Fragment>
      <S.Conteiner>
        <S.Title>Repositories ({repoUser})</S.Title>
        <S.List>
          {repos.map((singleRepoName, key) => {
            return <S.ListItem>Repository: {singleRepoName}</S.ListItem>;
          })}
        </S.List>
        <S.LinkToLast to="/gitrepos">Back...</S.LinkToLast>
      </S.Conteiner>
    </Fragment>
  );
}
