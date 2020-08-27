import React from 'react';
import { Container } from '@edx/paragon';
import Collapse from './Collapse';

const collapseContent = `Hot chicken cred 90's vaporware chicharrones truffaut you probably haven't heard of them adaptogen before they sold out hoodie fingerstache organic forage ramps. Vice dreamcatcher raclette XOXO art party gentrify waistcoat yr tumblr twee before they sold out chillwave affogato actually. Poutine brunch williamsburg poke tofu gochujang. Readymade tote bag tacos, poutine bicycle rights enamel pin tattooed brooklyn blog adaptogen succulents snackwave sustainable stumptown. Unicorn cloud bread polaroid, locavore literally blog wolf helvetica heirloom echo park. Poke readymade gentrify plaid slow-carb affogato air plant 8-bit hammock celiac tofu offal hexagon migas tacos. Messenger bag hashtag deep v ethical.`;

function App() {
  return (
    <div>
      <Collapse label="Toggle">{collapseContent}</Collapse>
    </div>
  );
}

export default App;
