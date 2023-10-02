import { checkForBlockList } from "./check_for_block_list";
//import { getBlockListParams } from "./get_block_list_params";

export function cleanTypes(input: string, file: string) {
    for (let line of file) {
        line
    }
    let checked_input = checkForBlockList(input)
    //console.log(file)
    switch (checked_input.toLowerCase()) {
    case 'map of string':
        return 'Record<string, string>';
    case 'set of string':
        return 'string[]';
    case 'list of string':
        return 'string[]';
    case 'block list':
        return 'block list placeholder'
        //return getBlockListParams(input, file)
    // Add more cases for other possible values to replace
    default:
        return input.toLowerCase();
    }
}