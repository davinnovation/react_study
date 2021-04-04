import React from 'react';

function getRandomColor(seed) {
  var seedrandom = require('seedrandom');
  var letters = '0123456789ABCDEF';
  var color = '#';
  var seedrandom = require('seedrandom');
  var rng = seedrandom(seed);
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(rng() * 16)];
  }
  console.log(seed)
  return color;
}

const ChatCard = React.memo(({chat, index, uid}) => {
  var id_style = {
    width: 50, height: 50,
    backgroundColor : getRandomColor(uid),
  }

  return <div className="flex fdr pb16 chat_card" key={index}>
    <div className="w40 h40" style={id_style}>
    </div>
    <div className="pl16 f1">
      <div>
        <span className="fs color_gray pl8">-?</span>
      </div>
      <div className="pt8">
        {chat.content}
      </div>
    </div>    
  </div>
}, (prevProps, nextProps) => {
  // console.log('chat card');
  // console.log((prevProps.chat === nextProps.chat) && (prevProps.users === nextProps.users))
  return (prevProps.chat === nextProps.chat)
});

export default ChatCard