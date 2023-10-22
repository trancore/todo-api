/**
 * Todo API
 * Todoアプリケーション用API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class PutTodoStatus {
    /**
    * 対応状態。  \"TODO\": 未着手。  \"WIP\": 対応中。 \"DONE\": 完了。
    */
    'status': PutTodoStatus.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "PutTodoStatus.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return PutTodoStatus.attributeTypeMap;
    }
}

export namespace PutTodoStatus {
    export enum StatusEnum {
        Todo = <any> 'TODO',
        Wip = <any> 'WIP',
        Done = <any> 'DONE'
    }
}