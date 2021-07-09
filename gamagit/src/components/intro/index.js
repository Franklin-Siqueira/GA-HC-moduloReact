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
//  /components/intro/index.js
// ------------------------------------------------------------------------
/** Imports */
import React from "react";
//
// ATTENTION:
// Below the difference between first CAPITAL LETTER and regular one
// This a SYNTHAX requirement!
// Functional component returning a React element (JSX)
const IntroText = (props) => (
  <div>
    <div className="card">
      <div className="card-body">
        <h2>{introText(props.titleMessage)}</h2>
        <h4>{props.messageString}</h4>
        <hr />
      </div>
    </div>
  </div>
);
// Build component
const introText = (props) => <div>{props}</div>;
//
export default IntroText;
