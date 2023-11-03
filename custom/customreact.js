const reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    
    },
    children:'click here to go google'

}
const maincontainer=document.getElementById('root')
function inject(reactelement,container)
{
    const domelement=document.createElement(reactelement.type)
    domelement.innerHTML=reactelement.children
    for (const prop in reactelement.props) {
        domelement.setAttribute(prop,reactelement.props[prop])
        }
        container.appendChild(domelement)
    }

inject(reactelement,maincontainer)