export default function TreeMap(level, data) {
  switch (level) {
    case 0:
      return {
        level: 1,
        type: "repo",
        dataField: "name",
        data: data,
        fetchURL: `https://api.github.com/users/${data["login"]}/repos`,
      };
    case 1:
      return {
        level: 2,
        type: "pull",
        dataField: "number",
        data: data,
        fetchURL: `https://api.github.com/repos/${data["owner"]["login"]}/${data["name"]}/pulls`,
      };
    case 2:
      return {
        level: 3,
        type: "file",
        dataField: "filename",
        data: data,
        fetchURL: `https://api.github.com/repos/${data["user"]["login"]}/${data["head"]["repo"]["name"]}/pulls/${data["number"]}/files`,
      };
    case 3:
      return { level: 4, type: "file", dataField: "filename" };
  }
}
