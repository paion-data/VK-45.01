/**
 * Copyright Jiaqi Liu
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import HuggingFaceIcon from "./images/huggingface.svg";
import GitHubSvg from "./images/github.svg";
import Logo from "./images/logo.svg";
import "./Footer.css";

export default function Footer(): JSX.Element {
  return (
    <div className="footer">
      <div className="footerInfo">
        <p>Study German with movie</p>
        <div className="navigation">
          <ul>
            <li className="listItem">
              <a href="https://github.com/paion-data/tiger">
                <span className="listItemIcon">
                  <img src={HuggingFaceIcon} alt="HuggingFaceIcon" />
                </span>
                <span className="listItemText">paion-data/tiger</span>
              </a>
            </li>
            <li className="listItem">
              <a href="https://github.com/paion-data/VK-45.01">
                <span className="listItemIcon">
                  <img src={GitHubSvg} alt="GitHubSvg" />
                </span>
                <span className="listItemText">VK-45.01</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img src={Logo} alt="logo" />
    </div>
  );
}
