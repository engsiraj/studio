import { css } from 'styled-components';
import { vars } from "./var";


//border colors 
const BorderColor = p => {
const Name = p.borderColor;
for (const pro in vars) {
  if(Name === pro){
    return vars[pro];
  }
}
}

const border = css`
border:${p => p.border};
border-width: ${p => p.borderWidth};
border-style: ${p => p.borderStyle};
border-color:${p => p.borderColor};
border-color: ${BorderColor};
border-radius: ${p => p.corner};

`

export {border}