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
//  pages/ApiGithub/index.js
// ------------------------------------------------------------------------
/** Imports (requirements) */
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Fragment } from "react";
/** Imports (App) */
import IntroText from "../../components/intro";
import * as S from "./style/style";
//
export default function GitRepos(params) {
  const ErrorMessage = 'Sorry! No such Dev on github.com. Please, try again...';
  const navHistory = useHistory();
  const [user, setUser] = useState("");
  const [errorState, setErrorState] = useState(false);
  //
  const handleSearch = () => {
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        const repos = response.data;
        if (repos != null) {
          const repoNames = [];
          // const repoUser = repos.owner;
          // console.log(user);
          repos.map((repo) => {
            repoNames.push(repo.name);
          });
          localStorage.setItem("repoUser", user);
          localStorage.setItem("repoNames", JSON.stringify(repoNames));
          navHistory.push("/getRepos");
        }
      })
      .catch((raisedError) => {
        setErrorState(true);
      });
  };
  //
  return (
    <Fragment>
      <S.Conteiner>
        <IntroText
          titleMessage="Fecth users repositories"
          messageString="Fecth and list users repositories on Github.com"
        />
      </S.Conteiner>
      <S.InputConteiner>
        <S.Input
          placeholder="User name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></S.Input>
        <S.Button onClick={handleSearch}>Search...</S.Button>
        {errorState ? <S.ErrorMessage>{ErrorMessage}</S.ErrorMessage> : ''}
      </S.InputConteiner>
    </Fragment>
  );
}
// class GitRepos extends Component {
//   //
//   render() {
//     console.log(this.props); // get parameters
//     return (
//       <>
//       <div>
//       <IntroText
//         titleMessage="Fecth users repositories"
//         messageString="Fecth and list users repositories on Github.com"/>
//         <!-- <p>Holiday id = {this.props.match.params.id}</p> -->
//       </div>
//       </>
//     );
//   }
// }
//
// export default GitRepos;
