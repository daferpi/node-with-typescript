// this is a EJS module
import {parse, ParsedPath} from "path";

function parsePath(filename: string): ParsedPath {
    return parse(filename);
}

function main() {
    // tslint:disable-next-line:no-console
    console.log("hello");
}

main();
