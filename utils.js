import handlebars from "https://cdn.skypack.dev/handlebars";

export default async (templatePath, dataPath) => {
  const data = await (await fetch(dataPath)).json();
  const templateSrc = await (await fetch(templatePath)).text();
  const template = handlebars.compile(templateSrc);

  return template(data);
};
