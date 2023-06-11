import _ from "lodash";
import "lodash.combinations";

function parse(str: string): string[] {
  const data = str.replace(/\W+/g, " ").split(" ");

  return data.filter((v) => Boolean(parseInt(v)) === false);
}

function chunkify(source: string, size: number) {
  const sourceArray = parse(source);

  return _.chunk(_.shuffle(sourceArray), size);
}

function kombinasi(source: string, n: number) {
  return _.combinations(parse(source), n);
}

export { chunkify, kombinasi, parse };
