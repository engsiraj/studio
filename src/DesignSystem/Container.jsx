import styled from 'styled-components'

const Container = styled.div`
//small
padding-right: ${props => {
    if (props.size === 'sm') return 'calc((100vw - 768px) / 2)'
    // color: $li;
}};
padding-left: ${props => {
if (props.size==='sm') return 'calc((100vw - 768px) / 2)'
}};
//large
padding-right: ${props => {
if (props.size==='lg') return 'calc((100vw - 960px) / 2)'
}};
padding-left: ${props => {
if (props.size==='lg') return 'calc((100vw - 960px) / 2)'
}};
//extra large
padding-right: ${props => {
if (props.size==='xl') return 'calc((100vw - 1200px) / 2)'
}};
padding-left: ${props => {
if (props.size==='xl') return 'calc((100vw - 1200px) / 2)'
}};
    
`
export default Container


