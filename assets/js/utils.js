const stringToColour = function(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substring(2);
  }
  return colour.length===7?colour:colour+'0';
}

const getInitial=(name)=>(name==='')?'':name.split(/\s+/).map(word=>word[0].toUpperCase()).join('.')+".";