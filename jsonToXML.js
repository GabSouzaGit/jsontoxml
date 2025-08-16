export default function jsonToXML(json){
    const TAB_INCR = 4;
    let xml = "";

    const tag = (name, value, tab) => {
        const notation = `<${name}>${value}</${name}>`;
        return "\n" + notation.padStart(notation.length + tab);
    }

    const emptytag = (name, tab) => {
        const notation = `<${name}></${name}>`;
        return "\n" + notation.padStart(notation.length + tab);
    }

    const closetag = (name, tab) => {
        const notation = `</${name}>`;
        return "\n" + notation.padStart(notation.length + tab);
    }

    const opentag = (name, tab) => {
        const notation = `<${name}>`;
        return "\n" + notation.padStart(notation.length + tab);
    }
    
    const jsonKeys = Object.keys(json);
    if(jsonKeys.length > 1) return;

    const conversor = (content, tagname, tab) => { 
        if(content == null){
            xml += tag(tagname, "null", tab)
            return;
        }  

        if(typeof content != "object"){ 
            xml += tag(tagname, content, tab);
            
            return;
        }
        
        const contentKeys = Object.keys(content);

        if(contentKeys.length <= 0){            
            xml += emptytag(tagname, tab);
            return;
        }

        xml += opentag(tagname, tab);
        for(let i = 0; i < contentKeys.length; i++){
            conversor(content[contentKeys[i]], contentKeys[i], tab + TAB_INCR)
        }
        xml += closetag(tagname, tab);
    }

    conversor(
        json[jsonKeys[0]], 
        jsonKeys[0],
        0
    );

    return xml;
}



