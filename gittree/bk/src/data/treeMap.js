export default function TreeMap(level, data){
    switch(level){
        case 0: return {"type":"server","dataField":"login", 
                        "fetchURL": `https://api.github.com/users/${data["login"]}/repos`}
        case 1: return {"type":"repo","dataField":"name",
                        "fetchURL": `https://api.github.com/repos/${data["owner"]["login"]}/${data["name"]}/pulls`}
        case 2: return {"type":"pull","dataField":"number",
                        "fetchURL": `https://api.github.com/repos/${data["user"]["login"]}/${data["head"]["repo"]["name"]}/pulls/${props.dataSource["number"]}/files`
                    }
        case 3: return {"type":"file", "dataField":"filename"}
    }
}