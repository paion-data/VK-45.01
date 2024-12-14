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

import "./Footer.css"


export default function Footer() {
  return (
      <div className="footer">
        <p>VK-45.01 is a companion project for QubitPi/tiger</p>
        <div className="logo">
          <img src="/logo512.png" alt="logo"/>
        </div>
      </div>
  )
}
